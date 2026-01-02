import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer" style={{ background: '#c026d3', color: 'white', padding: '60px 0 20px' }}>
            <div className="container">
                <div className="footer-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand */}
                    <div className="footer-col">
                        <Link to="/" style={{ display: 'inline-block', marginBottom: '1rem' }}>
                            <img src="/Logo_nda.png" alt="NextGen DON Academy" style={{ height: '60px', objectFit: 'contain' }} />
                        </Link>
                        <p style={{ lineHeight: '1.6', opacity: 0.9 }}>
                            Empowering the Leaders Behind Quality Care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
                            <li><Link to="/about" style={{ color: 'white' }}>About</Link></li>
                            <li><Link to="/program" style={{ color: 'white' }}>Program</Link></li>
                            <li><Link to="/career" style={{ color: 'white' }}>Career</Link></li>
                            <li><Link to="/enquiry" style={{ color: 'white' }}>Inquiry</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Contact</h4>
                        <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Phone size={18} />
                                <span>+1 (407) 965-5152</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Mail size={18} />
                                <a href="mailto:info@nextgendonacademy.com" style={{ color: 'white' }}>info@nextgendonacademy.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} NextGen Don Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
