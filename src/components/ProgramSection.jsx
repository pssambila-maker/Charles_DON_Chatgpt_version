import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Target } from 'lucide-react';

const features = [
    {
        icon: <Target className="w-8 h-8 text-sky-400" />,
        title: "Strategic Vision",
        description: "Learn to see the bigger picture and plan your career with precision."
    },
    {
        icon: <Users className="w-8 h-8 text-violet-500" />,
        title: "Network Building",
        description: "Connect with industry leaders and like-minded peers."
    },
    {
        icon: <BookOpen className="w-8 h-8 text-amber-500" />,
        title: "Practical Skills",
        description: "Hands-on projects that apply directly to real-world scenarios."
    },
    {
        icon: <Trophy className="w-8 h-8 text-pink-500" />,
        title: "Certification",
        description: "Earn a recognized certificate to validate your expertise."
    }
];

const ProgramSection = () => {
    return (
        <section className="py-24 bg-slate-900 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NextGen Don?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Our comprehensive curriculum is designed to transform potential into power.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors"
                        >
                            <div className="mb-4 p-3 bg-slate-900 rounded-lg inline-block">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramSection;
