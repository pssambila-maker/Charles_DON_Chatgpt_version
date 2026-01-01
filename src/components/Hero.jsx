import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-0 w-96 h-96 bg-violet-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-900/80 to-slate-900"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-sm font-medium mb-6">
                        Next Generation Leadership
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                        Define Your Future <br />
                        <span className="text-violet-500">Today.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                        Join the elite 4-week certification program designed to equip you with the skills, mindset, and network to dominate your field.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link to="/enquiry" className="btn btn-primary text-lg px-8 py-3 flex items-center gap-2 group">
                            Start Your Journey
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/program" className="px-8 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors text-white font-medium">
                            View Curriculum
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
