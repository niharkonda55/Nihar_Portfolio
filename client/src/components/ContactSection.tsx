import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import useScrollReveal from "@/hooks/useScrollReveal";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Frontend-only form submission
    toast({
      title: "Message Received!",
      description: "Thank you for your message. This is a demo portfolio - in a real setup, this would send an email.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[var(--cyber-navy)]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
            <p className="text-lg text-gray-300 mb-8">
              Ready to discuss cybersecurity solutions or collaboration opportunities?
              I'm always interested in new challenges and innovative security projects.
            </p>

            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:niharkonda55@gmail.com"
                className="flex items-center space-x-4 hover:opacity-80 transition"
              >
                <div className="w-12 h-12 bg-[var(--cyber-green)]/20 rounded-full flex items-center justify-center">
                  <MdEmail className="text-[var(--cyber-green)] text-xl" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">niharkonda55@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/kondanihar55"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:opacity-80 transition"
              >
                <div className="w-12 h-12 bg-[var(--cyber-blue)]/20 rounded-full flex items-center justify-center">
                  <FaLinkedin className="text-[var(--cyber-blue)] text-xl" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-400">/in/kondanihar55/</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/niharkonda55"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:opacity-80 transition"
              >
                <div className="w-12 h-12 bg-[var(--cyber-purple)]/20 rounded-full flex items-center justify-center">
                  <FaGithub className="text-[var(--cyber-purple)] text-xl" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-gray-400">/niharkonda55</p>
                </div>
              </a>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[var(--cyber-dark)] border border-gray-600 rounded-lg px-4 py-3 focus:border-[var(--cyber-green)] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[var(--cyber-dark)] border border-gray-600 rounded-lg px-4 py-3 focus:border-[var(--cyber-green)] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[var(--cyber-dark)] border border-gray-600 rounded-lg px-4 py-3 focus:border-[var(--cyber-green)] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--cyber-green)] text-[var(--cyber-dark)] py-3 rounded-lg font-semibold hover-glow transition-all magnetic-hover"
              >
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
