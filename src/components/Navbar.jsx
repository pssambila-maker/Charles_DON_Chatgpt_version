import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Program', path: '/program' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close menu when route changes
    if (isOpen && location.pathname) {
        // Only if we wanted to auto-close, but typically handled by Link onClick or useEffect
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass h-20 transition-all duration-300">
            <div className="container h-full mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-sky-400">
                    NextGen Don Academy
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium hover:text-sky-400 transition-colors ${location.pathname === link.path ? 'text-sky-400' : 'text-slate-300'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/enquiry" className="btn btn-primary px-6 py-2">
                        Enrol Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 left-0 w-full glass border-t border-slate-700 p-4 flex flex-col space-y-4"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block text-lg font-medium ${location.pathname === link.path ? 'text-sky-400' : 'text-slate-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/enquiry"
                            onClick={() => setIsOpen(false)}
                            className="btn btn-primary text-center block"
                        >
                            Enrol Now
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
