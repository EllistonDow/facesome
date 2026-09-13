"use client";

import { useState, useEffect } from "react";
import { ResultPhoto } from "@/types";
import {
  Download,
  Share2,
  Sparkles,
  Heart,
  Eye,
  RefreshCw,
  CheckCircle2,
  Linkedin,
} from "lucide-react";
import LinkedInPreviewModal from "./LinkedInPreviewModal";
import confetti from "canvas-confetti";

interface GalleryStepProps {
  photos: ResultPhoto[];
  onReset: () => void;
  styleTitle: string;
}

export default function GalleryStep({
  photos,
  onReset,
  styleTitle,
}: GalleryStepProps) {
  const [selectedPhotoForLinkedIn, setSelectedPhotoForLinkedIn] = useState<string | null>(null);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Launch celebratory confetti when user's executive portraits land
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#dfb86c", "#ffffff", "#e5b741"],
      });
    } catch {
      // safe fallback
    }
  }, []);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDownload = (photoUrl: string, index: number) => {
    const a = document.createElement("a");
    a.href = photoUrl;
    a.download = `facesome-portrait-${index + 1}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="space-y-8">
      {/* Gallery Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs text-emerald-400 font-medium border border-emerald-500/20 mb-2">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Master Collection Rendered ({photos.length} Portraits)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-white">
            Your {styleTitle} Atelier Portfolio
          </h2>
          <p className="mt-1 text-xs text-zinc-400">
            Click any portrait to inspect live LinkedIn circle framing or download in full 4K studio resolution.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={onReset}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#111116] px-4 py-2.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>New Session</span>
          </button>

          <button
            onClick={() => handleDownload(photos[0]?.url || "", 0)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#dfb86c] to-[#c7983c] px-5 py-2.5 text-xs font-semibold text-black shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download All 4K</span>
          </button>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo, idx) => {
          const isLiked = !!likedMap[photo.id];

          return (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoForLinkedIn(photo.url)}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-xl cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                <img
                  src={photo.url}
                  alt={`Portrait ${idx + 1}`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                {/* Like Button */}
                <button
                  type="button"
                  onClick={(e) => toggleLike(photo.id, e)}
                  className={`absolute top-3 right-3 rounded-full p-2 backdrop-blur-md transition-all ${
                    isLiked
                      ? "bg-rose-500 text-white shadow-lg shadow-rose-500/40"
                      : "bg-black/60 text-zinc-300 hover:text-white opacity-0 group-hover:opacity-100"
                  }`}
                  title={isLiked ? "Favorited" : "Save to favorites"}
                >
                  <Heart
                    className={`h-4 w-4 ${isLiked ? "fill-white" : ""}`}
                  />
                </button>

                {/* Quick LinkedIn Preview Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md border border-white/20 shadow-2xl">
                    <Linkedin className="h-4 w-4 text-[#0a66c2]" />
                    <span>Test in LinkedIn Circle</span>
                  </div>
                </div>

                {/* Bottom Card Bar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="rounded bg-black/70 px-2 py-1 text-[10px] text-zinc-300 backdrop-blur-md">
                    Portrait #{idx + 1}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(photo.url, idx);
                    }}
                    className="rounded bg-white/20 p-1.5 hover:bg-white/40 backdrop-blur-md text-white transition-colors"
                    title="Quick Download 4K"
                  >
                    <Download className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LinkedIn Circle Preview Modal */}
      {selectedPhotoForLinkedIn && (
        <LinkedInPreviewModal
          photoUrl={selectedPhotoForLinkedIn}
          onClose={() => setSelectedPhotoForLinkedIn(null)}
          onDownload={() => handleDownload(selectedPhotoForLinkedIn, 0)}
        />
      )}
    </div>
  );
}
