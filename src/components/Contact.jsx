"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [hoveredContact, setHoveredContact] = useState(null);
  const [state, handleSubmit] = useForm("mgvyawbe"); // <-- only hash ID, not full URL

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "charanbandaru869@gmail.com",
      action: "mailto:charanbandaru869@gmail.com",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 0123456789",
      action: "tel:+915551234567",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/charanbandaru",
      action: "https://www.linkedin.com/in/charanbandaru",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/charankanth00",
      action: "https://github.com/charankanth00",
      color: "bg-gray-500",
      hoverColor: "hover:bg-gray-700",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-600 mb-8">
            I'm always open to new opportunities and interesting projects. 
            Feel free to reach out through any of these channels!
          </p>

          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.action}
                className={`group flex items-center p-4 rounded-xl ${method.color} text-white transition-all duration-300 ${method.hoverColor} cursor-pointer`}
                onHoverStart={() => setHoveredContact(index)}
                onHoverEnd={() => setHoveredContact(null)}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="text-2xl mr-4"
                  animate={{
                    rotate: hoveredContact === index ? [0, -10, 10, 0] : 0,
                    scale: hoveredContact === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {method.icon}
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold">{method.label}</h4>
                  <p className="text-sm opacity-90">{method.value}</p>
                </div>
                <motion.div
                  className="text-xl opacity-70 group-hover:opacity-100"
                  animate={{ x: hoveredContact === index ? 5 : 0 }}
                >
                  →
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

          <AnimatePresence mode="wait">
            {state.succeeded ? (
              <motion.div
                key="success"
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-2xl font-bold text-green-600 mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello!"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {state.submitting ? "Sending..." : "Send Message 🚀"}
                  </motion.button>

                  <button
                    type="reset"
                    className="flex-1 bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-500 transition-all duration-300"
                  >
                    Reset
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
