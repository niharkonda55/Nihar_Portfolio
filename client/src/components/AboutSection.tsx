import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Cybersecurity professional workspace"
              className="rounded-2xl shadow-2xl hover-glow transition-all"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold gradient-text">Cybersecurity & Software Development Enthusiast
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I’m Konda Nihar, a final-year Computer Science student with a strong focus on Cybersecurity and full-stack development. I’ve led real-time projects in network traffic monitoring, and blockchain based secure_message.
              Skilled in Python, React, PHP, and tools like Nmap and Kali linux, I enjoy building end-to-end systems that detect, analyze, and defend against security threats. I’m passionate about combining technical innovation with real-world impact.

            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My passion lies in building secure, scalable applications that protect user data and enhance online safety.
              I combine academic excellence with practical experience to deliver
              robust security solutions and provides web development services.
            </p>

            <div className="space-y-4">
              {/* <div className="glass-card p-4 rounded-lg">
                <h4 className="font-semibold text-[var(--cyber-green)] mb-2">Current Role</h4>
                <p className="text-gray-300">Regent Students Head - CVR College of Engineering</p>
              </div> */}
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-semibold text-[var(--cyber-blue)] mb-2">Education</h4>
                <p className="text-gray-300">B.Tech Computer Science and Engineering (Cyber Security)</p>
                <p>CVR College of Engineering (2022-2026)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
