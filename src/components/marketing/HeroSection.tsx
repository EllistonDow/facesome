"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Award,
  Layers,
} from "lucide-react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/[0.08] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-500/[0.05] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/[0.06] px-3.5 py-1.5 text-xs text-amber-300 backdrop-blur-md shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span className="font-medium">The Executive Digital Portrait Atelier</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-white leading-[1.12]">
              Bespoke Corporate Headshots.{" "}
              <span className="gold-gradient-text block">
                Without the Studio Fee.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              Transform simple phone selfies into Wall Street, Silicon Valley, and Forbes-worthy executive portraits in under 60 seconds. Studio-grade lighting, bespoke tailored outfits, and genuine facial fidelity.
            </p>

            {/* Proof checklist */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-zinc-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Zero plastic/fake look</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Full commercial rights</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>100% money-back guarantee</span>
              </div>
            </div>

            {/* Primary Action Row */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="/headshots"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#dfb86c] via-[#f0cf85] to-[#c7983c] px-7 py-3.5 text-sm font-semibold text-black shadow-xl shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/35"
              >
                <span>Generate My Executive Portraits</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#styles"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-zinc-200 hover:bg-white/[0.08] hover:text-white transition-all"
              >
                <span>View Style Catalog</span>
              </a>
            </div>

            {/* Trust footer stats */}
            <div className="mt-10 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  99.4%
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5">
                  Facial Fidelity Rate
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold gold-gradient-text">
                  &lt; 60s
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5">
                  Fast AI Generation
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  $19
                </div>
                <div className="text-[11px] text-zinc-400 mt-0.5">
                  Vs. $350 Studio Fee
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Studio Before / After Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Luxury Border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-amber-500/30 via-white/5 to-transparent blur-sm -z-10" />

              <div className="glass-panel rounded-2xl p-4 shadow-2xl">
                {/* Header Switcher */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-medium uppercase tracking-wider text-zinc-300">
                      Studio Comparison
                    </span>
                  </div>

                  <div className="flex rounded-full bg-black/50 p-0.5 border border-white/10 text-xs">
                    <button
                      onClick={() => setActiveTab("before")}
                      className={`px-3 py-1 rounded-full font-medium transition-all ${
                        activeTab === "before"
                          ? "bg-zinc-800 text-white shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      Raw Selfie
                    </button>
                    <button
                      onClick={() => setActiveTab("after")}
                      className={`px-3 py-1 rounded-full font-medium transition-all ${
                        activeTab === "after"
                          ? "bg-gradient-to-r from-[#dfb86c] to-[#c7983c] text-black shadow-sm"
                          : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      Facesome Portrait
                    </button>
                  </div>
                </div>

                {/* Image Display */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-950">
                  {activeTab === "after" ? (
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                      alt="Facesome Generated Executive Headshot"
                      className="h-full w-full object-cover transition-opacity duration-300"
                    />
                  ) : (
                    <div className="relative h-full w-full">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80"
                        alt="Raw Casual Phone Selfie"
                        className="h-full w-full object-cover filter contrast-90 brightness-95"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-3 left-3 rounded bg-black/70 px-2 py-1 text-[11px] text-zinc-300 backdrop-blur-md">
                        Ordinary smartphone selfie (dim ambient lighting)
                      </div>
                    </div>
                  )}

                  {/* Watermark / Badge Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md border border-white/10">
                    {activeTab === "after" ? (
                      <>
                        <Sparkles className="h-3 w-3 text-amber-400" />
                        <span>Executive Slate & Softbox Light</span>
                      </>
                    ) : (
                      <span>Uncalibrated Raw Input</span>
                    )}
                  </div>

                  {/* LinkedIn Circle Avatar Mini-Widget */}
                  {activeTab === "after" && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-xl bg-black/80 p-2 backdrop-blur-md border border-amber-500/30 shadow-lg">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-emerald-400">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                          alt="LinkedIn Avatar"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="text-left pr-1">
                        <div className="text-[10px] font-semibold text-white">
                          LinkedIn Ready
                        </div>
                        <div className="text-[9px] text-emerald-400">
                          100% Circle-Safe
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Spec Footer */}
                <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 px-1">
                  <span>Style: Wall Street Bespoke</span>
                  <span className="text-amber-400">8K Master Calibrated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
