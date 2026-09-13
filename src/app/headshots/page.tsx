"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import UploadStep from "@/components/studio/UploadStep";
import CustomizeStep from "@/components/studio/CustomizeStep";
import ProcessingStep from "@/components/studio/ProcessingStep";
import GalleryStep from "@/components/studio/GalleryStep";
import { HEADSHOT_STYLES } from "@/lib/constants/styles";
import { StyleGender, ResultPhoto } from "@/types";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Camera,
  Coins,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

function HeadshotsStudioContent() {
  const searchParams = useSearchParams();
  const initialStyle = searchParams.get("style") || HEADSHOT_STYLES[0].id;

  const [step, setStep] = useState<"upload" | "customize" | "processing" | "gallery">("upload");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  );
  const [selectedStyleId, setSelectedStyleId] = useState<string>(initialStyle);
  const [gender, setGender] = useState<StyleGender>("masculine");
  const [portraitCount, setPortraitCount] = useState<number>(20);
  const [userCredits, setUserCredits] = useState<number>(100);

  const activeStyle =
    HEADSHOT_STYLES.find((s) => s.id === selectedStyleId) || HEADSHOT_STYLES[0];

  // Curated demo outputs matching the selected styles
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

  const handleStartGeneration = () => {
    const creditsCost = portraitCount === 10 ? 20 : portraitCount === 20 ? 40 : 80;
    if (userCredits < creditsCost) {
      alert("Insufficient credits! Please top up from the pricing section.");
      return;
    }
    setUserCredits((prev) => prev - creditsCost);
    setStep("processing");
  };

  const handleProcessingComplete = () => {
    const defaultUrls = demoOutputs[selectedStyleId] || demoOutputs["wall-street-executive"];
    const generated: ResultPhoto[] = defaultUrls.map((url, i) => ({
      id: `res-${Date.now()}-${i}`,
      url,
      styleId: selectedStyleId,
      aspectRatio: "4:5",
      createdAt: new Date().toISOString(),
    }));
    setPhotos(generated);
    setStep("gallery");
  };

  const handleReset = () => {
    setStep("upload");
  };

  const stepsList = [
    { id: "upload", label: "1. Reference Photo" },
    { id: "customize", label: "2. Style Curation" },
    { id: "processing", label: "3. Neural Studio" },
    { id: "gallery", label: "4. Master Portfolio" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#08080a] text-zinc-100">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Top Breadcrumb & Step Stepper */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Atelier</span>
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
              Executive Headshots Studio
            </span>
          </div>

          {/* Stepper indicator */}
          <div className="flex items-center gap-2 text-xs">
            {stepsList.map((s, idx) => {
              const isActive = step === s.id;
              const isPast =
                (step === "customize" && idx === 0) ||
                (step === "processing" && idx <= 1) ||
                (step === "gallery" && idx <= 2);

              return (
                <div key={s.id} className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                      isActive
                        ? "bg-amber-400 text-black font-semibold"
                        : isPast
                        ? "bg-zinc-800 text-emerald-400"
                        : "bg-zinc-900 text-zinc-500"
                    }`}
                  >
                    {s.label}
                  </span>
                  {idx < stepsList.length - 1 && (
                    <span className="text-zinc-600">→</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 1: Upload */}
        {step === "upload" && (
          <div className="space-y-8">
            <UploadStep
              selectedPhoto={selectedPhoto}
              onPhotoSelected={(url) => setSelectedPhoto(url)}
            />

            <div className="flex justify-end pt-4 border-t border-white/10">
              <button
                type="button"
                disabled={!selectedPhoto}
                onClick={() => setStep("customize")}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#dfb86c] to-[#c7983c] px-7 py-3 text-xs font-semibold text-black shadow-lg shadow-amber-500/20 hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100 transition-all"
              >
                <span>Continue to Style Curation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Customize */}
        {step === "customize" && (
          <div className="space-y-8">
            <CustomizeStep
              selectedStyleId={selectedStyleId}
              onStyleSelect={(id) => setSelectedStyleId(id)}
              gender={gender}
              onGenderSelect={(g) => setGender(g)}
              portraitCount={portraitCount}
              onPortraitCountSelect={(c) => setPortraitCount(c)}
              userCredits={userCredits}
            />

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep("upload")}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous Step</span>
              </button>

              <button
                type="button"
                onClick={handleStartGeneration}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#dfb86c] via-[#f0cf85] to-[#c7983c] px-8 py-3.5 text-xs font-semibold text-black shadow-xl shadow-amber-500/20 hover:scale-[1.02] transition-all"
              >
                <Sparkles className="h-4 w-4" />
                <span>Generate {portraitCount} Studio Portraits</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Processing */}
        {step === "processing" && (
          <ProcessingStep
            styleTitle={activeStyle.title}
            onComplete={handleProcessingComplete}
          />
        )}

        {/* Step 4: Master Gallery */}
        {step === "gallery" && (
          <GalleryStep
            photos={photos}
            onReset={handleReset}
            styleTitle={activeStyle.title}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function HeadshotsStudioPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#08080a] flex items-center justify-center text-zinc-400">
          Loading Atelier Studio...
        </div>
      }
    >
      <HeadshotsStudioContent />
    </Suspense>
  );
}
