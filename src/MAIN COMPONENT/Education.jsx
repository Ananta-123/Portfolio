import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const educationItems = [
    {
      degree: "MERN Stack Development",
      institution: "Apna College",
      status: "Ongoing",
      type: "Professional Course",
      icon: BookOpen,
      color: "#6366F1",
    },
    {
      degree: "Web Technologies Certification",
      institution: "JSPIDERS Bangalore",
      status: "2024",
      type: "Certification",
      icon: Award,
      color: "#8B5CF6",
    },
    {
      degree: "B.Tech Mechanical Engineering",
      institution: "ABIT Cuttack",
      status: "2023",
      type: "Bachelor Degree",
      icon: GraduationCap,
      color: "#14B8A6",
    },
  ];

  const teaching = {
    title: "Teaching & Knowledge Sharing",
    description:
      "Trained students in HTML, CSS, and JavaScript fundamentals with hands-on coding exercises.",
    icon: BookOpen,
    color: "#EC4899",
  };

  return (
    <section className="relative py-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl"></div>
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
              Education
            </span>
          </h2>

          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Continuous learning and skill development
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
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
                style={{ background: `${item.color}10` }}
              ></div>

              <div className="relative z-10">

                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${item.color}20` }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>

                <div className="mb-4">
                  
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                    style={{
                      background: `${item.color}20`,
                      color: item.color,
                    }}
                  >
                    {item.type}
                  </span>

                  <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                    {item.degree}
                  </h3>

                  <p className="text-[#94A3B8] text-sm mb-2">
                    {item.institution}
                  </p>

                  <p className="text-[#94A3B8] text-sm">
                    {item.status}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teaching Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          
          <div
            className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-2xl"
            style={{ background: teaching.color }}
          ></div>

          <div className="relative bg-[#1E293B] border border-white/10 rounded-2xl p-8 hover:border-[#6366F1]/50 transition-all duration-300">

            <div className="flex items-start gap-6">

              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${teaching.color}20` }}
              >
                <teaching.icon size={32} style={{ color: teaching.color }} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3">
                  {teaching.title}
                </h3>

                <p className="text-lg text-[#94A3B8] leading-relaxed">
                  {teaching.description}
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}