import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-20 min-h-screen bg-slate-900">
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-16">Get in Touch</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Email Us</h4>
                                            <p className="text-slate-400">info@nextgendonacademy.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-sky-500/10 rounded-lg text-sky-400">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Call Us</h4>
                                            <p className="text-slate-400">+1 (555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Visit Us</h4>
                                            <p className="text-slate-400">
                                                123 Innovation Dr<br />
                                                Tech City, TC 90210
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder or Form Link */}
                        <div className="bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center min-h-[300px]">
                            <p className="text-slate-500">Map Visualization</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
