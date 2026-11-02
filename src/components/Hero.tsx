import React, { useState } from "react";
import { ArrowRight, Copy, Check, Sparkles, Zap, ShieldCheck } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"ts" | "py" | "curl">("ts");

  const codeSnippets = {
    ts: `import { Oprism } from "@oprism/sdk";

// Initialize with a single unified key
const oprism = new Oprism({ apiKey: process.env.OPRISM_KEY });

const response = await oprism.chat.completions.create({
  // Automatic intelligent routing based on latency & cost targets
  strategy: "latency-optimized", 
  messages: [{ role: "user", content: "Analyze portfolio risk matrix" }],
  fallback: ["claude-3-5-sonnet", "gemini-1.5-pro", "gpt-4o"],
});

console.log(response.modelUsed, response.latencyMs);`,
    py: `from oprism import Oprism

# Route dynamically to the cheapest available provider
client = Oprism(strategy="cost-optimized")

response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Summarize fiscal quarter report"}],
    max_budget_cents=1.5,
    auto_failover=True
)

print(f"Routed to: {response.model} in {response.latency}ms")`,
    curl: `curl https://api.oprism.ai/v1/chat/completions \\
  -H "Authorization: Bearer $OPRISM_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "strategy": "balanced-router",
    "messages": [{"role": "user", "content": "Compute graph embeddings"}],
    "models": ["gpt-4o", "claude-3-5-haiku", "gemini-1.5-flash"]
  }'`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-32 overflow-hidden">
      {/* Background radial gradient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-400/25 bg-sky-500/10 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-xs font-semibold text-sky-200 tracking-wide uppercase">
            Oprism Multi-Provider Gateway v2.4
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1] mb-6">
          One unified API.{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
            Every leading AI model.
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Route prompts dynamically across OpenAI, Anthropic, Gemini, and open-weights with sub-2ms overhead. Eliminate vendor lock-in, slash token costs, and guarantee 99.99% uptime.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#get-started"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
          >
            Start Free Integration
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#routing"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-700/80 bg-slate-900/60 text-slate-300 font-semibold text-sm hover:border-sky-500/40 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            Explore Smart Routing
          </a>
        </div>

        {/* Code Terminal Card */}
        <div id="code" className="max-w-3xl mx-auto rounded-2xl border border-sky-950/60 bg-[#060b18]/90 backdrop-blur-xl shadow-2xl shadow-sky-950/50 overflow-hidden text-left">
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-sky-950/60 bg-slate-950/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400">oprism-router-quickstart</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Tab Selector */}
              <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveTab("ts")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === "ts" ? "bg-sky-500/20 text-sky-300" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  TypeScript
                </button>
                <button
                  onClick={() => setActiveTab("py")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === "py" ? "bg-sky-500/20 text-sky-300" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Python
                </button>
                <button
                  onClick={() => setActiveTab("curl")}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === "curl" ? "bg-sky-500/20 text-sky-300" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  cURL
                </button>
              </div>

              {/* Copy Button */}
              <button
                onClick={copyCode}
                className="p-1.5 rounded-lg border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
                title="Copy snippet"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Code Body */}
          <pre className="p-5 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Live Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 pt-12 border-t border-slate-900">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white font-['Unbounded']">
              99.99%
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-sky-400 font-['Unbounded']">
              &lt;1.8ms
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Routing Overhead</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white font-['Unbounded']">
              -64%
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Average Token Cost</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-400 font-['Unbounded']">
              100+
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Supported Models</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
