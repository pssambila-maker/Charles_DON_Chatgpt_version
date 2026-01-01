import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-sky-400">
                            NextGen Don Academy
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering the next generation with essential skills for success.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
                            <li><Link to="/program" className="hover:text-sky-400 transition-colors">Our Program</Link></li>
                            <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
                            <li><Link to="/privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1">
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-center gap-2">
                                <Mail size={16} className="text-sky-400" />
                                <span>info@nextgendonacademy.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} className="text-sky-400" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="text-sky-400 mt-1" />
                                <span>123 Innovation Dr,<br />Tech City, TC 90210</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="col-span-1">
                        <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-sky-400">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-pink-500">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors text-blue-500">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} NextGen Don Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
