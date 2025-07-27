import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  const projects = [
    {
      title: "Network Traffic Monitor",
      description: "Real-time network traffic monitoring tool with IP, protocol, and URL analysis capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python/Flask", "Socket Programming", "HTML/CSS"],
      link: "https://github.com/niharkonda55/Network_Scanner"
    },
    {
      title: "Block Chain based Secure Messenger",
      description: "Build a cyber cyber security project, a web application using blockchain technology a decentralized messaging web application which enhances user’s privacy",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Solidity", "Ganache", "Web3.js", "Metamask"],
      link: "https://github.com/niharkonda55/secure_message"
    },
    {
      title: "Print Smart",
      description: "This system addresses the challenges associated with traditional printing processes by providing a centralized network where the owner will be admin.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["PHP", "HTML/CSS", "JavaScript"],
      link: "https://github.com/niharkonda55/printsmart"
    }
  ];

  const handleProjectClick = (link: string) => {
    // In a real implementation, this would navigate to the project
    window.open(link, "_blank");
    // alert('Project demo coming soon!');
  };

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover-glow transition-all magnetic-hover cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -10
              }}
              onClick={() => handleProjectClick(project.link)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 gradient-text">{project.title}</h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm font-mono ${tag === 'Python' || tag === 'Networking' || tag === 'ML' || tag === 'Blockchain'
                        ? 'bg-[var(--cyber-green)]/20 text-[var(--cyber-green)]'
                        : 'bg-[var(--cyber-blue)]/20 text-[var(--cyber-blue)]'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-[var(--cyber-navy)] hover:bg-[var(--cyber-green)] hover:text-[var(--cyber-dark)] transition-all py-2 rounded-lg font-semibold">
                  View Project <i className="fas fa-external-link-alt ml-2"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
