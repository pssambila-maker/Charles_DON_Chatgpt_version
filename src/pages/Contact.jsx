import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // No backend hook-up in this view; prevent default submit for now.
    };

    return (
        <div className="pt-20" style={{ background: '#0f172a', color: '#e5e7eb' }}>
            {/* Hero */}
            <section style={{ background: 'var(--primary)', padding: '70px 0', position: 'relative' }}>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff' }}>Contact</h1>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        right: '-8%',
                        top: '-20%',
                        width: '34%',
                        height: '220%',
                        borderRadius: '999px',
                        background: 'rgba(255,255,255,0.12)'
                    }}
                />
            </section>

            {/* Contact content */}
            <section style={{ background: '#111827', padding: '90px 0 70px' }}>
                <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2.5rem',
                            background: '#0b1222',
                            borderRadius: '8px',
                            padding: '32px 32px 40px'
                        }}
                    >
                        {/* Form */}
                        <div>
                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '14px' }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px 14px',
                                        borderRadius: '4px',
                                        border: '1px solid #334155',
                                        background: '#1e293b',
                                        color: '#e5e7eb'
                                    }}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px 14px',
                                        borderRadius: '4px',
                                        border: '1px solid #334155',
                                        background: '#1e293b',
                                        color: '#e5e7eb'
                                    }}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        padding: '12px 14px',
                                        borderRadius: '4px',
                                        border: '1px solid #334155',
                                        background: '#1e293b',
                                        color: '#e5e7eb'
                                    }}
                                />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px 14px',
                                        borderRadius: '4px',
                                        border: '1px solid #334155',
                                        background: '#1e293b',
                                        color: '#e5e7eb'
                                    }}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        background: '#0ea5e9',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '10px 18px',
                                        borderRadius: '999px',
                                        fontWeight: 700,
                                        width: 'fit-content'
                                    }}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Info */}
                        <div style={{ color: '#e5e7eb' }}>
                            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '12px', color: '#f8fafc' }}>Have Any Queries?</h2>
                            <p style={{ marginBottom: '22px', color: '#cbd5e1', lineHeight: 1.7 }}>
                                Wish to get a free consultation or a quick checkup to identify the kind of treatment you need? Just give us a call or submit the form here.
                            </p>
                            <div style={{ borderTop: '1px solid rgba(226,232,240,0.2)', margin: '18px 0' }} />
                            <div style={{ display: 'grid', gap: '18px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ background: '#0f172a', padding: '10px', borderRadius: '50%' }}>
                                        <Phone color="#0ea5e9" />
                                    </div>
                                    <span style={{ fontWeight: 700, color: '#f8fafc' }}>+1(248)795-9750</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ background: '#0f172a', padding: '10px', borderRadius: '50%' }}>
                                        <Mail color="#0ea5e9" />
                                    </div>
                                    <span style={{ fontWeight: 700, color: '#f8fafc' }}>info@nextgendonacademy.com</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ background: '#0f172a', padding: '10px', borderRadius: '50%' }}>
                                        <MapPin color="#0ea5e9" />
                                    </div>
                                    <span style={{ color: '#f8fafc', lineHeight: 1.6 }}>
                                        995 N. Pontiac Trail P.O. Box 182 Walled Lake, MI 48390
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section style={{ padding: 0, margin: 0 }}>
                <iframe
                    title="NDA Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8076329994435!2d-73.99403852361936!3d40.73804783541753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9e82aafab%3A0x8bd7b4719c5602eb!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003!5e0!3m2!1sen!2sus!4v1701354041000!5m2!1sen!2sus"
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </div>
    );
};

export default Contact;
