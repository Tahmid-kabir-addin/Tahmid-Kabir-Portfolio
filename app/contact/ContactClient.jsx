"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    setIsLoading(true);
    setStatus(null);

    const form = new FormData();
    form.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);
    form.append("to", "tahmidkabiraddin@gmail.com");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" aria-hidden="true" />,
      label: "Email",
      value: "tahmidkabiraddin@gmail.com",
      link: "mailto:tahmidkabiraddin@gmail.com",
    },
    {
      icon: <Phone className="w-4 h-4" aria-hidden="true" />,
      label: "Phone",
      value: "+880 1638587407",
      link: "tel:+8801638587407",
    },
    {
      icon: <MapPin className="w-4 h-4" aria-hidden="true" />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      label: "GitHub",
      handle: "Tahmid-kabir-addin",
      icon: <Github className="w-5 h-5" aria-hidden="true" />,
      link: "https://github.com/Tahmid-kabir-addin",
    },
    {
      name: "LinkedIn",
      label: "LinkedIn",
      handle: "tahmid-kabir-44b4671b1",
      icon: <Linkedin className="w-5 h-5" aria-hidden="true" />,
      link: "https://www.linkedin.com/in/tahmid-kabir-44b4671b1/",
    },
  ];

  return (
    <div id="contact" className="bg-[#0A0A0A] relative py-24 overflow-hidden" style={{ scrollMarginTop: "5rem" }}>
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(212,175,55,0.025) 0px, rgba(212,175,55,0.025) 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, rgba(212,175,55,0.025) 0px, rgba(212,175,55,0.025) 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <div className="flex items-center justify-center gap-4 mb-4" aria-hidden="true">
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
            <div className="w-2 h-2 rotate-45 bg-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
          </div>
          <p
            className="text-[#D4AF37] text-xs tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Correspondence
          </p>
          <h1
            className="text-4xl md:text-6xl text-[#F2F0E4] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-marcellus)" }}
          >
            Let&apos;s Connect
          </h1>
          <p
            className="text-[#888888] text-base max-w-xl mx-auto tracking-wider"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Have a project in mind? I&apos;m always open to discussing new opportunities and creative ideas.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2" aria-hidden="true">
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
            <div className="w-1 h-1 rotate-45 border border-[#D4AF37]" />
            <div className="h-px w-16 bg-[#D4AF37] opacity-50" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact rows */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.1 }}
                  className="group flex items-start gap-4 p-4 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-colors duration-300 bg-[#141414]"
                >
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <span
                      className="absolute inset-0 rotate-45 border border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300"
                      aria-hidden="true"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[#D4AF37]">
                      {info.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-1"
                      style={{ fontFamily: "var(--font-josefin)" }}
                    >
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[#888888] text-sm tracking-wide hover:text-[#F2F0E4] transition-colors duration-300 truncate block"
                        style={{ fontFamily: "var(--font-josefin)" }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className="text-[#888888] text-sm tracking-wide truncate"
                        style={{ fontFamily: "var(--font-josefin)" }}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <p
                className="text-[#D4AF37] text-[10px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                Profiles
              </p>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:shadow-[0_0_12px_rgba(212,175,55,0.1)] transition-all duration-300 bg-[#141414]"
                >
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <span
                      className="absolute inset-0 rotate-45 border border-[#D4AF37]/40 group-hover:border-[#D4AF37] transition-colors duration-300"
                      aria-hidden="true"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[#D4AF37]">
                      {social.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-0.5"
                      style={{ fontFamily: "var(--font-josefin)" }}
                    >
                      {social.label}
                    </p>
                    <p
                      className="text-[#888888] text-sm tracking-wide group-hover:text-[#F2F0E4] transition-colors duration-300 truncate"
                      style={{ fontFamily: "var(--font-josefin)" }}
                    >
                      {social.handle}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 relative bg-[#141414] border border-[#D4AF37]/25 p-8 md:p-10 group hover:border-[#D4AF37]/50 transition-colors duration-500"
          >
            {/* Corner decorations */}
            <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#D4AF37]/35 group-hover:border-[#D4AF37] transition-colors duration-500" aria-hidden="true" />
            <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#D4AF37]/35 group-hover:border-[#D4AF37] transition-colors duration-500" aria-hidden="true" />

            <h2
              className="text-xl text-[#F2F0E4] uppercase tracking-widest mb-8"
              style={{ fontFamily: "var(--font-marcellus)" }}
            >
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-7" noValidate>
              <div className="grid md:grid-cols-2 gap-7">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-[#D4AF37]/40 focus:border-[#D4AF37] focus:shadow-[0_4px_10px_rgba(212,175,55,0.15)] outline-none px-1 pb-2 text-[#F2F0E4] placeholder-[#888888]/60 text-sm tracking-wide transition-all duration-300"
                    style={{ fontFamily: "var(--font-josefin)" }}
                    placeholder="Tahmid Kabir"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="text-red-400 text-xs mt-1 block" style={{ fontFamily: "var(--font-josefin)" }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-2"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-[#D4AF37]/40 focus:border-[#D4AF37] focus:shadow-[0_4px_10px_rgba(212,175,55,0.15)] outline-none px-1 pb-2 text-[#F2F0E4] placeholder-[#888888]/60 text-sm tracking-wide transition-all duration-300"
                    style={{ fontFamily: "var(--font-josefin)" }}
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="text-red-400 text-xs mt-1 block" style={{ fontFamily: "var(--font-josefin)" }}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-transparent border-b-2 border-[#D4AF37]/40 focus:border-[#D4AF37] focus:shadow-[0_4px_10px_rgba(212,175,55,0.15)] outline-none px-1 pb-2 text-[#F2F0E4] placeholder-[#888888]/60 text-sm tracking-wide transition-all duration-300"
                  style={{ fontFamily: "var(--font-josefin)" }}
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <span id="subject-error" className="text-red-400 text-xs mt-1 block" style={{ fontFamily: "var(--font-josefin)" }}>
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#D4AF37] text-[10px] tracking-[0.25em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-[#D4AF37]/40 focus:border-[#D4AF37] focus:shadow-[0_4px_10px_rgba(212,175,55,0.15)] outline-none px-1 pb-2 text-[#F2F0E4] placeholder-[#888888]/60 text-sm tracking-wide transition-all duration-300 resize-none"
                  style={{ fontFamily: "var(--font-josefin)" }}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="text-red-400 text-xs mt-1 block" style={{ fontFamily: "var(--font-josefin)" }}>
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="deco-btn-solid flex items-center gap-3 px-10 py-3.5 text-xs tracking-[0.2em] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                {isLoading ? (
                  <>
                    <div
                      className="w-4 h-4 border-2 border-[#0A0A0A]/40 border-t-[#0A0A0A] animate-spin"
                      aria-hidden="true"
                    />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 text-center text-sm tracking-wider border ${
                    status.includes("success")
                      ? "border-[#D4AF37]/40 text-[#D4AF37] bg-[#D4AF37]/5"
                      : "border-red-500/40 text-red-400 bg-red-500/5"
                  }`}
                  style={{ fontFamily: "var(--font-josefin)" }}
                  role="status"
                >
                  {status}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}