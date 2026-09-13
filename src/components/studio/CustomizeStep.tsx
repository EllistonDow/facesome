"use client";

import { HEADSHOT_STYLES } from "@/lib/constants/styles";
import { StyleGender } from "@/types";
import { Sparkles, Check, Info } from "lucide-react";

interface CustomizeStepProps {
  selectedStyleId: string;
  onStyleSelect: (id: string) => void;
  gender: StyleGender;
  onGenderSelect: (g: StyleGender) => void;
  portraitCount: number;
  onPortraitCountSelect: (count: number) => void;
  userCredits: number;
}

export default function CustomizeStep({
  selectedStyleId,
  onStyleSelect,
  gender,
  onGenderSelect,
  portraitCount,
  onPortraitCountSelect,
  userCredits,
}: CustomizeStepProps) {
  const creditsNeeded = portraitCount === 10 ? 20 : portraitCount === 20 ? 40 : 80;

  return (
    <div className="space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-serif font-semibold text-white">
          Step 2: Curate Your Atelier Direction
        </h2>
        <p className="mt-1.5 text-xs text-zinc-400">
          Tailor wardrobe silhouettes, optical depth, and output batch size.
        </p>
      </div>

      {/* 1. Wardrobe & Gender Archetype */}
      <div>
        <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300 block mb-3">
          1. Wardrobe & Silhouette Profile
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: "masculine", label: "Masculine Silhouette", sub: "Tailored suit / blazer & shirt" },
            { id: "feminine", label: "Feminine Silhouette", sub: "Bespoke blazer / silk blouse" },
            { id: "neutral", label: "Modern Neutral", sub: "Architectural knitwear / collarless" },
          ].map((item) => {
            const isSelected = gender === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onGenderSelect(item.id as StyleGender)}
                className={`rounded-xl p-3.5 text-left border transition-all ${
                  isSelected
                    ? "border-amber-400 bg-amber-500/[0.08] text-white shadow-lg shadow-amber-500/10"
                    : "border-white/10 bg-[#111116] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold">{item.label}</span>
                  {isSelected && <Check className="h-3.5 w-3.5 text-amber-400" />}
                </div>
                <span className="text-[10px] text-zinc-500 block mt-1">
                  {item.sub}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Style Collection Selection */}
      <div>
        <label className="text-xs uppercase tracking-wider font-semibold text-zinc-300 block mb-3">
          2. Signature Studio Aesthetic
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HEADSHOT_STYLES.map((style) => {
            const isSelected = selectedStyleId === style.id;
            return (
              <div
                key={style.id}
                onClick={() => onStyleSelect(style.id)}
                className={`group relative flex flex-col justify-between rounded-xl overflow-hidden border cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "border-amber-400 ring-1 ring-amber-400/50 bg-[#14141c]"
                    : "border-white/10 bg-[#0e0e13] hover:border-white/20"
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                  <img
                    src={style.previewUrl}
                    alt={style.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {isSelected && (
                    <div className="absolute top-2 right-2 rounded-full bg-amber-400 p-1 text-black shadow-md">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  )}
                  <span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-amber-300 backdrop-blur-md">
                    {style.category}
                  </span>
                </div>

                <div className="p-3.5 space-y-1">
                  <h3 className="text-sm font-serif font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {style.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 line-clamp-2">
                    {style.description}
                  </p>
                  <div className="pt-2 text-[10px] text-zinc-500">
                    <span className="text-zinc-400 font-medium">Lighting:</span> {style.lighting}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Output Count & Credit Allocation */}
      <div className="rounded-xl border border-white/10 bg-[#101015] p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-200 block">
              3. Generation Batch Size
            </span>
            <span className="text-xs text-zinc-400 mt-0.5 block">
              More variations allow exploring subtle expressions, angles, and micro-lighting.
            </span>
          </div>

          <div className="flex rounded-lg bg-black/60 p-1 border border-white/10">
            {[
              { count: 10, label: "10 Portraits", cost: 20 },
              { count: 20, label: "20 Portraits", cost: 40 },
              { count: 40, label: "40 Portraits (VIP)", cost: 80 },
            ].map((option) => (
              <button
                key={option.count}
                type="button"
                onClick={() => onPortraitCountSelect(option.count)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  portraitCount === option.count
                    ? "bg-gradient-to-r from-[#dfb86c] to-[#c7983c] text-black font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Credit Summary Pill */}
        <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-zinc-400">
            <Info className="h-4 w-4 text-amber-400" />
            <span>
              This session will utilize{" "}
              <strong className="text-amber-300 font-semibold">{creditsNeeded} Credits</strong>.
              Your balance:{" "}
              <strong className="text-white">{userCredits} Credits</strong>.
            </span>
          </div>

          {userCredits < creditsNeeded && (
            <span className="text-xs font-semibold text-rose-400">
              Insufficient Credits (Top up below)
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
