"use client";

import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  type: "internship" | "volunteer" | "freelance" | "full-time";
}

const experiences: Experience[] = [
  {
    role: "Web Developer & Cybersecurity Intern",
    company: "Zsquare Technologies",
    period: "September 2025 - Present",
    location: "Hyderabad, India",
    description: "Working on web development and security assessments for modern web applications.",
    responsibilities: [
      "Developed web applications using React and Node.js",
      "Implemented security features in web applications",
      "Performed vulnerability assessments and testing",
      "Collaborated with development teams on secure coding practices"
    ],
    technologies: ["Flask", "Next.js", "Python", "Kali Linux", "MongoDB"],
    type: "internship"
  }
];

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  const getTypeConfig = (type: Experience["type"]) => {
    switch (type) {
      case "internship":
        return {
          color: "var(--cyber-blue)",
          label: "INTERNSHIP",
          icon: "fa-laptop-code"
        };
      case "volunteer":
        return {
          color: "var(--cyber-purple)",
          label: "VOLUNTEER",
          icon: "fa-hands-helping"
        };
      case "freelance":
        return {
          color: "var(--cyber-green)",
          label: "FREELANCE",
          icon: "fa-briefcase"
        };
      case "full-time":
        return {
          color: "#00d9ff",
          label: "FULL-TIME",
          icon: "fa-building"
        };
      default:
        return {
          color: "var(--cyber-green)",
          label: (type as unknown as string).toUpperCase() as string,
          icon: "fa-briefcase"
        };
    }
  };

  return (
    <section id="experience" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {experiences.length > 0 ? (
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const config = getTypeConfig(exp.type);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                  className="glass-card p-6 md:p-8 rounded-2xl hover-glow group"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      {/* Type Badge */}
                      <div 
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3"
                        style={{
                          backgroundColor: `${config.color}20`,
                          color: config.color,
                          border: `1px solid ${config.color}`
                        }}
                      >
                        <i className={`fas ${config.icon}`}></i>
                        {config.label}
                      </div>

                      {/* Role */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 gradient-text">
                        {exp.role}
                      </h3>

                      {/* Company */}
                      <p className="text-lg text-gray-300 font-semibold mb-3 flex items-center gap-2">
                        <i className="fas fa-building" style={{ color: config.color }}></i>
                        {exp.company}
                      </p>

                      {/* Period & Location */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <i className="fas fa-calendar-alt" style={{ color: config.color }}></i>
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-2">
                            <i className="fas fa-map-marker-alt" style={{ color: config.color }}></i>
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Icon decoration */}
                    <div 
                      className="hidden md:flex w-16 h-16 rounded-full border-2 items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        borderColor: config.color,
                        backgroundColor: `${config.color}10`
                      }}
                    >
                      <i className={`fas ${config.icon} text-2xl`} style={{ color: config.color }}></i>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="mb-6">
                      <h4 
                        className="text-sm font-semibold mb-3"
                        style={{ color: config.color }}
                      >
                        Key Responsibilities
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                            <i className="fas fa-chevron-right text-xs mt-1" style={{ color: config.color }}></i>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 
                      className="text-sm font-semibold mb-3"
                      style={{ color: config.color }}
                    >
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-lg border transition-all hover:scale-105"
                          style={{
                            borderColor: config.color,
                            color: config.color,
                            backgroundColor: `${config.color}10`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-12 rounded-2xl text-center"
          >
            <i className="fas fa-briefcase text-5xl text-gray-600 mb-4 block"></i>
            <p className="text-gray-400">Currently building experience through projects and continuous learning...</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}