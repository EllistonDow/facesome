"use client";

import { PRICING_PLANS } from "@/lib/constants/pricing";
import { Check, Sparkles, Shield, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 border-t border-white/[0.08] bg-[#070709] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/[0.08] px-3 py-1 text-xs font-medium text-amber-300">
            <Sparkles className="h-3 w-3" />
            <span>Universal Facesome Credits</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-semibold text-white">
            Simple, Transparent Studio Pricing
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            No recurring hidden subscriptions. Buy credits once, generate when needed. Remaining credits carry over to our upcoming passport and style modules.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 ${
                  isPopular
                    ? "glass-panel border-amber-500/50 shadow-2xl shadow-amber-500/10 scale-100 lg:scale-105 z-10 bg-gradient-to-b from-[#18181f] to-[#0d0d10]"
                    : "glass-panel border-white/10 hover:border-white/20 bg-[#0d0d10]"
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        isPopular
                          ? "bg-gradient-to-r from-[#dfb86c] to-[#c7983c] text-black shadow-md shadow-amber-500/30"
                          : "bg-zinc-800 text-zinc-300 border border-white/10"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-semibold text-white">
                      {plan.name}
                    </h3>
                    <span className="rounded-md bg-white/[0.06] px-2.5 py-0.5 text-xs text-zinc-300 font-mono">
                      {plan.credits} Credits
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="text-4xl font-serif font-bold text-white tracking-tight">
                      ${plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-sm text-zinc-500 line-through">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-zinc-400">/ one-time</span>
                  </div>

                  <p className="mt-2 text-xs text-zinc-400">
                    Yields approximately <strong>{plan.headshotsCount}</strong> ultra-HD studio portraits.
                  </p>

                  {/* Features List */}
                  <ul className="mt-6 space-y-3 text-xs text-zinc-300 border-t border-white/[0.08] pt-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-8 pt-4">
                  <a
                    href={`/headshots?plan=${plan.id}`}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all ${
                      isPopular
                        ? "bg-gradient-to-r from-[#dfb86c] via-[#f0cf85] to-[#c7983c] text-black shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:scale-[1.02]"
                        : "bg-white/[0.08] text-white hover:bg-white/[0.12] border border-white/10"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>

                  <div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-zinc-500">
                    <Shield className="h-3 w-3 text-zinc-500" />
                    <span>Instant credit activation • 100% refund guarantee</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
