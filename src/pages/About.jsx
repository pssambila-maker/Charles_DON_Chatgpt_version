import { Phone, MapPin } from 'lucide-react';

const featureCards = [
    {
        number: '01.',
        title: 'Leadership Development',
        body: 'Building confidence, communication, and influence to guide diverse teams effectively.'
    },
    {
        number: '02.',
        title: 'Clinical & Regulatory Mastery',
        body: 'Equipping DONs with up-to-date knowledge of CMS standards, state regulations, and best practices in care delivery.'
    },
    {
        number: '03.',
        title: 'Operational Excellence',
        body: 'Teaching proven strategies in staffing, budgeting, and workflow optimization for consistent, efficient performance.'
    },
    {
        number: '04.',
        title: 'Quality & Compliance Training',
        body: 'Focusing on patient outcomes, safety, and survey readiness.'
    },
    {
        number: '05.',
        title: 'Mentorship & Professional Growth',
        body: 'Providing real-world insight, peer collaboration, and tools to advance career success.'
    },
    {
        number: '06.',
        title: 'Quality & Compliance Training',
        body: "At NDA, we don't just teach management - we cultivate leadership that inspires change, improves care, and uplifts teams. Our graduates leave ready to lead with integrity, compassion, and data-driven confidence, transforming the future of nursing home administration one leader at a time."
    }
];

const About = () => {
    return (
        <div className="pt-20" style={{ background: '#0b1222', color: '#f8fafc' }}>
            {/* Hero */}
            <section style={{ background: 'var(--primary)', position: 'relative', padding: '90px 0' }}>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                    <h1 style={{ fontSize: '2.8rem', color: '#fff', fontFamily: 'var(--font-heading)' }}>About Us</h1>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        right: '-12%',
                        top: '-10%',
                        width: '40%',
                        height: '200%',
                        borderRadius: '999px',
                        background: 'rgba(255,255,255,0.08)'
                    }}
                />
            </section>

            {/* Mission */}
            <section style={{ background: '#111827', padding: '80px 0' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '2.5rem', alignItems: 'center' }}>
                    <div
                        style={{
                            background: '#111827',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.25)'
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                            alt="Healthcare technology and nursing leadership"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#e5e7eb', fontFamily: 'var(--font-heading)' }}>Mission Statement</h2>
                        <p style={{ color: '#e5e7eb', lineHeight: 1.8, fontWeight: 600, maxWidth: '720px' }}>
                            To empower current and aspiring Directors of Nursing with the leadership, clinical expertise, and operational excellence needed to elevate the standard of care in long-term and
                            post-acute settings.
                        </p>
                        <p style={{ color: '#e5e7eb', lineHeight: 1.8, fontWeight: 600, marginTop: '1.25rem', maxWidth: '720px' }}>
                            We are committed to shaping visionary nurse leaders who drive quality, compassion, and compliance at every level of care delivery.
                        </p>
                    </div>
                </div>
            </section>

            {/* Goal */}
            <section style={{ background: 'var(--bg-magenta)', padding: '90px 0' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '2.5rem', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ color: '#1d4ed8', fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>Goal</h3>
                        <p style={{ color: '#f1f5f9', lineHeight: 1.8, fontWeight: 600, maxWidth: '740px' }}>
                            Our goal is to cultivate a new generation of nurse leaders who blend clinical mastery with strategic management. Through evidence-based training, mentorship, and real-world
                            application, we prepare DONs to lead confidently, improve outcomes, and foster positive, high-performing teams in every healthcare environment.
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="/advance.png"
                            alt="Goal"
                            style={{ width: '100%', maxWidth: '460px', borderRadius: '12px', boxShadow: '0 15px 35px rgba(0,0,0,0.25)', background: '#fff' }}
                        />
                    </div>
                </div>
            </section>

            {/* Who we are */}
            <section style={{ background: '#f8fafc', color: '#0f172a', padding: '90px 0' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '1100px' }}>
                    <h3 style={{ color: '#1d4ed8', fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>Who We Are & What We Do</h3>
                    <p style={{ margin: '1.5rem auto 2.5rem', color: '#111827', fontSize: '1.05rem', lineHeight: 1.7 }}>
                        At NextGen DON Academy, we believe that exceptional leadership transforms care. We are a specialized training institute designed exclusively for Directors of Nursing - both new and
                        seasoned - who seek to grow beyond routine management into inspired, strategic leadership.
                    </p>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '1.25rem',
                            marginBottom: '2rem'
                        }}
                    >
                        {featureCards.map((card) => (
                            <div
                                key={card.number + card.title}
                                style={{
                                    background: '#0b1222',
                                    color: '#e5e7eb',
                                    padding: '1.75rem',
                                    borderRadius: '10px',
                                    textAlign: 'left',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.12)'
                                }}
                            >
                                <div style={{ color: '#1d4ed8', fontWeight: 700, marginBottom: '0.75rem' }}>{card.number}</div>
                                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>{card.title}</h4>
                                <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.95rem', fontWeight: 500 }}>{card.body}</p>
                            </div>
                        ))}
                    </div>
                    <a
                        href="/enquiry"
                        className="btn btn-primary"
                        style={{ display: 'inline-flex', padding: '12px 20px', fontSize: '0.95rem', borderRadius: '999px' }}
                    >
                        Make Enquiry
                    </a>
                </div>
            </section>

            {/* Professional block */}
            <section style={{ background: 'var(--bg-magenta)', padding: '100px 0' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2.5rem', alignItems: 'center' }}>
                    <div>
                        <h4 style={{ color: '#1d4ed8', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>Professional & Vision-Driven</h4>
                        <h3 style={{ color: '#f8fafc', fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem' }}>Committed to the Excellence</h3>
                        <div style={{ color: '#f8fafc', lineHeight: 1.8, fontWeight: 700, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <p>
                                At NextGen DON Academy (NDA), we are redefining what it means to lead in long-term care. Founded with a passion for nursing excellence, NDA equips current and aspiring
                                Directors of Nursing with the skills, knowledge, and confidence to thrive in today's complex healthcare environment.
                            </p>
                            <p>
                                Our specialized programs focus on leadership development, clinical and regulatory excellence, operational management, and staff empowerment - the core qualities of a successful
                                DON. Whether you're stepping into leadership for the first time or looking to elevate your existing role, NDA provides the guidance, mentorship, and real-world tools to help you
                                lead with purpose, integrity, and impact.
                            </p>
                            <p>We don't just build managers - we cultivate compassionate leaders who inspire teams, elevate care, and shape the future of nursing home excellence.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="/advance1.png"
                            alt="Clinical professional at work"
                            style={{ width: '100%', maxWidth: '420px', borderRadius: '12px', boxShadow: '0 15px 35px rgba(0,0,0,0.25)' }}
                        />
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section style={{ background: 'var(--primary)', color: '#fff', padding: '26px 0' }}>
                <div
                    className="container"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1.5rem',
                        alignItems: 'center'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 700 }}>
                        <Phone />
                        <div>
                            <div>Call Today</div>
                            <div style={{ fontWeight: 800 }}>+123 456 7890</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 700 }}>
                        <MapPin />
                        <div>
                            <div>123 Fifth Ave, New York, NY</div>
                            <div>12004, USA.</div>
                        </div>
                    </div>
                    <div style={{ fontWeight: 800 }}>Schedule a Virtual Appointment</div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <a
                            href="/enquiry"
                            className="btn"
                            style={{
                                background: '#fff',
                                color: 'var(--primary)',
                                fontWeight: 700,
                                borderRadius: '999px',
                                padding: '10px 18px'
                            }}
                        >
                            Schedule Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Map */}
            <section style={{ background: '#111827', padding: '0', overflow: 'hidden' }}>
                <iframe
                    title="NDA Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.83323549276!2d-0.1320036590756425!3d51.50330079343668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c0f4835d2b%3A0xccf4e63fc0db6f94!2sLondon%20Eye!5e0!3m2!1sen!2sus!4v1701354041000!5m2!1sen!2sus"
                    width="100%"
                    height="360"
                    style={{ border: 0, display: 'block', margin: '0 auto' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </div>
    );
};

export default About;
