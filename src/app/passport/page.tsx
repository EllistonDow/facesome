import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { FileCheck, ArrowLeft, BellRing, Sparkles, Check } from "lucide-react";

export default function PassportModulePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08080a] text-zinc-100">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Atelier</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs text-emerald-300 mb-6">
          <FileCheck className="h-3.5 w-3.5" />
          <span>Module Phase 2: In Private Beta</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Global Passport & Visa Compliance
        </h1>

        <p className="mt-4 max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed">
          Powered by open-source biometric standards. Guaranteed acceptance for US Passports, Schengen Visas, UK, Canada, and 130+ governments. Automatic shadow removal and 4x6 print sheet generation.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl text-left">
          {[
            { title: "ICAO 9303 Compliant", desc: "Biometric distance and ratio precision" },
            { title: "Universal Backgrounds", desc: "Pure white, light grey, or off-white" },
            { title: "Print-Ready 4x6 Sheet", desc: "Print at CVS or Walgreens for $0.39" },
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-xl border border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>{item.title}</span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl glass-panel p-6 border border-white/15 w-full max-w-md">
          <h3 className="text-sm font-semibold text-white">
            Get Early Access & 15 Free Credits
          </h3>
          <p className="text-xs text-zinc-400 mt-1">
            We will notify you the moment this module opens to the public.
          </p>
          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl bg-black/60 border border-white/15 px-3.5 py-2 text-xs text-white placeholder:text-zinc-600 outline-none focus:border-amber-400"
            />
            <button className="rounded-xl bg-gradient-to-r from-[#dfb86c] to-[#c7983c] px-4 py-2 text-xs font-semibold text-black hover:scale-105 transition-all">
              Notify Me
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
