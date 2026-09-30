"use client";

import { useState } from "react";
import { HEADSHOT_STYLES } from "@/lib/constants/styles";
import { Sparkles, ArrowRight, Check, Camera, Briefcase } from "lucide-react";

export default function StyleShowcase() {
  const [selectedStyleId, setSelectedStyleId] = useState(HEADSHOT_STYLES[0].id);
  const activeStyle =
    HEADSHOT_STYLES.find((s) => s.id === selectedStyleId) || HEADSHOT_STYLES[0];

  return (
    <section id="styles" className="py-20 border-t border-white/[0.08] bg-[#070709] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs text-zinc-300">
            <Camera className="h-3.5 w-3.5 text-amber-400" />
            <span>Curated Atelier Styles</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-semibold text-white tracking-tight">
            Tailored For Your Specific Industry
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-light">
            Every industry has a distinct visual language. Facesome crafts precise optical depth, lighting setups, and wardrobe textures for your domain.
          </p>
        </div>

        {/* Style Selector Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {HEADSHOT_STYLES.map((style) => {
            const isSelected = style.id === selectedStyleId;
            return (
              <button
                key={style.id}
                onClick={() => setSelectedStyleId(style.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-gradient-to-r from-[#dfb86c] to-[#c7983c] text-black shadow-lg shadow-amber-500/20 font-semibold scale-105"
                    : "bg-zinc-900/80 text-zinc-400 border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {style.title}
              </button>
            );
          })}
        </div>

        {/* Active Style Spotlight Display */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Image Preview with Zoom effect */}
            <div className="md:col-span-6 relative aspect-square sm:aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl">
              <img
                src={activeStyle.previewUrl}
                alt={activeStyle.title}
                className="h-full w-full object-cover object-center transition-all duration-500 hover:scale-105"
              />
              <div className="absolute top-3 left-3 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-medium text-amber-300 backdrop-blur-md border border-amber-500/20">
                {activeStyle.badge || "Signature Collection"}
              </div>
            </div>

            {/* Style Details & Attributes */}
            <div className="md:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
                  {activeStyle.category} Archetype
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-serif font-semibold text-white">
                  {activeStyle.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  {activeStyle.description}
                </p>
              </div>

              {/* Technical Optics Breakdown */}
              <div className="space-y-3 rounded-xl bg-black/40 p-4 border border-white/[0.06] text-xs">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-zinc-400 w-24 shrink-0">
                    Wardrobe:
                  </span>
                  <span className="text-zinc-200">{activeStyle.outfit}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-zinc-400 w-24 shrink-0">
                    Lighting:
                  </span>
                  <span className="text-zinc-200">{activeStyle.lighting}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-zinc-400 w-24 shrink-0">
                    Background:
                  </span>
                  <span className="text-zinc-200">{activeStyle.background}</span>
                </div>
              </div>

              {/* Best For Tag Cloud */}
              <div>
                <span className="text-xs font-medium text-zinc-400 block mb-2">
                  Recommended For:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeStyle.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-white/[0.05] border border-white/[0.08] px-2.5 py-1 text-[11px] text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={`/headshots?style=${activeStyle.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#dfb86c] to-[#c7983c] px-6 py-3 text-xs font-semibold text-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all"
                >
                  <span>Select & Generate in This Style</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
