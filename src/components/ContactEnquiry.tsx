import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";

export function ContactEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Private Luxury Residence",
    timeline: "3-6 months",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 4000);
  };

  return (
    <section id="enquiry" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#323192] block mb-2">
            Direct Concierge
          </span>
          <h2
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Contact & Enquiries
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Connect with our lead mineral consultants to schedule a private gallery viewing or discuss custom architectural commissions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/75 backdrop-blur-md border border-white/90 shadow-lg shadow-sky-950/5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#323192] block mb-2">
                Oprism Global Studio
              </span>
              <h3
                style={{ fontFamily: "'Comfortaa', sans-serif" }}
                className="text-2xl font-bold text-slate-900 mb-4"
              >
                Let's Curate Your Vision.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-8">
                Whether you require custom bookmatched quartzites or complete backlit mineral installations, our studio provides full sample mockups and structural feasibility analysis.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-sky-100/70 text-[#323192]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Concierge Email</div>
                    <a
                      href="mailto:concierge@oprism.com"
                      className="text-sm font-bold text-slate-900 hover:text-[#323192] transition-colors"
                    >
                      concierge@oprism.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-sky-100/70 text-[#323192]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Studio Direct</div>
                    <a
                      href="tel:+18004127747"
                      className="text-sm font-bold text-slate-900 hover:text-[#323192] transition-colors"
                    >
                      +1 (800) 412-PRISM
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-sky-100/70 text-[#323192]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Atelier & Slab Gallery</div>
                    <div className="text-sm font-bold text-slate-900">
                      Prismatic Way, Design District, NY 10011
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-sky-100 text-[11px] text-slate-500 font-medium">
              Private warehouse slab viewings by confirmed appointment.
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-md border border-white/90 shadow-xl shadow-sky-950/5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4
                  style={{ fontFamily: "'Comfortaa', sans-serif" }}
                  className="text-2xl font-bold text-slate-900 mb-2"
                >
                  Enquiry Received
                </h4>
                <p className="text-sm text-slate-600 max-w-sm mb-6">
                  Thank you for reaching out. An Oprism mineral specialist will contact you within 24 hours with curated slab selections.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#323192] text-white text-xs font-bold hover:bg-[#252478] transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200/60 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#323192] focus:ring-2 focus:ring-[#323192]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@vancearchitects.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200/60 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#323192] focus:ring-2 focus:ring-[#323192]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Occasion / Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200/60 text-slate-900 text-sm focus:outline-none focus:border-[#323192] focus:ring-2 focus:ring-[#323192]/20 transition-all"
                    >
                      <option value="Private Luxury Residence">Private Luxury Residence</option>
                      <option value="Haute Hospitality / Hotel">Haute Hospitality / Hotel</option>
                      <option value="Corporate Flagship">Corporate Flagship</option>
                      <option value="Superyacht / Marine">Superyacht / Marine</option>
                      <option value="Custom Sculptural Commission">Custom Sculptural Commission</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Estimated Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200/60 text-slate-900 text-sm focus:outline-none focus:border-[#323192] focus:ring-2 focus:ring-[#323192]/20 transition-all"
                    >
                      <option value="Immediate (1-2 months)">Immediate (1-2 months)</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="Design Planning Phase">Design Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Requirements & Dimensions
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your design specifications, mineral preferences (e.g. backlit quartz, bookmatch marble), and approximate square footage..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200/60 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-[#323192] focus:ring-2 focus:ring-[#323192]/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#323192] text-white font-bold text-sm shadow-xl shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Project Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactEnquiry;
