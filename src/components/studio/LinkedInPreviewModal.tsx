"use client";

import { useState } from "react";
import { X, Download, Share2, Check, Sparkles, Building2, MapPin } from "lucide-react";

interface LinkedInPreviewModalProps {
  photoUrl: string;
  onClose: () => void;
  onDownload: () => void;
}

export default function LinkedInPreviewModal({
  photoUrl,
  onClose,
  onDownload,
}: LinkedInPreviewModalProps) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("Alexander Vance");
  const [headline, setHeadline] = useState("Managing Director & Partner | Venture & Strategy");

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0f0f14] shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-semibold text-white font-serif">
              LinkedIn Profile Simulation Previewer
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body: LinkedIn Card Simulation */}
        <div className="p-6">
          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-[#1b1f23] text-white shadow-xl">
            {/* LinkedIn Banner */}
            <div className="relative h-28 sm:h-36 w-full bg-gradient-to-r from-slate-900 via-indigo-950 to-zinc-900">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            {/* Profile Content Container */}
            <div className="relative px-6 pb-6 pt-0">
              {/* Circular Avatar */}
              <div className="relative -mt-16 sm:-mt-20 mb-4 inline-block">
                <div className="h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full border-4 border-[#1b1f23] bg-zinc-900 shadow-2xl ring-2 ring-emerald-400/80">
                  <img
                    src={photoUrl}
                    alt="LinkedIn Preview Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-1 rounded-full bg-emerald-500 p-1 text-white shadow-md border-2 border-[#1b1f23]" title="Optimal Framing Confirmed">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
              </div>

              {/* Editable Name & Headline for realism */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-xl sm:text-2xl font-bold text-white bg-transparent border-b border-transparent hover:border-zinc-600 focus:border-amber-400 outline-none w-full max-w-sm"
                    title="Click to customize your preview name"
                  />
                  <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400">
                    1st
                  </span>
                </div>

                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="text-xs sm:text-sm text-zinc-300 bg-transparent border-b border-transparent hover:border-zinc-600 focus:border-amber-400 outline-none w-full"
                  title="Click to customize your title"
                />

                <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5 text-zinc-500" />
                    Global Leadership Group
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                    New York City Metropolitan Area
                  </span>
                  <span className="text-[#70b5f9] font-medium hover:underline cursor-pointer">
                    500+ connections
                  </span>
                </div>
              </div>

              {/* Mock Action Buttons */}
              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-[#0a66c2] px-4 py-1.5 text-xs font-semibold text-white">
                  Open to
                </span>
                <span className="rounded-full border border-zinc-500 px-4 py-1.5 text-xs font-semibold text-zinc-200">
                  Add profile section
                </span>
                <span className="rounded-full border border-zinc-500 px-3 py-1.5 text-xs font-semibold text-zinc-400">
                  More
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 bg-black/40 px-6 py-4">
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <Sparkles className="h-4 w-4" />
            <span>Calibrated with 85mm Optical Focus for LinkedIn Feeds</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none rounded-xl border border-white/10 px-4 py-2 text-xs font-medium text-zinc-300 hover:bg-white/10"
            >
              Close
            </button>

            <button
              onClick={onDownload}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#dfb86c] to-[#c7983c] px-5 py-2 text-xs font-semibold text-black shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Download High-Res (4K)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
