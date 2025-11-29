"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
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
  const [focusedField, setFocusedField] = useState(null);

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
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "tahmidkabiraddin@gmail.com",
      link: "mailto:tahmidkabiraddin@gmail.com",
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-500/10",
      text: "text-purple-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+880 1638587407",
      link: "tel:+8801638587407",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: null,
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-500/10",
      text: "text-blue-400"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      link: "https://github.com/Tahmid-kabir-addin",
      color: "hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      link: "https://www.linkedin.com/in/tahmid-kabir-44b4671b1/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#04081A] relative py-12 pt-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center lg:text-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Let&apos;s Connect
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              Have a project in mind or just want to chat? I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="group flex items-center gap-4 md:gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${info.bg} flex items-center justify-center ${info.text} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-base md:text-lg font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-2 truncate">
                        <span className="truncate">{info.value}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                      </a>
                    ) : (
                      <p className="text-base md:text-lg font-semibold text-white truncate">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} hover:bg-white/10 hover:scale-110 transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 md:mb-8">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className={`peer w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pt-6 outline-none focus:border-blue-500 transition-all text-white placeholder-transparent`}
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <label 
                      htmlFor="name"
                      className={`absolute left-4 top-1 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500`}
                    >
                      Your Name
                    </label>
                    {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className={`peer w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pt-6 outline-none focus:border-blue-500 transition-all text-white placeholder-transparent`}
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <label 
                      htmlFor="email"
                      className={`absolute left-4 top-1 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500`}
                    >
                      Your Email
                    </label>
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    className={`peer w-full bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pt-6 outline-none focus:border-blue-500 transition-all text-white placeholder-transparent`}
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                  <label 
                    htmlFor="subject"
                    className={`absolute left-4 top-1 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500`}
                  >
                    Subject
                  </label>
                  {errors.subject && <span className="text-red-500 text-xs mt-1 block">{errors.subject}</span>}
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    id="message"
                    rows="4"
                    className={`peer w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pt-6 outline-none focus:border-blue-500 transition-all text-white placeholder-transparent resize-none`}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                  <label 
                    htmlFor="message"
                    className={`absolute left-4 top-1 text-xs text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500`}
                  >
                    Your Message
                  </label>
                  {errors.message && <span className="text-red-500 text-xs mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center text-sm font-medium ${
                      status.includes("success") 
                        ? "bg-green-500/10 text-green-400 border border-green-500/20" 
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {status}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}