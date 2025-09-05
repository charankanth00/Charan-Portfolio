"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredContact, setHoveredContact] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "charanbandaru869@gmail.com",
      action: "mailto:charanbandaru869@gmail.com",
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-500"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 0123456789",
      action: "tel:+915551234567",
      color: "bg-green-100",
      hoverColor: "hover:bg-green-600"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/charanbandaru",
      action: "https://www.linkedin.com/in/charanbandaru",
      color: "bg-blue-100",
      hoverColor: "hover:bg-blue-500"
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/charankanth00",
      action: "https://github.com/charankanth00",
      color: "bg-gray-100",
      hoverColor: "hover:bg-gray-900"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mgvyawbe', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="text-2xl mr-4"
                  animate={{ 
                    rotate: hoveredContact === index ? [0, -10, 10, 0] : 0,
                    scale: hoveredContact === index ? 1.2 : 1
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
            {submitted ? (
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
                {/* Name Field */}
                <motion.div
                  className="relative"
                  animate={{ 
                    scale: focusedField === "name" ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                    placeholder="Your Name"
                  />
                  <AnimatePresence>
                    {focusedField === "name" && (
                      <motion.div
                        className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-blue-500"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        ✨
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  className="relative"
                  animate={{ 
                    scale: focusedField === "email" ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                    placeholder="your.email@example.com"
                  />
                  <AnimatePresence>
                    {focusedField === "email" && (
                      <motion.div
                        className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-blue-500"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        ✨
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  className="relative"
                  animate={{ 
                    scale: focusedField === "message" ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                    placeholder="Tell me about your project or just say hello!"
                  />
                  <AnimatePresence>
                    {focusedField === "message" && (
                      <motion.div
                        className="absolute -right-2 top-1/4 text-blue-500"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        ✨
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
                        Sending...
                      </motion.div>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Send Message 🚀
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
