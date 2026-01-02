import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const StickyApplyButton = () => {
    return (
        <Link
            to="/enquiry"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                background: '#0ea5e9',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '50px',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 8px 24px rgba(14, 165, 233, 0.4)',
                zIndex: 999,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(14, 165, 233, 0.5)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(14, 165, 233, 0.4)';
            }}
        >
            Apply Now
            <ArrowRight size={18} />
        </Link>
    );
};

export default StickyApplyButton;
