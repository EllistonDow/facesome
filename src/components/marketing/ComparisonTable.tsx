import { Check, X, Sparkles, HelpCircle } from "lucide-react";

export default function ComparisonTable() {
  const features = [
    {
      title: "Cost per Session",
      facesome: "$19 - $35",
      studio: "$350 - $650+",
      cheapAi: "$9.99",
      facesomeWin: true,
    },
    {
      title: "Turnaround Delivery",
      facesome: "< 60 Seconds",
      studio: "7 - 14 Days",
      cheapAi: "30 - 60 Minutes",
      facesomeWin: true,
    },
    {
      title: "Number of Delivered Looks",
      facesome: "40 - 100 Portraits",
      studio: "2 - 3 Finished Edits",
      cheapAi: "10 - 20 Random Crops",
      facesomeWin: true,
    },
    {
      title: "Facial Fidelity & Natural Likeness",
      facesome: "Biometric Landmark Lock (Real You)",
      studio: "Real (Depends on photographer)",
      cheapAi: "Plastic, waxy skin & uncanny artifacts",
      facesomeWin: true,
    },
    {
      title: "Wardrobe & Background Variations",
      facesome: "5+ Curated Designer Archetypes",
      studio: "Whatever you brought in your bag",
      cheapAi: "Random mismatched clothing",
      facesomeWin: true,
    },
    {
      title: "LinkedIn Circle Avatar Safe",
      facesome: "Yes, Built-in Circle Previewer",
      studio: "Manual crop required",
      cheapAi: "Often decapitates or cuts chin off",
      facesomeWin: true,
    },
    {
      title: "Commercial Rights Included",
      facesome: "100% Full Ownership",
      studio: "Extra $150+ licensing fee",
      cheapAi: "Ambiguous terms",
      facesomeWin: true,
    },
  ];

  return (
    <section id="comparison" className="py-20 bg-[#08080a] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Transparent Benchmark
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-semibold text-white">
            Why Professionals Choose Facesome
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Traditional studio appointments cost hundreds of dollars and hours of commute. Cheap AI filters look like cartoon plastic. Facesome bridges the gap with biometric precision.
          </p>
        </div>

        {/* Table Container */}
        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[680px] rounded-2xl border border-white/10 glass-panel overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-black/40">
                  <th className="py-4 px-6 font-medium text-zinc-400 w-1/3">
                    Feature & Dimension
                  </th>
                  <th className="py-4 px-6 font-semibold text-amber-300 bg-amber-500/[0.08] border-x border-amber-500/20 text-center">
                    <div className="inline-flex items-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                      <span>Facesome Atelier</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 font-medium text-zinc-400 text-center">
                    Physical Photo Studio
                  </th>
                  <th className="py-4 px-6 font-medium text-zinc-400 text-center">
                    Generic AI App
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {features.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3.5 px-6 font-medium text-zinc-200">
                      {item.title}
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-white bg-amber-500/[0.04] border-x border-amber-500/20 text-center">
                      <span className="text-amber-200">{item.facesome}</span>
                    </td>
                    <td className="py-3.5 px-6 text-zinc-400 text-center">
                      {item.studio}
                    </td>
                    <td className="py-3.5 px-6 text-zinc-500 text-center">
                      {item.cheapAi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
