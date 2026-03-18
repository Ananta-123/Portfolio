import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:anantaprasad12@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ananta-prasad-behera-4561ba254",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
    },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6366F1]/5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-clip-text text-transparent mb-2">
                Ananta Prasad Behera
              </h3>

              <p className="text-[#94A3B8]">
                MERN Stack Developer
              </p>
            </motion.div>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Building scalable SaaS platforms and modern web applications with clean architecture and best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F8FAFC] font-semibold mb-4"
            >
              Quick Links
            </motion.h4>

            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#6366F1] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#F8FAFC] font-semibold mb-4"
            >
              Connect
            </motion.h4>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#1E293B] border border-white/10 rounded-lg flex items-center justify-center text-[#94A3B8] hover:text-[#6366F1] hover:border-[#6366F1]/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-[#94A3B8] text-center sm:text-left">
            © {currentYear} Ananta Prasad Behera. MERN Stack Developer. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-sm text-[#94A3B8]">
            <span>Built with</span>
            <Heart size={14} className="text-[#EC4899] fill-[#EC4899]" />
            <span>using React & Tailwind CSS</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}