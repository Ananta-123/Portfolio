import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer",
      company: "MoovOn Service & Solutions",
      period: "Current",
      type: "Full-time",
      responsibilities: [
        "Building full-stack SaaS applications",
        "Developing responsive UI using React and Tailwind",
        "Integrating RESTful APIs",
        "Implementing pagination for large datasets",
        "Implementing role-based access control",
        "Creating reusable React components",
        "Contributing to backend API architecture",
        "Improving performance and scalability",
      ],
      color: "#6366F1",
    },
    {
      role: "Frontend Developer Intern",
      company: "Ervon Technology",
      period: "2024",
      type: "Internship",
      responsibilities: [
        "Built responsive web interfaces",
        "Developed UI components using React",
        "Ensured cross-browser compatibility",
        "Improved user experience and UI responsiveness",
      ],
      color: "#14B8A6",
    },
  ];

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      
      {/* Background Blur Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl"></div>
      </div>

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
              Work Experience
            </span>
          </h2>

          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-[#14B8A6]"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Experience Card */}
                <div
                  className={
                    index % 2 === 0
                      ? "lg:text-right lg:pr-12"
                      : "lg:col-start-2 lg:pl-12"
                  }
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#1E293B] border border-white/10 rounded-xl p-6 hover:border-[#6366F1]/50 transition-all duration-300 group"
                  >
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${exp.color}20` }}
                      >
                        <Briefcase size={20} style={{ color: exp.color }} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#F8FAFC]">
                          {exp.role}
                        </h3>
                        <p className="text-[#94A3B8]">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-sm text-[#94A3B8]">
                      <Calendar size={16} style={{ color: exp.color }} />
                      <span>{exp.period}</span>
                      <span className="px-2 py-1 bg-[#334155] rounded text-xs">
                        {exp.type}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-[#94A3B8] text-sm"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: exp.color }}
                          ></div>
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Glow */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                      style={{ background: `${exp.color}10` }}
                    ></div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="w-4 h-4 rounded-full border-4 border-[#0B1120]"
                    style={{ background: exp.color }}
                  ></motion.div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}