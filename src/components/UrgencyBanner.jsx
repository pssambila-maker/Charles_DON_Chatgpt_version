import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Clock } from 'lucide-react';

const UrgencyBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                padding: '12px 0',
                position: 'relative',
                zIndex: 998,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        position: 'relative'
                    }}
                >
                    {/* Clock Icon */}
                    <Clock size={20} style={{ flexShrink: 0 }} />

                    {/* Message */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        }}
                    >
                        <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>
                            Spring 2026 Cohort - Enrollment Now Open!
                        </span>
                        <span style={{ fontSize: '0.9rem' }}>
                            Limited to 25 students
                        </span>
                    </div>

                    {/* CTA Button */}
                    <Link
                        to="/enquiry"
                        style={{
                            background: 'white',
                            color: '#d97706',
                            padding: '8px 20px',
                            borderRadius: '20px',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Reserve Your Spot →
                    </Link>

                    {/* Close Button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '4px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        aria-label="Close banner"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Mobile-specific styles */}
            <style>{`
                @media (max-width: 768px) {
                    .container > div {
                        padding: 0 40px;
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    );
};

export default UrgencyBanner;
