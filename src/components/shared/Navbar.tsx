"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Menu, X, Coins } from "lucide-react";
import { FEATURE_MODULES } from "@/lib/constants/styles";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userCredits] = useState<number>(40); // Demo default balance

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#08080a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#dfb86c] to-[#996e24] p-[1px] shadow-lg shadow-amber-500/10">
            <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#09090b]">
              <span className="font-serif text-lg font-bold tracking-wider text-[#dfb86c]">
                F
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl font-medium tracking-tight text-white group-hover:text-[#dfb86c] transition-colors">
                Facesome
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.2 text-[10px] font-medium tracking-wide text-amber-300">
                STUDIO
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {FEATURE_MODULES.map((mod) => (
            <Link
              key={mod.id}
              href={mod.href}
              className="group relative flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-normal text-zinc-300 transition-colors hover:text-white hover:bg-white/[0.04]"
            >
              <span>{mod.title}</span>
              {mod.status === "live" ? (
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ) : (
                <span className="rounded bg-zinc-800/80 px-1 py-0.2 text-[9px] text-zinc-400 border border-zinc-700/50">
                  SOON
                </span>
              )}
            </Link>
          ))}
          <Link
            href="/#pricing"
            className="rounded-md px-3 py-1.5 text-sm font-normal text-zinc-300 transition-colors hover:text-white hover:bg-white/[0.04]"
          >
            Pricing
          </Link>
          <Link
            href="/#styles"
            className="rounded-md px-3 py-1.5 text-sm font-normal text-zinc-300 transition-colors hover:text-white hover:bg-white/[0.04]"
          >
            Gallery
          </Link>
        </nav>

        {/* Right Side: Credits + CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/#pricing"
            className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/[0.08] px-3 py-1 text-xs font-medium text-amber-200 transition-all hover:bg-amber-500/[0.15]"
            title="Your available generation credits"
          >
            <Coins className="h-3.5 w-3.5 text-amber-400" />
            <span>{userCredits} Credits</span>
          </Link>

          <Link
            href="/headshots"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#dfb86c] via-[#f0cf85] to-[#c7983c] px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-amber-500/30"
          >
            <span>Create Studio Portrait</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/headshots"
            className="rounded-full bg-gradient-to-r from-[#dfb86c] to-[#c7983c] px-3 py-1.5 text-xs font-semibold text-black"
          >
            Create
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-1.5 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#09090b] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {FEATURE_MODULES.map((mod) => (
              <Link
                key={mod.id}
                href={mod.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg p-2 text-sm text-zinc-200 hover:bg-white/[0.05]"
              >
                <span>{mod.title}</span>
                <span className="text-xs text-zinc-500">{mod.badge || mod.status}</span>
              </Link>
            ))}
            <Link
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 text-sm text-zinc-200 hover:bg-white/[0.05]"
            >
              Pricing & Packages
            </Link>
            <div className="mt-2 border-t border-white/[0.08] pt-3">
              <Link
                href="/headshots"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#dfb86c] to-[#c7983c] py-2.5 text-sm font-semibold text-black"
              >
                <span>Generate Studio Portraits</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
