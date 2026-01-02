import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Mitchell, RN, DON",
            facility: "Sunrise Senior Living, Michigan",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "This program transformed my leadership approach. I went from feeling overwhelmed to confidently leading a team of 45 nurses. The regulatory compliance training alone was worth it!",
            rating: 5
        },
        {
            name: "Marcus Johnson, BSN, ADON",
            facility: "Oakwood Care Center, Ohio",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "As an aspiring DON, this certification gave me the tools and confidence I needed. Within 3 months of graduation, I was promoted to Director of Nursing. Best investment in my career!",
            rating: 5
        },
        {
            name: "Jennifer Rodriguez, MSN, DON",
            facility: "Heritage Health Network, Florida",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            text: "The quality improvement strategies I learned here helped us achieve a 5-star CMS rating. The instructors understand real-world challenges in long-term care facilities.",
            rating: 5
        }
    ];

    return (
        <section style={{ background: '#0f172a', padding: '80px 0', color: 'white' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h4 style={{
                        color: '#0ea5e9',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        marginBottom: '1rem',
                        fontSize: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        SUCCESS STORIES
                    </h4>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)',
                        lineHeight: '1.2'
                    }}>
                        What Our Graduates Say
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Join hundreds of nursing leaders who have transformed their careers
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            style={{
                                background: '#1e293b',
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                position: 'relative',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Quote Icon */}
                            <Quote
                                size={40}
                                style={{
                                    color: '#0ea5e9',
                                    opacity: 0.3,
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem'
                                }}
                            />

                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p style={{
                                color: '#e5e7eb',
                                fontSize: '1rem',
                                lineHeight: '1.6',
                                marginBottom: '1.5rem',
                                fontStyle: 'italic'
                            }}>
                                "{testimonial.text}"
                            </p>

                            {/* Author Info */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        border: '2px solid #0ea5e9'
                                    }}
                                />
                                <div>
                                    <h4 style={{
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        marginBottom: '0.25rem',
                                        color: 'white'
                                    }}>
                                        {testimonial.name}
                                    </h4>
                                    <p style={{
                                        fontSize: '0.85rem',
                                        color: '#94a3b8'
                                    }}>
                                        {testimonial.facility}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    padding: '3rem 0',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center'
                }}>
                    <div>
                        <h3 style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: '#0ea5e9',
                            marginBottom: '0.5rem',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            500+
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                            Certified DONs
                        </p>
                    </div>
                    <div>
                        <h3 style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: '#0ea5e9',
                            marginBottom: '0.5rem',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            95%
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                            Career Advancement
                        </p>
                    </div>
                    <div>
                        <h3 style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: '#0ea5e9',
                            marginBottom: '0.5rem',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            4.9/5
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                            Average Rating
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
