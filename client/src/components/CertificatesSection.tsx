import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CertificatesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const certifications = [
        {
            title: "Google Cybersecurity Professional Certificate",
            provider: "Coursera",
            icon: "fab fa-google",
        },
        {
            title: "ApoorvCTF Certificate",
            provider: "Cybersecurity Competition",
            icon: "fas fa-flag",
        },
        {
            title: "Palo Alto Networks Certificate",
            provider: "Palo Alto Networks",
            icon: "fas fa-shield-alt",
        },
        {
            title: "Zscaler Certificate",
            provider: "Zscaler",
            icon: "fas fa-cloud",
        },
    ];

    return (
        <section
            id="certificates"
            ref={ref}
            className="py-20 bg-slate-dark text-white"
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        My <span className="text-neon-green">Certificates</span>
                    </h2>
                    <div className="w-24 h-1 bg-electric mx-auto" />
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-light border border-electric/20 rounded-lg p-5 flex gap-4 hover:border-electric/40 transition-all"
                        >
                            <div className="text-electric text-3xl flex-shrink-0 pt-1">
                                <i className={cert.icon} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold leading-snug">
                                    {cert.title}
                                </h4>
                                <p className="text-sm text-gray-400">{cert.provider}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="/certificates"
                        className="inline-block bg-electric hover:bg-electric/90 text-slate-dark font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-electric/20"
                    >
                        View Full Certificate Page
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
