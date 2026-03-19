import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench } from "lucide-react";

export function TechStack() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    let ctx = gsap.context(() => {
      // ===============================
      // ✅ SAFE ENTRANCE ANIMATION
      // ===============================
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      );

      // ===============================
      // ✅ IMAGE HOVER TILT EFFECT
      // ===============================
      const el = imageRef.current;

      const handleMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        gsap.to(el, {
          rotateY,
          rotateX,
          scale: 1.08,
          transformPerspective: 600,
          transformOrigin: "center",
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out"
        });
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);

      // ===============================
      // ✅ CLEANUP
      // ===============================
      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const techCategories = [
    {
      category: "Frontend",
      icon: Code2,
      color: "#6366F1",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
      ],
    },
    {
      category: "Backend",
      icon: Server,
      color: "#8B5CF6",
      technologies: ["Node.js", "Express.js"],
    },
    {
      category: "Database",
      icon: Database,
      color: "#14B8A6",
      technologies: ["MongoDB", "MySQL"],
    },
    {
      category: "Tools",
      icon: Wrench,
      color: "#EC4899",
      technologies: ["Git", "REST APIs", "RBAC", "Google Analytics"],
    },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">

      {/* ✅ FIXED OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= ABOUT INTRO ================= */}
        <div
          ref={containerRef}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div
              ref={imageRef}
              className="relative w-[320px] h-[320px] hero-tilt"
            >
              {/* SVG Ring */}
              <svg
                className="absolute inset-0 animate-spin-slow"
                viewBox="0 0 200 200"
              >
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 6"
                />
              </svg>

              {/* Glow */}
              <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#14B8A6] opacity-30"></div>

              {/* Image */}
              <img
                src="https://res.cloudinary.com/dl58sdjnk/image/upload/v1773810370/Gemini_Generated_Image_l2ec1ol2ec1ol2ec_uwzstz.png"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#14B8A6] bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-[#94A3B8] mb-4 leading-relaxed">
              I'm a passionate full-stack developer focused on building modern,
              scalable, and user-centric web applications. I specialize in crafting
              clean UI with{" "}
              <span className="text-[#6366F1]">React.js</span> and{" "}
              <span className="text-[#8B5CF6]">Tailwind CSS</span>, while developing
              robust backend systems using{" "}
              <span className="text-[#14B8A6]">Node.js</span> and{" "}
              <span className="text-[#14B8A6]">Express.js</span>.
            </p>

            <p className="text-[#94A3B8] leading-relaxed">
              With experience in MongoDB, MySQL, Git, REST APIs, RBAC, and Analytics,
              I focus on building performant and scalable applications with clean architecture.
            </p>
          </div>
        </div>
        {/* ================= END ABOUT ================= */}

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#14B8A6] bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>

          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Technologies I use to build modern, scalable applications
          </p>
        </motion.div>

        {/* Tech Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#1E293B] border border-white/10 rounded-xl p-6 hover:border-[#6366F1]/50 transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ background: `${category.color}20` }}
              ></div>

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${category.color}20` }}
                >
                  <category.icon size={24} style={{ color: category.color }} />
                </div>

                <h3 className="text-xl font-semibold text-[#F8FAFC] mb-4">
                  {category.category}
                </h3>

                <div className="space-y-2">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 text-[#94A3B8] text-sm"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: category.color }}
                      ></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}