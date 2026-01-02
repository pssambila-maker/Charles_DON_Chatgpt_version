import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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
            if (!formData.name || !formData.email || !formData.phone || !formData.message) {
                throw new Error('Please fill in all required fields.');
            }

            await addDoc(collection(db, 'enquiries'), {
                ...formData,
                createdAt: serverTimestamp()
            });

            setStatus({ type: 'success', message: 'Thank you! We\'ll be in touch within 24 hours.' });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Error submitting form: ', error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-20" style={{ background: '#0b1324', minHeight: '100vh', color: '#e5e7eb' }}>
            <section
                style={{
                    position: 'relative',
                    padding: '80px 0 70px',
                    backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(10, 19, 36, 0.78)'
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px' }}>
                    <h1
                        style={{
                            color: '#fff',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '2.4rem',
                            marginBottom: '12px',
                            textAlign: 'center'
                        }}
                    >
                        Start Your DON Journey Today
                    </h1>
                    <p style={{ textAlign: 'center', color: '#e5e7eb', marginBottom: '32px', fontSize: '1.1rem' }}>
                        Fill out the form below and we'll contact you within 24 hours
                    </p>

                    {status.message && (
                        <div
                            style={{
                                marginBottom: '18px',
                                padding: '12px 16px',
                                borderRadius: '8px',
                                background: status.type === 'success' ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.18)',
                                color: status.type === 'success' ? '#bbf7d0' : '#fecdd3'
                            }}
                        >
                            {status.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '18px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px 14px',
                                    borderRadius: '2px',
                                    border: '1px solid #9ca3af',
                                    background: 'rgba(17,24,39,0.85)',
                                    color: '#fff'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px 14px',
                                    borderRadius: '2px',
                                    border: '1px solid #9ca3af',
                                    background: 'rgba(17,24,39,0.85)',
                                    color: '#fff'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="(123) 456-7890"
                                style={{
                                    width: '100%',
                                    padding: '12px 14px',
                                    borderRadius: '2px',
                                    border: '1px solid #9ca3af',
                                    background: 'rgba(17,24,39,0.85)',
                                    color: '#fff'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600 }}>Tell Us About Your Interest</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                                placeholder="Tell us about your goals, experience, or questions about the program..."
                                style={{
                                    width: '100%',
                                    padding: '12px 14px',
                                    borderRadius: '2px',
                                    border: '1px solid #9ca3af',
                                    background: 'rgba(17,24,39,0.85)',
                                    color: '#fff',
                                    resize: 'vertical'
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <button
                                type="submit"
                                disabled={loading}
                                style={{
                                    background: '#0ea5e9',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '14px 32px',
                                    borderRadius: '999px',
                                    fontWeight: 700,
                                    fontSize: '1.05rem',
                                    cursor: loading ? 'not-allowed' : 'pointer',
                                    opacity: loading ? 0.7 : 1,
                                    transition: 'all 0.2s'
                                }}
                            >
                                {loading ? 'Submitting...' : 'Apply Now'}
                            </button>
                            <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                                or call us at <a href="tel:+12487959750" style={{ color: '#0ea5e9', textDecoration: 'underline' }}>+1 (248) 795-9750</a>
                            </span>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Enquiry;
