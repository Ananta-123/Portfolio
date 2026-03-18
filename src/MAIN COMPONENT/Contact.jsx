import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anantaprasad12@gmail.com",
      href: "mailto:anantaprasad12@gmail.com",
      color: "#6366F1",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8249109450",
      href: "tel:+918249109450",
      color: "#14B8A6",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cuttack, Odisha, India",
      href: null,
      color: "#8B5CF6",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/ananta-prasad-behera-4561ba254",
      color: "#EC4899",
    },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#14B8A6] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>

          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-6">
                Contact Information
              </h3>

              <p className="text-[#94A3B8] mb-8">
                Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 p-4 bg-[#1E293B] border border-white/10 rounded-xl hover:border-[#6366F1]/50 transition-all duration-300"
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${info.color}20` }}
                      >
                        <info.icon size={20} style={{ color: info.color }} />
                      </div>

                      <div>
                        <div className="text-sm text-[#94A3B8]">{info.label}</div>
                        <div className="text-[#F8FAFC] group-hover:text-[#6366F1] transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-[#1E293B] border border-white/10 rounded-xl">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ background: `${info.color}20` }}
                      >
                        <info.icon size={20} style={{ color: info.color }} />
                      </div>

                      <div>
                        <div className="text-sm text-[#94A3B8]">{info.label}</div>
                        <div className="text-[#F8FAFC]">{info.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#1E293B] border border-white/10 rounded-lg text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20"
                />
              </div>

              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#1E293B] border border-white/10 rounded-lg text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20"
                />
              </div>

              <div>
                <label className="block text-sm text-[#94A3B8] mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-[#1E293B] border border-white/10 rounded-lg text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#6366F1]/50 transition-all duration-300"
              >
                <Send size={20} />
                Send Message
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}