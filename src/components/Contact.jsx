"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const contactMethods = [
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      value: "charanbandaru869@gmail.com",
      subtitle: "Direct recruiter contact • Monitored daily for fast response",
      action: "mailto:charanbandaru869@gmail.com",
      iconStyle: "bg-rose-50 text-rose-600 border-rose-200",
      isExternal: false,
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/charanbandaru",
      subtitle: "Professional networking • Ideal for direct messaging & inquiries",
      action: "https://www.linkedin.com/in/charanbandaru/",
      iconStyle: "bg-blue-50 text-blue-600 border-blue-200",
      isExternal: true,
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/charankanth00",
      subtitle: "Browse my projects and repositories",
      action: "https://github.com/charankanth00",
      iconStyle: "bg-gray-100 text-gray-900 border-gray-300",
      isExternal: true,
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      ),
      label: "Location",
      value: "Visakhapatnam, Andhra Pradesh, India",
      subtitle: "Open to local, hybrid, and remote roles",
      action: null,
      iconStyle: "bg-emerald-50 text-emerald-600 border-emerald-200",
      isExternal: false,
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Construct mailto link as practical fallback
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:charanbandaru869@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 max-w-6xl mx-auto w-full min-w-0 overflow-hidden">
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Let's Connect
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Whether you have an opportunity, a project proposal, or just want to chat about tech and AI, feel free to reach out!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start w-full min-w-0">
        {/* Contact Channels */}
        <motion.div
          className="space-y-6 w-full min-w-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed break-words">
              I am actively looking for software engineering opportunities, internships, and collaborative development projects.
            </p>
          </div>

          {/* Recruiter & Priority Response Notice */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 to-indigo-50/80 border border-blue-200/90 shadow-sm flex items-start gap-3 sm:gap-3.5 w-full min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-none stroke-current"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full shrink-0">
                  Priority Response
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Fastest Communication Channels
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-0.5 break-words">
                For urgent hiring inquiries, recruitment opportunities, or quick turnaround discussions, please reach out directly via{" "}
                <a
                  href="mailto:charanbandaru869@gmail.com"
                  className="font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-2"
                >
                  Gmail
                </a>{" "}
                or{" "}
                <a
                  href="https://www.linkedin.com/in/charanbandaru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-2"
                >
                  LinkedIn
                </a>
                . Both channels are monitored daily.
              </p>
            </div>
          </div>

          <div className="space-y-3.5 w-full min-w-0">
            {contactMethods.map((method, index) => {
              const Tag = method.action ? motion.a : motion.div;
              const linkProps = method.action
                ? {
                    href: method.action,
                    target: method.isExternal ? "_blank" : "_self",
                    rel: method.isExternal ? "noopener noreferrer" : "",
                  }
                : {};

              return (
                <Tag
                  key={method.label}
                  {...linkProps}
                  className={`group flex items-center p-3.5 sm:p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 w-full min-w-0 ${
                    method.action ? "cursor-pointer" : ""
                  }`}
                  onHoverStart={() => setHoveredContact(index)}
                  onHoverEnd={() => setHoveredContact(null)}
                  whileHover={method.action ? { scale: 1.01 } : {}}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center shrink-0 mr-3.5 sm:mr-4 transition-transform group-hover:scale-110 ${method.iconStyle}`}
                  >
                    {method.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="font-bold text-gray-900 text-sm md:text-base truncate">
                      {method.label}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 truncate">
                      {method.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 truncate">
                      {method.subtitle}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  {method.action && (
                    <div className="text-gray-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1 shrink-0 ml-auto">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </Tag>
              );
            })}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-7 md:p-9 w-full min-w-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
          <p className="text-gray-600 text-sm mb-6">
            Have a project in mind or want to talk? Drop a message below and I'll get back to you promptly.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-emerald-200">
                  ✓
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Prepared!
                </h4>
                <p className="text-gray-600 text-sm max-w-sm mx-auto">
                  Your email client should have opened with your message. If not, feel free to email directly at{" "}
                  <a
                    href="mailto:charanbandaru869@gmail.com"
                    className="text-blue-600 font-semibold underline"
                  >
                    charanbandaru869@gmail.com
                  </a>
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-gray-50/70 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 text-sm placeholder-gray-400 outline-none"
                    required
                    placeholder="Charan Kanth"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-gray-50/70 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 text-sm placeholder-gray-400 outline-none"
                    required
                    placeholder="you@domain.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50/70 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 text-sm placeholder-gray-400 outline-none resize-none"
                    required
                    placeholder="Hello Charan, I'd like to talk about an opportunity..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ color: "#ffffff" }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 !text-white py-3.5 px-6 rounded-xl font-semibold shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        className="flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending Message...</span>
                      </motion.div>
                    ) : (
                      <motion.span
                        key="send"
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <span>Send Message</span>
                        <svg
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
