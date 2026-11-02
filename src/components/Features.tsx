import React from "react";
import { Cpu, Shuffle, Gauge, KeyRound, ShieldAlert, Layers } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Shuffle className="w-5 h-5 text-sky-400" />,
      title: "Dynamic Request Routing",
      description:
        "Define custom policies based on cost, latency, token budgets, or model capability. Every prompt is dispatched to the optimal provider in real-time.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-blue-400" />,
      title: "Automatic Instant Failover",
      description:
        "If OpenAI or Anthropic experiences an outage, rate limit (429), or spike in latency, Oprism fails over to alternate models in milliseconds without user disruption.",
    },
    {
      icon: <Gauge className="w-5 h-5 text-cyan-400" />,
      title: "Sub-2ms Routing Overhead",
      description:
        "Built on an edge-native Rust routing core distributed across 35 global edge regions, ensuring your application feels as fast as calling bare metal.",
    },
    {
      icon: <KeyRound className="w-5 h-5 text-indigo-400" />,
      title: "Single Universal API Key",
      description:
        "Stop managing dozens of provider credentials, billing accounts, and invoices. Oprism consolidates your entire AI stack under one unified key.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: "Prompt Semantic Caching",
      description:
        "Automatically cache and serve semantically identical queries using vector similarity, cutting LLM cost to zero and latency to under 10ms for common queries.",
    },
    {
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      title: "Drop-In SDK Compatibility",
      description:
        "100% compatible with existing OpenAI, Anthropic, and LangChain SDKs. Simply redirect your baseUrl to api.oprism.ai and start routing immediately.",
    },
  ];

  return (
    <section id="features" className="py-24 border-t border-slate-900/80 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 block mb-3">
            Core Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Unbounded']">
            Engineered for High-Scale AI
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Eliminate fragile multi-SDK abstractions and manual provider fallbacks. Oprism provides enterprise-grade routing out of the box.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl border border-sky-950/50 bg-[#060b18]/60 backdrop-blur-sm hover:border-sky-500/30 hover:bg-[#081024]/80 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-sky-400/40 transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-sky-200 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
