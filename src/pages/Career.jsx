import { Link } from 'react-router-dom';
import { Briefcase, TrendingUp, Award, Users } from 'lucide-react';

const Career = () => {
    const careerPaths = [
        {
            title: "Director of Nursing (DON)",
            description: "Lead nursing operations in long-term care facilities, hospitals, or healthcare systems.",
            salary: "$85,000 - $120,000/year",
            icon: <Briefcase size={32} color="#0ea5e9" />
        },
        {
            title: "Assistant Director of Nursing (ADON)",
            description: "Support DON in managing day-to-day clinical operations and staff development.",
            salary: "$70,000 - $95,000/year",
            icon: <Users size={32} color="#0ea5e9" />
        },
        {
            title: "Nurse Manager / Unit Manager",
            description: "Oversee specific units or departments with direct patient care responsibilities.",
            salary: "$75,000 - $100,000/year",
            icon: <TrendingUp size={32} color="#0ea5e9" />
        },
        {
            title: "Quality Improvement Director",
            description: "Lead quality assurance programs and regulatory compliance initiatives.",
            salary: "$80,000 - $110,000/year",
            icon: <Award size={32} color="#0ea5e9" />
        }
    ];

    return (
        <div className="pt-20" style={{ background: '#020617', minHeight: '100vh', color: '#e5e7eb' }}>
            {/* Hero Section */}
            <section
                style={{
                    position: 'relative',
                    padding: '80px 0',
                    backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(2, 6, 23, 0.85)'
                    }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', textAlign: 'center' }}>
                    <h1
                        style={{
                            color: '#fff',
                            fontFamily: 'var(--font-heading)',
                            fontSize: '3rem',
                            marginBottom: '1.5rem'
                        }}
                    >
                        Advance Your Nursing Career
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 2rem' }}>
                        Transform from a staff nurse to a confident healthcare leader with our DON Leadership Certification
                    </p>
                    <Link
                        to="/enquiry"
                        className="btn btn-primary"
                        style={{
                            background: '#0ea5e9',
                            color: 'white',
                            padding: '14px 32px',
                            borderRadius: '50px',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            display: 'inline-block',
                            textDecoration: 'none'
                        }}
                    >
                        Start Your Journey
                    </Link>
                </div>
            </section>

            {/* Career Paths Section */}
            <section style={{ padding: '80px 0', background: '#0f172a' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '1rem',
                            color: 'white'
                        }}>
                            Career Opportunities After Certification
                        </h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Our graduates pursue leadership roles across various healthcare settings
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {careerPaths.map((path, index) => (
                            <div
                                key={index}
                                style={{
                                    background: '#1e293b',
                                    padding: '2rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ marginBottom: '1.5rem' }}>
                                    {path.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 'bold',
                                    marginBottom: '1rem',
                                    color: 'white'
                                }}>
                                    {path.title}
                                </h3>
                                <p style={{
                                    color: '#94a3b8',
                                    marginBottom: '1rem',
                                    lineHeight: '1.6'
                                }}>
                                    {path.description}
                                </p>
                                <div style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    color: '#0ea5e9'
                                }}>
                                    {path.salary}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Invest Section */}
            <section style={{ padding: '80px 0', background: '#020617' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontFamily: 'var(--font-heading)',
                                marginBottom: '1.5rem',
                                color: 'white'
                            }}>
                                Why Invest in DON Leadership Certification?
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Average 25-35% salary increase after certification",
                                    "Leadership skills that set you apart from peers",
                                    "Network with 500+ certified nursing leaders",
                                    "Recognized certification valued by employers nationwide",
                                    "4-week fast-track program fits your schedule",
                                    "Lifetime access to resources and community"
                                ].map((benefit, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            padding: '1rem 0',
                                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '1rem'
                                        }}
                                    >
                                        <span style={{
                                            color: '#0ea5e9',
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold'
                                        }}>
                                            ✓
                                        </span>
                                        <span style={{ color: '#e5e7eb', fontSize: '1rem' }}>
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{
                            background: '#1e293b',
                            padding: '3rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <h3 style={{
                                fontSize: '1.8rem',
                                marginBottom: '1.5rem',
                                color: 'white'
                            }}>
                                Ready to Lead?
                            </h3>
                            <p style={{
                                color: '#94a3b8',
                                marginBottom: '2rem',
                                lineHeight: '1.6'
                            }}>
                                Join our next cohort and take the first step toward becoming a certified Director of Nursing. Limited spots available!
                            </p>
                            <Link
                                to="/enquiry"
                                className="btn"
                                style={{
                                    background: '#0ea5e9',
                                    color: 'white',
                                    padding: '14px 32px',
                                    borderRadius: '50px',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    display: 'inline-block',
                                    textDecoration: 'none',
                                    width: '100%',
                                    textAlign: 'center'
                                }}
                            >
                                Apply Now
                            </Link>
                            <p style={{
                                textAlign: 'center',
                                marginTop: '1rem',
                                fontSize: '0.9rem',
                                color: '#94a3b8'
                            }}>
                                or call <a href="tel:+12487959750" style={{ color: '#0ea5e9' }}>+1 (248) 795-9750</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;
