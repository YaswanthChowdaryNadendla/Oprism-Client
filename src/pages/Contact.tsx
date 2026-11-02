import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import prismImg from "../assets/prism-crystal.png";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Weddings & Receptions",
    timeline: "Within 3 months",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep confirmation visible
    }, 4000);
  };

  return (
    <div className="pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-300/60 bg-white/60 backdrop-blur-md shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#323192]" />
            <span className="text-xs font-bold text-[#323192] tracking-wider uppercase">
              Direct Concierge &amp; Enquiries
            </span>
          </div>

          <h1
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
          >
            Connect With Oprism
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether inquiring about wedding installations, customized bottles, corporate galas, or architectural commissions, our private concierge is at your service.
          </p>
        </div>

        {/* WhatsApp Direct Banner */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl shadow-emerald-950/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-100">
                    Direct WhatsApp Concierge &bull; Online Now
                  </span>
                </div>
                <h3
                  style={{ fontFamily: "'Comfortaa', sans-serif" }}
                  className="text-xl sm:text-2xl font-bold text-white"
                >
                  Prefer Instant Messaging on WhatsApp?
                </h3>
                <p className="text-xs text-emerald-100 mt-1">
                  Connect instantly with our lead curator for fast quotes, video previews, and availability.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/18004827747?text=Hello%20Oprism%2C%20I%20would%20like%20to%20enquire%20about%20your%20bespoke%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white text-emerald-800 font-bold text-xs shadow-lg hover:bg-emerald-50 transition-all flex items-center gap-2 shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Main Grid: Info + Form */}
        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Business Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/75 backdrop-blur-md border border-white/90 shadow-xl shadow-sky-950/5">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={prismImg} alt="Oprism" className="w-10 h-10 object-contain drop-shadow-sm" />
                <div>
                  <h3
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    className="text-xl font-bold text-slate-900"
                  >
                    Oprism Global Studio
                  </h3>
                  <span className="text-xs font-mono text-[#323192] font-semibold">
                    The Signature of Purity
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-8">
                Our private studio assists architects, interior visionaries, wedding planners, and corporate leaders with tailored stone samples and dedicated project management.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-sky-100/70 text-[#323192] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase font-bold block">
                      Direct Email
                    </span>
                    <a href="mailto:concierge@oprism.com" className="text-sm font-semibold text-slate-800 hover:text-[#323192]">
                      concierge@oprism.com
                    </a>
                    <div className="text-xs text-slate-500">curation@oprism.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-sky-100/70 text-[#323192] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase font-bold block">
                      Direct Telephone
                    </span>
                    <a href="tel:+18004827747" className="text-sm font-semibold text-slate-800 hover:text-[#323192]">
                      +1 (800) 482-PRISM
                    </a>
                    <div className="text-xs text-slate-500">+44 20 7946 0920 (UK/Europe)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-sky-100/70 text-[#323192] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase font-bold block">
                      Gallery &amp; Design Studio
                    </span>
                    <div className="text-sm font-semibold text-slate-800">
                      Oprism Design Gallery
                    </div>
                    <div className="text-xs text-slate-500 leading-relaxed">
                      440 Mineral Avenue, Madison District<br />New York, NY 10022
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-sky-100/70 text-[#323192] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase font-bold block">
                      Private Viewing Hours
                    </span>
                    <div className="text-sm font-semibold text-slate-800">
                      Mon &ndash; Sat: 9:00 AM &ndash; 7:00 PM EST
                    </div>
                    <div className="text-xs text-slate-500">By private appointment only</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-sky-100 flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#323192]" />
              <span>Full NDA &amp; confidentiality honored for all commissions.</span>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/80 backdrop-blur-md border border-white/90 shadow-xl shadow-sky-950/5">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3
                  style={{ fontFamily: "'Comfortaa', sans-serif" }}
                  className="text-2xl font-bold text-slate-900"
                >
                  Enquiry Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Oprism. Our senior curator will review your project details and contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#323192] text-white text-xs font-bold shadow-md hover:bg-[#252478] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    className="text-2xl font-bold text-slate-900 mb-1"
                  >
                    Send an Enquiry
                  </h3>
                  <p className="text-xs text-slate-600">
                    Fill in your details below and our concierge team will respond promptly.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#323192] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@residence.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#323192] transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#323192] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Service / Project Type
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#323192] transition-all text-slate-700"
                    >
                      <option>Weddings &amp; Receptions</option>
                      <option>Customized Bottles &amp; Vessels</option>
                      <option>Birthday Parties &amp; Celebrations</option>
                      <option>Corporate Events &amp; Galas</option>
                      <option>Private Luxury Residence Surface</option>
                      <option>Architectural &amp; Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Estimated Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#323192] transition-all text-slate-700"
                  >
                    <option>Immediate / Within 1 month</option>
                    <option>Within 3 months</option>
                    <option>3 &ndash; 6 months</option>
                    <option>Planning for next year</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project Vision &amp; Notes
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your vision, requested dimensions, or event specifics..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-sky-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#323192] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#323192] text-white font-bold text-xs shadow-lg shadow-[#323192]/25 hover:bg-[#252478] hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Formal Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
