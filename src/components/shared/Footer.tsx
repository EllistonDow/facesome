import Link from "next/link";
import { ShieldCheck, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060608] text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-gradient-to-br from-[#dfb86c] to-[#996e24] text-xs font-serif font-bold text-black">
                F
              </div>
              <span className="font-serif text-lg font-medium text-white tracking-tight">
                Facesome.com
              </span>
            </div>
            <p className="mt-3 text-xs leading-5 text-zinc-400">
              The high-definition digital portrait atelier. Crafting Forbes and Wall Street caliber professional imagery with biometric fidelity and natural light synthesis.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Zero data-selling • Biometric privacy respected</span>
            </div>
          </div>

          {/* Col 2: Studio Solutions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Studio Solutions
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/headshots" className="hover:text-white transition-colors">
                  Executive LinkedIn Headshots
                </Link>
              </li>
              <li>
                <Link href="/#styles" className="hover:text-white transition-colors">
                  Bespoke Style Catalog
                </Link>
              </li>
              <li>
                <Link href="/passport" className="hover:text-white transition-colors text-zinc-500">
                  Global Visa & Passport Photos (Soon)
                </Link>
              </li>
              <li>
                <Link href="/glowup" className="hover:text-white transition-colors text-zinc-500">
                  Aesthetic & Hair Diagnosis (Soon)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Comparison & Value */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Why Facesome
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/#comparison" className="hover:text-white transition-colors">
                  Vs. $400 Traditional Studios
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition-colors">
                  Credits & Universal Balance
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  100% Satisfaction Guarantee
                </Link>
              </li>
              <li>
                <Link href="/headshots" className="hover:text-white transition-colors">
                  Instant LinkedIn Circle Crop
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
              Legal & Trust
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <span className="text-zinc-500 cursor-not-allowed">
                  Full Commercial License Included
                </span>
              </li>
              <li>
                <span className="text-zinc-500 cursor-not-allowed">
                  Automatic 30-Day Data Purge
                </span>
              </li>
              <li>
                <span className="text-zinc-500 cursor-not-allowed">
                  Refund & Re-Roll Policy
                </span>
              </li>
              <li>
                <span className="text-zinc-500 cursor-not-allowed">
                  Facesome Atelier © 2026
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Facesome.com. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            Crafted for world-class founders, executives, and leaders.
          </p>
        </div>
      </div>
    </footer>
  );
}
