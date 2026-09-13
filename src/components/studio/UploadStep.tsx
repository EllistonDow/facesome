"use client";

import { useState, useRef } from "react";
import { UploadCloud, CheckCircle2, AlertCircle, X, Image as ImageIcon } from "lucide-react";

interface UploadStepProps {
  onPhotoSelected: (photoUrl: string) => void;
  selectedPhoto: string | null;
}

export default function UploadStep({
  onPhotoSelected,
  selectedPhoto,
}: UploadStepProps) {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Demo sample photos for instant testing without uploading personal pictures
  const sampleSelfies = [
    {
      name: "Candid Casual 1",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Natural Light 2",
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Smartphone Selfie 3",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const handleFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onPhotoSelected(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-serif font-semibold text-white">
          Step 1: Provide Your Reference Photo
        </h2>
        <p className="mt-1.5 text-xs text-zinc-400">
          Upload 1 clear candid photo or selfie. Facesome uses biometric landmarks to keep your authentic bone structure while crafting high-end studio lighting.
        </p>
      </div>

      {/* Main Drag & Drop Zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-300 ${
          dragActive
            ? "border-amber-400 bg-amber-500/[0.08]"
            : selectedPhoto
            ? "border-emerald-500/50 bg-emerald-500/[0.04]"
            : "border-white/15 hover:border-amber-400/60 bg-[#0d0d12] hover:bg-[#111118]"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) handleFile(e.target.files[0]);
          }}
        />

        {selectedPhoto ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-36 w-36 overflow-hidden rounded-xl border-2 border-emerald-400 shadow-xl">
              <img
                src={selectedPhoto}
                alt="Selected reference photo"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPhotoSelected("");
                }}
                className="absolute top-1.5 right-1.5 rounded-full bg-black/80 p-1 text-zinc-300 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>Biometric Landmarks Verified • Ready For Synthesis</span>
            </div>
            <span className="text-[11px] text-zinc-500">
              Click or drag to replace with another photo
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
              <UploadCloud className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                Drag and drop your photo here, or{" "}
                <span className="text-amber-400 underline underline-offset-4">
                  browse files
                </span>
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Supports JPG, PNG, WEBP (Max 20MB)
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Instant Demo Presets (for users testing without uploading) */}
      <div className="rounded-xl border border-white/[0.08] bg-black/30 p-4">
        <span className="text-xs font-medium text-zinc-400 block mb-2.5">
          Or quickly test with a sample selfie:
        </span>
        <div className="grid grid-cols-3 gap-3">
          {sampleSelfies.map((sample, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onPhotoSelected(sample.url)}
              className="group flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#121217] p-2 hover:border-amber-500/40 text-left transition-all"
            >
              <img
                src={sample.url}
                alt={sample.name}
                className="h-9 w-9 rounded-md object-cover"
              />
              <div className="overflow-hidden">
                <span className="text-[11px] font-medium text-zinc-300 block truncate group-hover:text-amber-300">
                  {sample.name}
                </span>
                <span className="text-[10px] text-zinc-500 block">Click to use</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quality Guidelines Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-3.5 space-y-1.5">
          <div className="flex items-center gap-1.5 font-medium text-emerald-400">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            <span>Recommended for Best Results</span>
          </div>
          <ul className="text-zinc-400 space-y-1 list-disc list-inside text-[11px]">
            <li>Even, natural frontal or window lighting</li>
            <li>Direct eye contact with camera or slight head turn</li>
            <li>Natural smile or composed executive expression</li>
          </ul>
        </div>

        <div className="rounded-xl border border-red-500/20 bg-red-500/[0.04] p-3.5 space-y-1.5">
          <div className="flex items-center gap-1.5 font-medium text-red-400">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>Things to Avoid</span>
          </div>
          <ul className="text-zinc-400 space-y-1 list-disc list-inside text-[11px]">
            <li>Heavy dark sunglasses or obstructive hats</li>
            <li>Extreme fish-eye selfie distortion or low resolution</li>
            <li>Heavy beauty filters that blur facial bone structure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
