import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

const ProgramSection = () => {
    const [openWeek, setOpenWeek] = useState(1);

    const toggleWeek = (week) => {
        setOpenWeek(openWeek === week ? null : week);
    };

    return (
        <section className="section" style={{ background: '#0f172a', color: 'white' }}>
            <div className="container">

                {/* PART 1: Intro */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem', alignItems: 'center' }}>
                    <div>
                        <div style={{
                            width: '100%',
                            height: '400px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            backgroundImage: 'url(/advance1.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}></div>
                    </div>
                    <div>
                        <h4 style={{ color: '#0ea5e9', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1rem', fontSize: '1.2rem' }}>PROGRAMS</h4>
                        <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                            Director of Nursing Leadership Certification Program
                        </h2>
                        <p style={{ color: '#e5e7eb', fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '2rem', fontWeight: '500' }}>
                            A 4-week professional development course designed to elevate DONs, ADONs, nurse managers and aspiring nurse leaders into confident, compliant and strategic healthcare administrators.
                        </p>
                        <Link to="/program" className="btn btn-primary" style={{ background: '#0ea5e9', display: 'inline-block' }}>
                            View Program Details
                        </Link>
                    </div>
                </div>

                {/* PART 2: Why Choose - Grid */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '3rem', fontFamily: 'var(--font-heading)' }}>Why Choose NextGen DON Academy</h3>
                    <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {[
                            { title: 'Leadership Development', desc: 'Grow into a confident and effective nursing leader who inspires teams and drives results.' },
                            { title: 'Recognized Certification', desc: 'Graduate with a professional DON Leadership Certificate that validates your expertise.' },
                            { title: 'Operational Excellence', desc: 'Gain practical skills in staffing, scheduling, budgeting, and workflow optimization.' },
                            { title: 'Quality Improvement Training', desc: 'Learn how to use data, audits, and metrics to improve patient care outcomes.' },
                            { title: 'Staff Development & Retention', desc: 'Build strong, high-performing nursing teams & create a culture of trust & accountability.' },
                            { title: 'Regulatory & Compliance Mastery', desc: 'Understand CMS standards, survey readiness, and best practices.' }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                background: '#1e293b',
                                padding: '2rem',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                textAlign: 'center'
                            }}>
                                <h4 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem' }}>{item.title}</h4>
                                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PART 3: Curriculum & Outcome */}
                <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '0' }}>
                    <div style={{
                        background: '#1e293b',
                        border: '1px solid #334155'
                    }}>
                        {[1, 2, 3, 4].map((week) => (
                            <div key={week} style={{ borderBottom: '1px solid #334155' }}>
                                <button
                                    onClick={() => toggleWeek(week)}
                                    style={{
                                        width: '100%',
                                        padding: '1.5rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'transparent',
                                        color: 'white',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left'
                                    }}
                                >
                                    <span style={{ fontWeight: 'bold' }}>Week {week} {week === 1 && '- Foundations of DON Leadership'}</span>
                                    {openWeek === week ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                {openWeek === week && (
                                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#cbd5e1', fontSize: '0.95rem' }}>
                                        <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>Theme: Understanding the Role & Power of the DON</p>
                                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <li>Defining the modern DON's role in long-term care</li>
                                            <li>Leadership styles and emotional intelligence</li>
                                            <li>Building credibility and leading with integrity</li>
                                            <li>Establishing a leadership vision and culture of care</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div style={{
                        background: '#0ea5e9',
                        padding: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Certification Outcome</h3>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
                            Graduates of NextGen DON Academy will demonstrate excellence in clinical, operational, and leadership competencies. Lead with confidence, empathy, and regulatory precision. Create positive vs. compliant, high-performing nursing teams. Be recognized as NextGen Certified Directors of Nursing - ready to transform care in any setting.
                        </p>
                        <Link to="/enquiry" style={{
                            background: 'white',
                            color: '#0ea5e9',
                            padding: '12px 24px',
                            borderRadius: '50px',
                            border: 'none',
                            fontWeight: 'bold',
                            alignSelf: 'flex-start',
                            cursor: 'pointer',
                            display: 'inline-block',
                            textDecoration: 'none'
                        }}>
                            Start Your Journey Today
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProgramSection;
