import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { classifications } from '../auditData';

interface Classification {
    label: string;
    description: string;
    bullets: string[];
    riskLevel: string;
    leakage: string;
    leakageLabel: string;
}

interface SectionScore {
    id: string;
    title: string;
    score: number;
    maxScore: number;
}

interface ResultsSectionProps {
    totalScore: number;
    maturity: Classification;
    showResults: boolean;
    sectionScores: SectionScore[];
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ totalScore, maturity, showResults, sectionScores }) => {
    return (
        <>
            {/* Score + Maturity + Section Breakdown — conditional */}
            <AnimatePresence>
                {showResults && (
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{ padding: '6rem 0 4rem' }}
                        id="results-view"
                    >
                        <div className="premium-container">
                            <div className="results-maturity-card">
                                {/* Total Score Header */}
                                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                    <p style={{
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.2em',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        marginBottom: '1rem'
                                    }}>
                                        Audit Performance Index
                                    </p>
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <h2 className="gold-gradient-text" style={{
                                            fontSize: '6.5rem',
                                            lineHeight: 1,
                                            marginBottom: '0.5rem',
                                            fontFamily: 'var(--font-display)',
                                            fontWeight: 700,
                                            letterSpacing: '-0.02em'
                                        }}>
                                            {totalScore}
                                        </h2>
                                        <span style={{
                                            position: 'absolute',
                                            bottom: '1.2rem',
                                            right: '-3.5rem',
                                            fontSize: '1.2rem',
                                            color: 'var(--text-secondary)',
                                            fontWeight: 700,
                                            opacity: 0.4,
                                            letterSpacing: '0.05em'
                                        }}>
                                            /125
                                        </span>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.02em' }}>
                                        Validated Maturity Score
                                    </p>
                                </div>

                                {/* Maturity Classification */}
                                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                    <span className={`maturity-badge badge-${maturity.label.toLowerCase().replace(' ', '-')}`}>
                                        {maturity.label}
                                    </span>
                                    <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                                        {maturity.label} Maturity
                                    </h3>
                                    <p style={{
                                        fontSize: '1.25rem',
                                        color: 'var(--text-secondary)',
                                        maxWidth: '800px',
                                        margin: '0 auto',
                                        lineHeight: 1.7,
                                        fontWeight: 400
                                    }}>
                                        {maturity.description}
                                    </p>

                                    {/* Premium Bullets */}
                                    <div className="premium-check-list">
                                        {maturity.bullets.map((bullet, i) => (
                                            <div key={i} className="premium-check-item">
                                                <CheckCircle style={{ color: 'var(--accent-gold)' }} size={18} />
                                                <span>{bullet}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Maturity Scale Visual */}
                                <div className="maturity-scale-visual">
                                    {classifications.map((c, i) => (
                                        <div
                                            key={i}
                                            className={`maturity-scale-bar ${c.label === maturity.label ? 'maturity-scale-bar--active' : ''}`}
                                            style={{ height: `${20 + (i + 1) * 20}%` }}
                                        >
                                            <div className="maturity-scale-range">
                                                {c.min}–{c.max}
                                            </div>
                                            <div className="maturity-scale-label">{c.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Impact Indicators */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '4rem' }}>
                                    <div className="impact-card">
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', opacity: 0.6 }}>
                                            Exposure Profile
                                        </p>
                                        <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{maturity.riskLevel} Risk</p>
                                    </div>
                                    <div className="impact-card">
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', opacity: 0.6 }}>
                                            {maturity.leakageLabel}
                                        </p>
                                        <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{maturity.leakage}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section Breakdown */}
                            <div style={{ marginTop: '5rem' }}>
                                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Score Breakdown by Category</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>Granular performance analysis across operational pillars</p>
                                </div>
                                <div className="section-breakdown-grid">
                                    {sectionScores.map((s, i) => (
                                        <motion.div
                                            key={s.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                            className="section-breakdown-card"
                                        >
                                            <div className="section-breakdown-header">
                                                <span className="section-breakdown-title">{s.title}</span>
                                                <div className="section-breakdown-score">
                                                    <span>{s.score}</span>
                                                    <span className="section-breakdown-max">/{s.maxScore}</span>
                                                </div>
                                            </div>
                                            <div className="premium-progress">
                                                <motion.div
                                                    className="premium-progress-fill"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${(s.score / s.maxScore) * 100}%` }}
                                                    transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Narrative Analysis — Strictly Verbatim Content, Enhanced Styles */}
                            <div className="impact-analysis-box">
                                <div className="impact-header-group">
                                    <span className="impact-eyebrow">Strategic Impact Analysis</span>
                                    <h3 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Results Interpretation</h3>
                                </div>

                                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                                    {totalScore < 85 ? (
                                        <div style={{ marginBottom: '4rem' }}>
                                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                                    If you scored below 85:
                                                </p>
                                                <h4 style={{ fontSize: '1.75rem', fontWeight: 700 }}>You are likely experiencing:</h4>
                                            </div>

                                            <div className="impact-grid">
                                                {[
                                                    'Revenue delay leakage',
                                                    'Hidden compliance exposure',
                                                    'Inefficient operational overhead',
                                                    'Data blind spots at board level',
                                                ].map((item, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                                        className="impact-observation-card"
                                                    >
                                                        <div className="impact-card-icon">
                                                            <AlertCircle size={24} />
                                                        </div>
                                                        <div className="impact-card-content">
                                                            {item}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="impact-celebration-box">
                                            <motion.div
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                className="impact-celebration-icon"
                                            >
                                                <CheckCircle size={40} />
                                            </motion.div>
                                            <h4 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem' }}>Institutional readiness confirmed</h4>
                                            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
                                                Your infrastructure demonstrates a high level of digital maturity. To reach elite REIT-standard performance, focus on refining real-time automation and predictive portfolio analytics.
                                            </p>
                                        </div>
                                    )}

                                    {totalScore < 65 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="impact-risk-notice"
                                        >
                                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                                                If you scored below 65:
                                            </p>
                                            <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#92400e', margin: 0 }}>
                                                Your portfolio is at structural digital risk.
                                            </p>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* CTA Section — always visible */}
            <section style={{ padding: '4rem 0 8rem' }}>
                <div className="premium-container">
                    <div className="cta-box">
                        <h4 className="gold-gradient-text" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Want a Confidential Executive Benchmark Review?
                        </h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 1rem' }}>
                            WowRealty offers a complimentary:
                        </p>
                        <h5 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '1.5rem' }}>Portfolio Digital Maturity Briefing</h5>
                        <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '1.5rem' }}>Includes:</p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '3rem', maxWidth: '900px', margin: '0 auto 3rem' }}>
                            {[
                                'Executive score interpretation',
                                'Blind spot analysis',
                                'Risk exposure mapping',
                                '90-day digital stabilization roadmap',
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', background: '#ffffff', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                    <CheckCircle color="var(--accent-gold)" size={18} />
                                    <span style={{ textAlign: 'left' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://calendly.com/shri_harsha/letstalk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ textDecoration: 'none', padding: '1.25rem 3rem' }}
                        >
                            Book My Executive Review <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResultsSection;
