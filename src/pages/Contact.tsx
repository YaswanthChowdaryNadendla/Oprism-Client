import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  AlertCircle,
  ExternalLink,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import prismImg from "../assets/prism-crystal.png";

/**
 * Official WhatsApp vector icon
 */
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Official Instagram vector icon
 */
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Available Enquiry Types
const ENQUIRY_TYPES = [
  "Customized Bottles",
  "Wedding & Celebrations",
  "Corporate & Business Events",
  "Bulk Orders",
  "General Enquiry",
] as const;

type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for parallax interactions
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yHeroElements = useTransform(
    scrollYProgress,
    [0, 0.35],
    shouldReduceMotion ? [0, 0] : [0, -35]
  );
  const yOrb1 = useTransform(
    scrollYProgress,
    [0, 0.45],
    shouldReduceMotion ? [0, 0] : [-25, 55]
  );
  const yOrb2 = useTransform(
    scrollYProgress,
    [0, 0.45],
    shouldReduceMotion ? [0, 0] : [20, -45]
  );

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    enquiryType: "Customized Bottles" as EnquiryType,
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    enquiryType?: string;
    message?: string;
  }>({});

  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [popupBlocked, setPopupBlocked] = useState(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState<string>("");

  // Smooth scroll handler for hero CTA
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("contact-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Phone number validator: checks for at least 7 to 15 digits and valid phone characters
  const validatePhone = (num: string): boolean => {
    const digitsOnly = num.replace(/\D/g, "");
    const validCharacters = /^[\d\s+\-()]+$/.test(num);
    return validCharacters && digitsOnly.length >= 7 && digitsOnly.length <= 15;
  };

  // Form Submission & WhatsApp Launch
  const handleSendEnquiry = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: {
      name?: string;
      phone?: string;
      enquiryType?: string;
      message?: string;
    } = {};

    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.name = "Full name is required.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Please enter a valid full name.";
    }

    if (!trimmedPhone) {
      newErrors.phone = "Phone number is required.";
    } else if (!validatePhone(trimmedPhone)) {
      newErrors.phone = "Please enter a valid phone number (at least 7 digits).";
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = "Please select an enquiry type.";
    }

    if (!trimmedMessage) {
      newErrors.message = "Message / additional requirements are required.";
    } else if (trimmedMessage.length < 5) {
      newErrors.message = "Please enter at least 5 characters for your message.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Dynamically construct exact WhatsApp message:
    // Hi Oprism! I would like to make an enquiry. Name: [Full Name] Phone: [Phone Number] Enquiry Type: [Selected Enquiry Type] Message: [Message / Additional Requirements]
    const constructedMessage = `Hi Oprism! I would like to make an enquiry. Name: ${trimmedName} Phone: ${trimmedPhone} Enquiry Type: ${formData.enquiryType} Message: ${trimmedMessage}`;

    const encoded = encodeURIComponent(constructedMessage);
    const whatsappUrl = `https://wa.me/918500788506?text=${encoded}`;
    setLastGeneratedUrl(whatsappUrl);

    // Open WhatsApp in a new tab
    try {
      const newWin = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!newWin || newWin.closed || typeof newWin.closed === "undefined") {
        setPopupBlocked(true);
      } else {
        setPopupBlocked(false);
      }
    } catch {
      setPopupBlocked(true);
    }

    setStatusMessage("WhatsApp opened with your enquiry. Please review and send it.");
  };

  return (
    <div ref={containerRef} className="relative z-10 overflow-hidden">
      {/* ─── Parallax Background Elements ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        {/* Soft Ambient Aqua Orb 1 */}
        <motion.div
          style={{ y: yOrb1 }}
          className="absolute -top-24 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sky-200/40 via-cyan-100/20 to-transparent blur-3xl"
        />
        {/* Soft Ambient Indigo Orb 2 */}
        <motion.div
          style={{ y: yOrb2 }}
          className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-200/30 via-indigo-100/20 to-transparent blur-3xl"
        />
        {/* Water Ripple Wave SVG Background */}
        <div className="absolute top-0 inset-x-0 h-96 opacity-30">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,138.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              fill="url(#contact-water-gradient)"
            />
            <defs>
              <linearGradient id="contact-water-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#323192" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* ─── 1. Contact Hero ─── */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 relative">
        <motion.div
          style={{ y: yHeroElements }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            style={{ fontFamily: "'Comfortaa', sans-serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6"
          >
            Let's Make Something <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#0077b6] via-[#0284c7] to-[#323192] bg-clip-text text-transparent">
              Refreshing Happen.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Planning an event, looking for customized bottles or need bulk bottled-water supplies? We'd love to hear from you.
          </motion.p>

          {/* Smooth-Scroll CTA: Get in Touch ↓ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <a
              href="#contact-form"
              onClick={handleScrollToForm}
              className="group inline-flex items-center gap-1.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0077b6] to-[#323192] text-white font-bold text-sm shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Get in Touch</span>
              <span className="text-sky-200 group-hover:translate-y-0.5 transition-transform duration-200 inline-block font-bold">
                &darr;
              </span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── 2. Main Two-Column Section: Get in Touch + Contact Form ─── */}
      <section id="contact-form" className="py-12 sm:py-16 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ─── LEFT COLUMN: Get in Touch & Social Connection (reveals from left) ─── */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Header card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-white/90 shadow-xl shadow-sky-950/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                    <img
                      src={prismImg}
                      alt="Oprism"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <h2
                      style={{ fontFamily: "'Comfortaa', sans-serif" }}
                      className="text-xl sm:text-2xl font-bold text-slate-900"
                    >
                      Get in Touch
                    </h2>
                    <span className="text-xs font-semibold text-[#0077b6] uppercase tracking-wider">
                      Direct Communication
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Have an upcoming celebration, corporate requirement, or inquiry? Connect with us directly through phone, email, or instant WhatsApp messaging.
                </p>
              </div>

              {/* Three Compact Contact Cards */}
              <div className="space-y-3.5">
                {/* 1. Call Us */}
                <motion.a
                  href="tel:+918500788506"
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-100/90 shadow-md shadow-sky-950/5 hover:border-sky-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0077b6] group-hover:bg-[#0077b6] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">
                        Call Us
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#0077b6] transition-colors">
                        +91 8500788506
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0077b6] group-hover:translate-x-1 transition-all" />
                </motion.a>

                {/* 2. Email Us */}
                <motion.a
                  href="mailto:oprismwater@gmail.com"
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-100/90 shadow-md shadow-sky-950/5 hover:border-sky-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#323192] group-hover:bg-[#323192] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">
                        Email Us
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#323192] transition-colors break-all">
                        oprismwater@gmail.com
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#323192] group-hover:translate-x-1 transition-all" />
                </motion.a>

                {/* 3. WhatsApp */}
                <motion.a
                  href="https://wa.me/918500788506?text=Hi%20Oprism!%20I%20am%20planning%20for%20an%20event"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/85 backdrop-blur-md border border-emerald-100/90 shadow-md shadow-emerald-950/5 hover:border-emerald-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-emerald-600 tracking-wider uppercase block">
                        WhatsApp
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                        Chat with Oprism
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                </motion.a>
              </div>

              {/* ─── 4. Social Media Section ─── */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-white/90 to-sky-50/70 backdrop-blur-md border border-sky-100 shadow-md shadow-sky-950/5">
                <span className="text-xs font-bold text-slate-400 tracking-wider uppercase block mb-3">
                  Connect With Us Online
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/oprism.water/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-sky-100 hover:border-pink-300 hover:bg-pink-50/30 text-slate-700 hover:text-pink-600 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white flex items-center justify-center transition-colors">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold">Instagram</span>
                  </a>

                  {/* WhatsApp Contact */}
                  <a
                    href="https://wa.me/918500788506?text=Hi%20Oprism!%20I%20am%20planning%20for%20an%20event"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50/30 text-slate-700 hover:text-emerald-600 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold">WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Quick Trust Reassurance */}
              <div className="p-4 rounded-2xl bg-white/60 border border-sky-100/60 flex items-center gap-3 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#0077b6] shrink-0" />
                <span>All event specifications and custom label assets are handled with strict privacy.</span>
              </div>
            </motion.div>

            {/* ─── RIGHT COLUMN: Contact Form (reveals from right) ─── */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="p-6 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-white shadow-xl shadow-sky-950/10">
                {/* Form Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0077b6] text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Enquiry Form
                  </div>
                  <h3
                    style={{ fontFamily: "'Comfortaa', sans-serif" }}
                    className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
                  >
                    Send an Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Fill in your event details below. We'll assemble your requirements and connect with you directly via WhatsApp.
                  </p>
                </div>

                {/* WhatsApp Status / Confirmation Notice */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 sm:p-5 rounded-2xl bg-emerald-50/90 border border-emerald-200/90 text-emerald-950 shadow-sm space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-emerald-900">
                          {statusMessage}
                        </p>
                        <p className="text-xs text-emerald-800/90 mt-1 leading-relaxed">
                          Your details have been prefilled. Please review the chat in WhatsApp and tap Send to complete your enquiry.
                        </p>
                      </div>
                    </div>

                    {popupBlocked && (
                      <div className="pt-2 border-t border-emerald-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <span className="text-xs text-emerald-800">
                          Popup was blocked by your browser:
                        </span>
                        <a
                          href={lastGeneratedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors shrink-0"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5" />
                          Open WhatsApp Directly
                        </a>
                      </div>
                    )}

                    <div className="pt-2 border-t border-emerald-200/60 flex items-center justify-between text-xs">
                      <a
                        href={lastGeneratedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-emerald-700 hover:text-emerald-900 underline underline-offset-2 inline-flex items-center gap-1"
                      >
                        Re-open WhatsApp chat <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setStatusMessage(null);
                          setPopupBlocked(false);
                        }}
                        className="font-medium text-slate-600 hover:text-slate-900"
                      >
                        Edit Details
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* The Form */}
                <form onSubmit={handleSendEnquiry} className="space-y-5" noValidate>
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-2xl bg-white/75 border text-sm text-slate-800 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:bg-white focus:ring-2 ${
                          errors.name
                            ? "border-rose-400 focus:ring-rose-200"
                            : "border-sky-200/90 focus:border-[#0077b6] focus:ring-[#0077b6]/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                      >
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-2xl bg-white/75 border text-sm text-slate-800 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:bg-white focus:ring-2 ${
                          errors.phone
                            ? "border-rose-400 focus:ring-rose-200"
                            : "border-sky-200/90 focus:border-[#0077b6] focus:ring-[#0077b6]/20"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div>
                    <label
                      htmlFor="enquiryType"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Enquiry Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          enquiryType: e.target.value as EnquiryType,
                        });
                        if (errors.enquiryType)
                          setErrors({ ...errors, enquiryType: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-white/75 border text-sm text-slate-800 transition-all duration-200 focus:outline-none focus:bg-white focus:ring-2 ${
                        errors.enquiryType
                          ? "border-rose-400 focus:ring-rose-200"
                          : "border-sky-200/90 focus:border-[#0077b6] focus:ring-[#0077b6]/20"
                      }`}
                    >
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.enquiryType && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.enquiryType}
                      </p>
                    )}
                  </div>

                  {/* Message / Additional Requirements */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Message / Additional Requirements <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Share your occasion date, expected bottle quantity, personalization preferences, or questions..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-white/75 border text-sm text-slate-800 placeholder-slate-400 transition-all duration-200 focus:outline-none focus:bg-white focus:ring-2 resize-none ${
                        errors.message
                          ? "border-rose-400 focus:ring-rose-200"
                          : "border-sky-200/90 focus:border-[#0077b6] focus:ring-[#0077b6]/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <motion.button
                      type="submit"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.015 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.985 }}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#0077b6] via-[#0284c7] to-[#323192] text-white font-bold text-sm shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Send Enquiry</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <p className="mt-3 text-center text-[11px] text-slate-500">
                      Clicking will launch WhatsApp with your prefilled details to connect directly with our team.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 5. Closing Section ─── */}
      <section className="py-16 sm:py-20 px-6">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#0a1128] via-[#101942] to-[#1c1a52] text-white p-8 sm:p-12 text-center shadow-2xl shadow-slate-950/20 border border-sky-400/20 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-sky-500/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-sky-200 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              Let's Connect
            </div>

            <h2
              style={{ fontFamily: "'Comfortaa', sans-serif" }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
            >
              Every Great Experience Starts with a Conversation.
            </h2>

            <p className="text-sm sm:text-base text-sky-100/85 max-w-xl mx-auto leading-relaxed">
              Tell us what you have in mind. Let's plan something special with Oprism.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/918500788506?text=Hi%20Oprism!%20I%20am%20planning%20for%20an%20event"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Chat on WhatsApp
              </a>

              <a
                href="tel:+918500788506"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Call +91 8500788506
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
