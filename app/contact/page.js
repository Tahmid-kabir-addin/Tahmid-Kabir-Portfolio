"use client";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import EnhancedButton from "../components/ui/enhanced-button";
import { useScrollReveal } from "../hooks/useScrollReveal";
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const formRef = useScrollReveal();
  const contactInfoRef = useScrollReveal({ threshold: 0.3 });

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

    // Create a new FormData object to send to Web3Forms API
    const form = new FormData();
    form.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);
    form.append("to", "tahmidkabiraddin@gmail.com");

    try {
      // Send form data to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 5000,
          position: 'top-center',
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
        setStatus(null);
      } else {
        toast.error(result.message || "There was an error sending your message.");
        setStatus(result.message || "There was an error sending your message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <main className="pt-20 lg:pt-[0rem] min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contact Info */}
              <motion.div
                ref={contactInfoRef}
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-4xl font-bold mb-4 gradient-text-primary">
                    Get in Touch
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Have a question or want to work together? Drop me a message!
                  </p>
                </motion.div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:tahmidkabiraddin@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>tahmidkabiraddin@gmail.com</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Dhaka, Bangladesh</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Image
                      src="/github.png"
                      alt="GitHub"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <Link
                      href="https://github.com/Tahmid-kabir-addin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>github.com/Tahmid-kabir-addin</span>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Image
                      src="/linkedin.png"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <Link
                      href="https://www.linkedin.com/in/tahmid-kabir-44b4671b1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>linkedin.com/in/tahmidkabir</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.subject ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                        errors.message ? "border-red-500" : "border-gray-700"
                      } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity ${
                    isLoading ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
