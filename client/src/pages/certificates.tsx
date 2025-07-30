import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import CustomCursor from "@/components/CustomCursor";

export default function CertificatesPage() {
    const certificates = [
        {
            title: "Google Cybersecurity Professional Certificate",
            provider: "Coursera",
            file: "/certficates/Coursera_1753725836629.pdf",
            description: "8-course specialization covering cybersecurity fundamentals, network security, and incident response"
        },
        {
            title: "ApoorvCTF Certificate",
            provider: "Cybersecurity Competition",
            file: "/certficates/ApoorvCTF-Certificate_1753725836628.pdf",
            description: "Capture The Flag cybersecurity competition certificate"
        },
        {
            title: "Digital 101 Journey",
            provider: "Digital Skills Program",
            file: "/certficates/Digital 101_1753725836629.pdf",
            description: "Digital literacy and technology foundations certification"
        },
        {
            title: "Palo Alto Networks Certificate",
            provider: "Palo Alto Networks",
            file: "/certficates/Palo-Alto_1753725836629.pdf",
            description: "Network security and firewall management certification"
        },
        {
            title: "Zscaler Certificate",
            provider: "Zscaler",
            file: "/certficates/Zscaler_1753725836630.pdf",
            description: "Cloud security and zero trust architecture certification"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-dark text-white">
            {/* Navigation */}
            <CustomCursor />
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-dark/95 backdrop-blur-md border-b border-electric/20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2 text-neon-green hover:text-electric transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-semibold">Back to Portfolio</span>
                        </Link>
                        <div className="text-xl font-bold text-neon-green">KN</div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold mb-4">
                            Professional <span className="text-neon-green glitch-text" data-text="Certificates">Certificates</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Explore my professional certifications in cybersecurity, digital skills, and technology
                        </p>
                    </motion.div>

                    <div className="grid gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-light border border-electric/20 rounded-lg overflow-hidden hover:border-electric/40 transition-all"
                            >
                                <div className="p-6">
                                    <div className="flex flex-col lg:flex-row gap-6">
                                        <div className="lg:w-1/3">
                                            <h3 className="text-xl font-semibold text-neon-green mb-2">{cert.title}</h3>
                                            <p className="text-electric mb-2">{cert.provider}</p>
                                            <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                                        </div>

                                        <div className="lg:w-2/3">
                                            <div className="bg-white rounded-lg p-4 h-96 overflow-hidden">
                                                <iframe
                                                    src={cert.file}
                                                    width="100%"
                                                    height="100%"
                                                    className="border-0 rounded"
                                                    title={cert.title}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}