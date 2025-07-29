import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AchievementsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const achievements = [
        {
            title: "Student Hostel Coordinator",
            description: "Hostel Coordinator at CVR College of Engineering, managing student welfare and activities",
            icon: "fas fa-trophy",
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            title: "picoCTF",
            description: "Ranked 403rd globally among 10,000+ teams in the picoCTF Challenge (2025)",
            icon: "fas fa-flag",
            gradient: "from-electric to-neon-purple"
        },
        {
            title: "Cyber-Quest",
            description: "Organized a CTF event at CVR College of Engineering to promote cybersecurity awareness",
            icon: "fas fa-users",
            gradient: "from-neon-green to-emerald-500"
        }
    ];

    return (
        <section id="achievements" ref={ref} className="py-20 bg-slate-dark/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Achievements & <span className="text-neon-green">Recognition</span></h2>
                    <div className="w-24 h-1 bg-electric mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                            className="bg-slate-dark/50 p-6 rounded-lg text-center card-hover"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ delay: 0.4 + 0.2 * index, duration: 0.5, type: "spring" }}
                                className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                            >
                                <i className={`${achievement.icon} text-2xl text-white`}></i>
                            </motion.div>
                            <h3 className="text-xl font-semibold text-neon-green mb-2">{achievement.title}</h3>
                            <p className="text-gray-300">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
