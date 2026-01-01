import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <section className="bg-slate-900 py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About NextGen Don Academy</h1>
                        <p className="text-xl text-slate-400">
                            We are dedicated to shaping the leaders of tomorrow through immersive education and strategic mentorship.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-slate-800/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-slate-800 border border-slate-700"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-violet-400">Our Mission</h2>
                            <p className="text-slate-300 leading-relaxed">
                                To provide a transformative learning platform that equips individuals with the practical skills, strategic mindset, and professional network required to excel in the modern economy.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-slate-800 border border-slate-700"
                        >
                            <h2 className="text-3xl font-bold mb-4 text-sky-400">Our Vision</h2>
                            <p className="text-slate-300 leading-relaxed">
                                A world where every ambitious individual has access to the mentorship and resources effectively needed to become a leader in their field ("Don") of the next generation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values / Goals */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Excellence', 'Integrity', 'Community'].map((value, i) => (
                            <div key={i} className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-violet-500 transition-colors">
                                <h3 className="text-xl font-bold mb-2">{value}</h3>
                                <p className="text-slate-400">Commitment to the highest standards in everything we do.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
