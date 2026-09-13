"use client";

import { useEffect, useState } from "react";
import { Sparkles, Camera, Layers, CheckCircle2 } from "lucide-react";

interface ProcessingStepProps {
  onComplete: () => void;
  styleTitle: string;
}

export default function ProcessingStep({
  onComplete,
  styleTitle,
}: ProcessingStepProps) {
  const [progress, setProgress] = useState(12);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const stages = [
    {
      title: "Analyzing Biometric Landmarks",
      desc: "Locking facial geometry, ocular distance, and bone structure...",
    },
    {
      title: "Synthesizing Bespoke Wardrobe",
      desc: "Calibrating tailored Italian textiles, lapels, and shoulder drape...",
    },
    {
      title: "Simulating Atelier Studio Optics",
      desc: "Ray-tracing 85mm portrait key light and subtle rim luminescence...",
    },
    {
      title: "8K Neural Texture Mastering",
      desc: "Rendering natural pore details and color calibration...",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 700);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + increment, 100);

        if (next >= 85) setActiveStageIndex(3);
        else if (next >= 60) setActiveStageIndex(2);
        else if (next >= 30) setActiveStageIndex(1);
        else setActiveStageIndex(0);

        return next;
      });
    }, 450);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="py-12 flex flex-col items-center justify-center text-center max-w-lg mx-auto space-y-8">
      {/* Animated Glowing Studio Aperture */}
      <div className="relative">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-300/10 to-transparent blur-xl animate-pulse" />
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-amber-500/40 bg-gradient-to-b from-[#1c1c24] to-[#0d0d12] shadow-2xl">
          <Camera className="h-10 w-10 text-amber-400 animate-pulse" />
          <div className="absolute inset-1 rounded-full border border-dashed border-amber-400/30 animate-spin" style={{ animationDuration: "12s" }} />
        </div>
      </div>

      {/* Headline & Style */}
      <div>
        <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
          Atelier Pipeline Active
        </span>
        <h2 className="mt-2 text-2xl font-serif font-semibold text-white">
          Developing Your {styleTitle} Portraits
        </h2>
        <p className="mt-2 text-xs text-zinc-400">
          Our high-fidelity neural engine is composing your tailored imagery. Average time: ~30-45 seconds.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-1">
          <span>Processing Stage {activeStageIndex + 1} of 4</span>
          <span className="text-amber-400 font-bold">{progress}%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-900 border border-white/10 p-[1px]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#dfb86c] via-[#f0cf85] to-[#c7983c] transition-all duration-300 ease-out shadow-lg shadow-amber-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Active Stage Stepper Cards */}
      <div className="w-full text-left rounded-xl border border-white/10 bg-[#0e0e13] p-4 space-y-3">
        {stages.map((stage, idx) => {
          const isDone = idx < activeStageIndex;
          const isCurrent = idx === activeStageIndex;

          return (
            <div
              key={idx}
              className={`flex items-start gap-3 transition-opacity duration-300 ${
                isCurrent ? "opacity-100" : isDone ? "opacity-60" : "opacity-30"
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isDone ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                ) : isCurrent ? (
                  <div className="h-4 w-4 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
                ) : (
                  <div className="h-4 w-4 rounded-full border border-zinc-600" />
                )}
              </div>
              <div>
                <div className={`text-xs font-medium ${isCurrent ? "text-amber-300 font-semibold" : "text-zinc-200"}`}>
                  {stage.title}
                </div>
                <div className="text-[11px] text-zinc-400">{stage.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
