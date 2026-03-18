import { motion } from "framer-motion";
import { Code2, Database, Server, Wrench } from "lucide-react";

export function TechStack() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Tech Categories */}
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
              {/* Glow Effect */}
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

        {/* Technology Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-[#1E293B]/50 border border-white/10 rounded-xl p-8">

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Tailwind",
                "Git",
                "JavaScript",
                "MySQL",
                "REST API",
                "HTML5",
                "CSS3",
                "Analytics",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-center"
                >
                  <div className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors text-sm font-medium text-center">
                    {tech}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}