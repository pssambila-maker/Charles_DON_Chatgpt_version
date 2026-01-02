const weeks = [
    {
        label: 'WEEK 1',
        title: 'Foundations of DON Leadership',
        theme: 'Understanding the Role & Power of the DON',
        focus: 'Leadership identity, professional accountability, and the impact of the DON on care quality.'
    },
    {
        label: 'WEEK 2',
        title: 'Clinical & Regulatory Mastery',
        theme: 'Ensuring Safe, Compliant, High-Quality Care',
        focus: 'Deep dive into compliance standards and quality assurance.'
    },
    {
        label: 'WEEK 3',
        title: 'Data-Driven Quality Improvement',
        theme: 'Turning Data into Action',
        focus: 'Using metrics and reports to improve outcomes and drive decisions.'
    },
    {
        label: 'WEEK 4',
        title: 'Strategic Leadership & Change Management',
        theme: 'Leading Change in a Complex Healthcare Environment',
        focus: 'Managing transitions, innovation, and organizational culture.'
    }
];

const Program = () => {
    return (
        <div className="pt-20" style={{ background: '#101827', color: '#e5e7eb' }}>
            {/* Hero */}
            <section style={{ background: 'var(--primary)', padding: '70px 0', position: 'relative' }}>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)', color: '#fff' }}>Our Programs</h1>
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

            {/* Program Grid */}
            <section style={{ background: '#111827', padding: '90px 0 110px' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <h2 style={{ fontSize: '1.7rem', color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
                            4-Week Director of Nursing Leadership Certification Program
                        </h2>
                    </div>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
                            gap: '3.5rem 2.5rem',
                            justifyItems: 'center'
                        }}
                    >
                        {weeks.map((week) => (
                            <div key={week.label} style={{ maxWidth: '520px', width: '100%' }}>
                                <div
                                    style={{
                                        background: '#f4f4f5',
                                        color: '#0f172a',
                                        border: '1px solid #d4d4d8',
                                        borderRadius: '4px',
                                        height: '420px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '18px'
                                    }}
                                >
                                    <span style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: '0.01em' }}>{week.label}</span>
                                </div>

                                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '8px', color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>
                                    {week.title}
                                </h3>
                                <p style={{ fontSize: '0.92rem', marginBottom: '6px', color: '#e5e7eb' }}>
                                    <strong>Theme:</strong> {week.theme}
                                </p>
                                <p style={{ fontSize: '0.92rem', color: '#d1d5db', lineHeight: 1.7 }}>
                                    <strong>Focus:</strong> {week.focus}
                                </p>
                                <a
                                    href="/enquiry"
                                    style={{
                                        display: 'inline-block',
                                        marginTop: '14px',
                                        background: '#0ea5e9',
                                        color: '#fff',
                                        padding: '10px 18px',
                                        borderRadius: '999px',
                                        fontSize: '0.9rem',
                                        fontWeight: 700
                                    }}
                                >
                                    Read More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Program;
