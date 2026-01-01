import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: '4-Week Certification',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            if (!formData.name || !formData.email || !formData.phone) {
                throw new Error("Please fill in all required fields.");
            }

            await addDoc(collection(db, "enquiries"), {
                ...formData,
                createdAt: serverTimestamp()
            });

            setStatus({ type: 'success', message: 'Application submitted successfully! We will contact you soon.' });
            setFormData({ name: '', email: '', phone: '', program: '4-Week Certification', message: '' });
        } catch (error) {
            console.error("Error submitting form: ", error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-24 pb-20 min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl"
                >
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-sky-400">
                            Apply Now
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Start your journey with NextGen Don Academy.
                        </p>
                    </div>

                    {status.message && (
                        <div className={`p-4 mb-6 rounded-lg ${status.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                            {status.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:border-sky-400 focus:outline-none text-white"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:border-sky-400 focus:outline-none text-white"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:border-sky-400 focus:outline-none text-white"
                                placeholder="+1 (555) 000-0000"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Program Selection</label>
                            <select
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:border-sky-400 focus:outline-none text-white"
                            >
                                <option>4-Week Certification</option>
                                <option>Mentorship Only</option>
                                <option>Corporate Training</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Message (Optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:border-sky-400 focus:outline-none text-white"
                                placeholder="Tell us about your goals..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-violet-600 to-sky-500 hover:opacity-90 transition-opacity ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Enquiry;
