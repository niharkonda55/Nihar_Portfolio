import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();

  const skillCategories = [
    {
      title: "Programming",
      icon: "fas fa-code",
      skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "Java", icon: "fab fa-java" },
        { name: "C", icon: "fas fa-copyright" },
        { name: "SQL", icon: "fas fa-database" },
        { name: "DSA", icon: "fab fa-cuttlefish" }
      ]
    },
    {
      title: "Web Tech",
      icon: "fas fa-globe",
      skills: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "PHP", icon: "fab fa-php" },
        { name: "Flask", icon: "fab fa-react" }
      ]
    },
    {
      title: "Security",
      icon: "fas fa-shield-alt",
      skills: [
        { name: "Network Security", icon: "fas fa-network-wired" },
        { name: "Computer Networks", icon: "fas fa-bug" },
        { name: "Vulnerability Assessment", icon: "fas fa-search" },
        { name: "Penetration Testing", icon: "fas fa-user-secret" },
        { name: "Cryptography", icon: "fas fa-lock" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "fas fa-tools",
      skills: [
        { name: "GitHub", icon: "fab fa-github" },
        { name: "Kali Linux", icon: "fas fa-skull-crossbones" }, // symbolic
        { name: "Nmap / Netcat", icon: "fas fa-network-wired" },
        { name: "VS Code", icon: "fas fa-code" },
        { name: "Metamask (Web3)", icon: "fas fa-mask" } // generic; consider SVG
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-[var(--cyber-navy)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass-card p-8 rounded-2xl hover-glow transition-all magnetic-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.5)"
              }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                <i className={`${category.icon} mr-3`}></i>{category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3">
                    <i className={`${skill.icon} text-[var(--cyber-green)]`}></i>
                    <span className="font-mono">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
