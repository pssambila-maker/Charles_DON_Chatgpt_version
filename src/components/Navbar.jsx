import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { title: 'HOME', path: '/' },
        { title: 'ABOUT', path: '/about' },
        { title: 'PROGRAM', path: '/program' },
        { title: 'CONTACT', path: '/contact' },
        { title: 'ENQUIRY', path: '/enquiry' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/Logo_nda.png" alt="NextGen DON Academy" style={{ height: '50px', objectFit: 'contain' }} />
                </Link>

                <div className="hidden md:flex items-center gap-2 text-white text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
                    <Mail size={16} />
                    <a href="mailto:info@nextgendonacademy.com" className="hover:underline">info@nextgendonacademy.com</a>
                </div>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={
av-link }
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={mobile-nav-link }
                            onClick={() => setIsOpen(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <div className="px-8 py-4 text-white text-sm flex items-center gap-2 border-t border-white/10" style={{ paddingLeft: '2rem' }}>
                        <Mail size={16} />
                        <a href="mailto:info@nextgendonacademy.com">info@nextgendonacademy.com</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
