import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

interface Classification {
    label: string;
    description: string;
    riskLevel: string;
    leakage: string;
    leakageLabel: string;
}

interface ResultsSectionProps {
    totalScore: number;
    maturity: Classification;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ totalScore, maturity }) => {
    return (
        <section style={{ padding: '10rem 0' }}>
            <div className="premium-container">
                <div
                    className="glass-card"
                    style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
                >
                    {/* Total Score Display */}
                    <p
                        style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            marginBottom: '0.5rem',
                        }}
                    >
                        Maximum Score: 125
                    </p>
                    <h2
                        className="gold-gradient-text"
                        style={{ fontSize: '4.5rem', marginBottom: '0.5rem', lineHeight: 1 }}
                    >
                        {totalScore}
                    </h2>
                    <p
                        style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                        }}
                    >
                        Total Audit Score
                    </p>

                    {/* Maturity Classification */}
                    <div style={{ marginBottom: '4rem' }}>
                        <span className={`maturity-badge badge-${maturity.label.toLowerCase().replace('-', '-')}`}>
                            {maturity.label}
                        </span>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            {maturity.label} Maturity
                        </h3>
                        <p
                            style={{
                                fontSize: '1.3rem',
                                color: 'var(--text-secondary)',
                                maxWidth: '700px',
                                margin: '0 auto',
                            }}
                        >
                            {maturity.description}
                        </p>
                    </div>

                    {/* Risk & Impact Cards */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2rem',
                            marginBottom: '4rem',
                        }}
                    >
                        <div
                            style={{
                                padding: '2rem',
                                border: '1px solid var(--border-color)',
                                borderRadius: '12px',
                            }}
                        >
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                Risk Level
                            </p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>{maturity.riskLevel}</p>
                        </div>
                        <div
                            style={{
                                padding: '2rem',
                                border: '1px solid var(--border-color)',
                                borderRadius: '12px',
                            }}
                        >
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                {maturity.leakageLabel}
                            </p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>{maturity.leakage}</p>
                        </div>
                    </div>

                    {/* What Your Score Really Means */}
                    <div
                        style={{
                            background: 'rgba(212, 175, 55, 0.06)',
                            padding: '3rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            textAlign: 'left',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '2rem',
                                marginBottom: '2rem',
                                textAlign: 'center',
                            }}
                        >
                            What Your Score Really Means
                        </h3>

                        {totalScore < 85 && (
                            <div style={{ marginBottom: '2rem' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    <AlertCircle color="var(--accent-gold)" size={22} />
                                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                                        If you scored below 85, you are likely experiencing:
                                    </p>
                                </div>
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: '0 0 0 2.25rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.6rem',
                                    }}
                                >
                                    {[
                                        'Revenue delay leakage',
                                        'Hidden compliance exposure',
                                        'Inefficient operational overhead',
                                        'Data blind spots at board level',
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                fontSize: '1.05rem',
                                                color: 'var(--text-secondary)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                            }}
                                        >
                                            <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {totalScore < 65 && (
                            <div
                                style={{
                                    padding: '1.25rem 1.5rem',
                                    background: 'var(--accent-gold-soft)',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(212, 175, 55, 0.15)',
                                    marginBottom: '2rem',
                                }}
                            >
                                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                                    ⚠ If you scored below 65: Your portfolio is at structural digital risk.
                                </p>
                            </div>
                        )}

                        {totalScore >= 85 && (
                            <div style={{ marginBottom: '2rem' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    <CheckCircle color="var(--accent-gold)" size={22} />
                                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                                        Strong digital foundation
                                    </p>
                                </div>
                                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginLeft: '2.25rem' }}>
                                    You have a solid digital foundation, but there are still opportunities
                                    to reach REIT-standard institutional automation and real-time portfolio
                                    visibility.
                                </p>
                            </div>
                        )}

                        {/* CTA */}
                        <div
                            style={{
                                padding: '2.5rem',
                                background: '#fff',
                                borderRadius: '12px',
                                marginTop: '2rem',
                                marginBottom: '2.5rem',
                                border: '1px solid var(--border-color)',
                                textAlign: 'center',
                            }}
                        >
                            <h4
                                className="gold-gradient-text"
                                style={{ fontSize: '1.5rem', marginBottom: '1rem' }}
                            >
                                Want a Confidential Executive Benchmark Review?
                            </h4>
                            <p
                                style={{
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1.5rem',
                                    fontSize: '1.05rem',
                                }}
                            >
                                WowRealty offers a complimentary <strong>Portfolio Digital Maturity Briefing</strong>
                            </p>
                            <p
                                style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    marginBottom: '0.5rem',
                                    fontWeight: 600,
                                }}
                            >
                                Includes:
                            </p>
                            <ul
                                style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem',
                                    alignItems: 'center',
                                }}
                            >
                                {[
                                    'Executive score interpretation',
                                    'Blind spot analysis',
                                    'Risk exposure mapping',
                                    '90-day digital stabilization roadmap',
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            fontSize: '0.95rem',
                                            color: 'var(--text-primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                        }}
                                    >
                                        <CheckCircle color="var(--accent-gold)" size={16} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <a
                                href="https://calendly.com/shri_harsha/letstalk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{ textDecoration: 'none' }}
                            >
                                Book My Executive Review <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsSection;
