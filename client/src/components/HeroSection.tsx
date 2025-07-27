import { motion } from "framer-motion";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal();

  const handleDownloadResume = () => {
    // TODO: Implement actual resume download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be the actual resume file
    link.download = 'Cybersecurity_Professional_Resume.pdf';
    link.click();
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative cyber-grid">
      <div className="text-center z-10 max-w-4xl px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Konda Nihar</span><br />
            {/* <span className="text-white"></span> */}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Specializing in Computer Science - Cybersecurity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleDownloadResume}
              className="bg-[var(--cyber-green)] text-[var(--cyber-dark)] px-8 py-4 rounded-full font-semibold hover-glow transition-all magnetic-hover"
            >
              <i className="fas fa-download mr-2"></i>Download Resume
            </button>
            <button 
              onClick={handleGetInTouch}
              className="border border-[var(--cyber-blue)] text-[var(--cyber-blue)] px-8 py-4 rounded-full font-semibold hover-glow transition-all magnetic-hover"
            >
              <i className="fas fa-envelope mr-2"></i>Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-20 h-20 border border-[var(--cyber-green)] rounded-lg"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-16 h-16 border border-[var(--cyber-blue)] rounded-full"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -2
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-10 w-12 h-12 border border-[var(--cyber-purple)] rounded-lg"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -4
        }}
      />
    </section>
  );
}
