import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const curriculum = [
    {
        week: "Week 1",
        title: "The Foundation of Power",
        topics: ["Mindset Shift: From Player to Don", "Strategic Thinking Fundamentals", "Building Your Personal Brand", "Networking 101"]
    },
    {
        week: "Week 2",
        title: "Advanced Strategy",
        topics: ["Negotiation Mastery", "Influence and Persuasion", "Financial Literacy for Leaders", "Risk Management"]
    },
    {
        week: "Week 3",
        title: "Operational Excellence",
        topics: ["Project Management", "Team Leadership", "Digital Tools for Efficiency", "Public Speaking"]
    },
    {
        week: "Week 4",
        title: "The Launchpad",
        topics: ["Career Mapping", "Investment Strategies", "Final Capstone Project", "Graduation & Network Initiation"]
    }
];

const Program = () => {
    return (
        <div className="pt-20">
            <section className="bg-slate-900 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">The Curriculum</h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        A rigorous 4-week journey designed to transform your potential into tangible power.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-8">
                        {curriculum.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
                            >
                                <div className="p-6 md:p-8 border-b border-slate-700 bg-slate-800/50">
                                    <span className="text-sm font-bold text-violet-400 uppercase tracking-wider block mb-2">{module.week}</span>
                                    <h2 className="text-2xl font-bold text-white">{module.title}</h2>
                                </div>
                                <div className="p-6 md:p-8 bg-slate-900/50">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {module.topics.map((topic, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                                                <span className="text-slate-300">{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-violet-900/20 to-sky-900/20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Ready to Commit?</h2>
                    <a href="/enquiry" className="btn btn-primary text-lg px-8 py-4 inline-block">
                        Apply for the Program
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Program;
