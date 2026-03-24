import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../Utility/ImageWithFallback.jsx";

export function Project() {
  const projects = [
    {
      title: "Taskji.com",
      subtitle: "SaaS Task Management Platform",
      description:
        "A comprehensive task management platform with advanced workflow features, real-time collaboration, and analytics.",
      image:
        "https://images.unsplash.com/photo-1558092535-648ec3c50158",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "REST API"],
      highlights: [
        "Built frontend components using React and Tailwind",
        "Integrated backend APIs",
        "Improved task workflow and user interaction",
        "Designed scalable modular components",
      ],
      color: "#6366F1",
      demoUrl: "https://taskji.com/",
      githubUrl: "https://github.com/taskjionline/taskji-dev-portfolio",
    },
    {
      title: "Blog Platform",
      subtitle: "Scalable CMS",
      description:
        "A full-featured content management system with JWT authentication, role-based access control, and cloud file storage.",
      image:
        "https://images.unsplash.com/photo-1615216057273-cbef9ec5636a",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
      highlights: [
        "Built backend using Node.js, Express.js, MongoDB",
        "Implemented JWT authentication",
        "File upload system using Multer and Cloudinary",
        "MongoDB aggregation pipelines",
        "REST API architecture for content publishing",
        "Role-based access control",
        "Mentored intern developers",
      ],
      color: "#14B8A6",
      demoUrl: "#",
      githubUrl: "https://github.com/Ananta-123/Blog-MoovOn.git",
    },
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent"></div>

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
              Featured Projects
            </span>
          </h2>

          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Real-world production applications I've built and contributed to
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div
                  className="absolute inset-0 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ background: project.color }}
                ></div>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1E293B]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60"></div>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                
                <div>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -20 : 20,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="inline-block px-4 py-1 bg-[#1E293B] border border-white/10 rounded-full mb-4"
                  >
                    <span className="text-sm" style={{ color: project.color }}>
                      {project.subtitle}
                    </span>
                  </motion.div>

                  <h3 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] mb-4">
                    {project.title}
                  </h3>

                  <p className="text-lg text-[#94A3B8] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#1E293B] border border-white/10 rounded-lg text-sm text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="bg-[#1E293B]/50 border border-white/10 rounded-xl p-6">
                  <h4 className="text-sm uppercase tracking-wider text-[#94A3B8] mb-4">
                    Key Highlights
                  </h4>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-sm text-[#94A3B8]"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: project.color }}
                        ></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  
                  <a
                    href={project.demoUrl}
                    className="group px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-[#6366F1]/50 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>

                  <a
                    href={project.githubUrl}
                    className="px-6 py-3 bg-[#1E293B] border border-white/10 rounded-lg text-[#F8FAFC] font-semibold flex items-center gap-2 hover:border-[#6366F1]/50 transition-all duration-300"
                  >
                    <Github size={18} />
                    View Code
                  </a>

                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}