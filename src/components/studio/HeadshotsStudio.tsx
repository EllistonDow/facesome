import React, { useState, useEffect } from "react";
import UploadStep from "@/components/studio/UploadStep";
import CustomizeStep from "@/components/studio/CustomizeStep";
import ProcessingStep from "@/components/studio/ProcessingStep";
import GalleryStep from "@/components/studio/GalleryStep";
import { HEADSHOT_STYLES } from "@/lib/constants/styles";
import type { StyleGender, ResultPhoto } from "@/types";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Camera,
  Coins,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export default function HeadshotsStudio() {
  const [initialStyle, setInitialStyle] = useState(HEADSHOT_STYLES[0].id);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const styleParam = params.get("style");
      if (styleParam) setInitialStyle(styleParam);
    }
  }, []);

  const [step, setStep] = useState<"upload" | "customize" | "processing" | "gallery">("upload");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  );
  const [selectedStyleId, setSelectedStyleId] = useState<string>(initialStyle);
  const [gender, setGender] = useState<StyleGender>("masculine");
  const [portraitCount, setPortraitCount] = useState<number>(20);
  const [userCredits, setUserCredits] = useState<number>(100);

  useEffect(() => {
    if (initialStyle) {
      setSelectedStyleId(initialStyle);
    }
  }, [initialStyle]);

  const activeStyle =
    HEADSHOT_STYLES.find((s) => s.id === selectedStyleId) || HEADSHOT_STYLES[0];

  const demoOutputs: Record<string, string[]> = {
    "wall-street-executive": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80",
    ],
    "silicon-valley-founder": [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80",
    ],
  };

  const [photos, setPhotos] = useState<ResultPhoto[]>([]);

  const handleStartGeneration = async () => {
    setStep("processing");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          photoUrl: selectedPhoto,
          styleId: selectedStyleId,
          gender,
          count: portraitCount,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        if (json.data && json.data.photos) {
          setPhotos(json.data.photos);
          setStep("gallery");
          setUserCredits((prev) => Math.max(0, prev - portraitCount));
          return;
        }
      }
    } catch (err) {
      console.warn("API route fallback to demo pipeline", err);
    }

    // Graceful fallback for demo or when API key is not yet set
    setTimeout(() => {
      const urls = demoOutputs[selectedStyleId] || demoOutputs["wall-street-executive"];
      const generated: ResultPhoto[] = urls.slice(0, 6).map((url, i) => ({
        id: `gen-${i + 1}`,
        url,
        styleId: selectedStyleId,
        createdAt: new Date().toISOString(),
      }));

      setPhotos(generated);
      setStep("gallery");
      setUserCredits((prev) => Math.max(0, prev - portraitCount));
    }, 4500);
  };

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Studio Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs text-amber-300 font-medium">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Facesome High-Fidelity Studio</span>
          </div>
          <h1 className="mt-2 text-2xl sm:text-3xl font-serif font-semibold text-white">
            Bespoke Executive Portrait Studio
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400">
            Biometric likeness preservation with cinema-grade chiaroscuro & optics
          </p>
        </div>

        {/* Credit Indicator */}
        <div className="flex items-center gap-4 bg-[#111116] border border-white/10 rounded-2xl px-4 py-2.5">
          <div className="h-8 w-8 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
            <Coins className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-semibold tracking-wider text-zinc-400">
              Active Studio Credits
            </div>
            <div className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>{userCredits} Credits</span>
              <span className="text-[10px] text-emerald-400 font-normal">
                (Sufficient for {Math.floor(userCredits / 20)} sessions)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Step Progress Indicator */}
      <div className="mb-10 max-w-3xl mx-auto">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
          {[
            { id: "upload", label: "1. Reference", desc: "Select Base Photo" },
            { id: "customize", label: "2. Atelier", desc: "Archetype & Optics" },
            { id: "processing", label: "3. Synthesis", desc: "Flux AI Engine" },
            { id: "gallery", label: "4. Portfolio", desc: "4K Master Collection" },
          ].map((item, index) => {
            const isCurrent = step === item.id;
            const isCompleted =
              (step === "customize" && index === 0) ||
              (step === "processing" && index <= 1) ||
              (step === "gallery" && index <= 2);

            return (
              <div
                key={item.id}
                className={`rounded-xl p-3 border transition-all ${
                  isCurrent
                    ? "border-amber-400/60 bg-amber-400/[0.06] text-white"
                    : isCompleted
                    ? "border-emerald-500/30 bg-emerald-500/[0.04] text-zinc-300"
                    : "border-white/5 bg-white/[0.02] text-zinc-500"
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold">
                  {isCompleted && <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />}
                  <span>{item.label}</span>
                </div>
                <div className="text-[10px] hidden sm:block text-zinc-400 mt-0.5">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl relative">
        {step === "upload" && (
          <UploadStep
            selectedPhoto={selectedPhoto}
            onSelectPhoto={setSelectedPhoto}
            onNext={() => setStep("customize")}
          />
        )}

        {step === "customize" && (
          <CustomizeStep
            selectedStyleId={selectedStyleId}
            onSelectStyle={setSelectedStyleId}
            gender={gender}
            onSelectGender={setGender}
            portraitCount={portraitCount}
            onSelectCount={setPortraitCount}
            onBack={() => setStep("upload")}
            onStart={handleStartGeneration}
          />
        )}

        {step === "processing" && (
          <ProcessingStep
            styleName={activeStyle.title}
            photoUrl={selectedPhoto || ""}
          />
        )}

        {step === "gallery" && (
          <GalleryStep
            photos={photos}
            onReset={() => {
              setStep("upload");
              setPhotos([]);
            }}
            styleTitle={activeStyle.title}
          />
        )}
      </div>
    </div>
  );
}
