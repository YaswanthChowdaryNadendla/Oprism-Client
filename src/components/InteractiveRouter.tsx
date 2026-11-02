import React, { useState } from "react";
import { Zap, DollarSign, Brain, CheckCircle2, ArrowRight } from "lucide-react";

export function InteractiveRouter() {
  const [strategy, setStrategy] = useState<"latency" | "cost" | "reasoning">("latency");

  const strategies = {
    latency: {
      badge: "Target: <150ms Time-To-First-Token",
      routedModel: "Gemini 1.5 Flash",
      provider: "Google Cloud",
      latency: "112ms",
      costPer1k: "$0.000075",
      fallback: "Claude 3.5 Haiku",
      reason: "Selected for lowest global TTFT and maximum request concurrency.",
    },
    cost: {
      badge: "Target: Minimum Cost per Token",
      routedModel: "Llama 3.3 70B",
      provider: "DeepInfra Edge",
      latency: "190ms",
      costPer1k: "$0.000060",
      fallback: "Mistral Small",
      reason: "Cheapest model meeting baseline benchmark accuracy criteria.",
    },
    reasoning: {
      badge: "Target: Maximum Reasoning Accuracy",
      routedModel: "Claude 3.5 Sonnet",
      provider: "Anthropic",
      latency: "420ms",
      costPer1k: "$0.003000",
      fallback: "GPT-4o",
      reason: "Highest coding and complex synthesis benchmark evaluation.",
    },
  };

  const active = strategies[strategy];

  return (
    <section id="routing" className="py-24 border-t border-slate-900 bg-[#01040f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 block mb-3">
            Interactive Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Unbounded']">
            Intelligent Dynamic Routing
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            See how the Oprism engine inspects constraints and selects the optimal endpoint.
          </p>
        </div>

        {/* Strategy Selector Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setStrategy("latency")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              strategy === "latency"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Zap className="w-4 h-4" />
            Lowest Latency
          </button>
          <button
            onClick={() => setStrategy("cost")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              strategy === "cost"
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            Lowest Cost
          </button>
          <button
            onClick={() => setStrategy("reasoning")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              strategy === "reasoning"
                ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
            }`}
          >
            <Brain className="w-4 h-4" />
            Deep Reasoning
          </button>
        </div>

        {/* Visual Router Node Diagram */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-sky-950/60 bg-[#060b18] p-6 sm:p-10 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {/* Incoming Prompt */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/60 text-center">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                Client Request
              </span>
              <div className="font-semibold text-white text-sm">POST /v1/completions</div>
              <div className="text-xs text-sky-400/80 font-mono mt-1">{active.badge}</div>
            </div>

            {/* Oprism Router Core */}
            <div className="p-6 rounded-xl border border-sky-400/30 bg-sky-950/20 text-center relative shadow-lg shadow-sky-500/10">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center mx-auto mb-2 text-sky-300">
                ⚡
              </div>
              <span className="font-['Unbounded'] font-bold text-xs text-white uppercase tracking-wider">
                Oprism Engine
              </span>
              <div className="text-[11px] text-sky-300 font-mono mt-1">Routing: 1.4ms</div>
            </div>

            {/* Destination Selected */}
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/60 text-center">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-1 mb-1">
                <CheckCircle2 className="w-3 h-3" />
                Optimal Target
              </span>
              <div className="font-bold text-white text-base">{active.routedModel}</div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">{active.provider}</div>
            </div>
          </div>

          {/* Details Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500">Latency: </span>
              <span className="text-white font-semibold">{active.latency}</span>
              <span className="mx-2 text-slate-700">|</span>
              <span className="text-slate-500">Cost: </span>
              <span className="text-emerald-400 font-semibold">{active.costPer1k}/1k tokens</span>
            </div>
            <div className="text-slate-400">
              Auto-Failover: <span className="text-sky-300">{active.fallback}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveRouter;
