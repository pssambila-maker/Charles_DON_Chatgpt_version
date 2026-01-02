import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', height: '100%', position: 'relative', zIndex: 10 }}>

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'left' }}
                >
                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', color: 'white', marginBottom: '1.5rem' }}>
                        Advancing Leadership.<br />
                        Elevating Care.
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255, 0.95)', marginBottom: '2.5rem', maxWidth: '520px', fontWeight: '500', lineHeight: '1.6' }}>
                        At NextGen DON Academy, we prepare current and aspiring Directors of Nursing (DONs) to lead with confidence, compassion and excellence - giving you the tools to succeed in today's evolving healthcare landscape.
                    </p>
                    <Link to="/enquiry" className="btn" style={{ background: '#f59e0b', color: 'white', padding: '14px 32px', fontSize: '1.1rem', borderRadius: '50px', border: 'none' }}>
                        Enrol Now
                    </Link>
                </motion.div>

                {/* Right Column: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <div style={{
                        width: '100%',
                        height: '500px',
                        background: '#ccc',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}>
                        <img
                            src="/advance.png"
                            alt="Nursing leadership at NextGen DON Academy"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Background Curve/Shape roughly matching design (optional, simple CSS) */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '40%',
                background: 'rgba(255,255,255,0.05)',
                borderTopLeftRadius: '100%',
                borderBottomLeftRadius: '50%',
                pointerEvents: 'none'
            }}></div>
        </section>
    );
};

export default Hero;
