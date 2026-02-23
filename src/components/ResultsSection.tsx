import { AlertCircle, CheckCircle } from 'lucide-react';
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
                        className="results-section"
                        id="results-view"
                    >
                        <div className="premium-container">
                            <div className="results-maturity-card glass-card">
                                {/* Total Score Header */}
                                <div className="maturity-score-header">
                                    <p className="maturity-score-eyebrow">
                                        Audit Performance Index
                                    </p>
                                    <div className="maturity-score-display">
                                        <h2 className="maturity-score-value gold-gradient-text serif-number">
                                            {totalScore}
                                        </h2>
                                        <span className="maturity-score-total">
                                            /<span className="serif-number">125</span>
                                        </span>
                                    </div>
                                    <p className="maturity-score-subtitle">
                                        Validated Maturity Score
                                    </p>
                                    <p className="maturity-score-hint" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                                        Maximum Potential Score: <span className="serif-number">125</span>
                                    </p>
                                </div>

                                {/* Maturity Classification */}
                                <div className="maturity-classification-box">
                                    <span className={`maturity-badge badge-${maturity.label.toLowerCase().replace(' ', '-')}`}>
                                        {maturity.label}
                                    </span>
                                    <h3 className="maturity-title">
                                        {maturity.label} Maturity
                                    </h3>
                                    <p className="maturity-description">
                                        {maturity.description}
                                    </p>

                                    {/* Premium Bullets */}
                                    <div className="premium-check-list">
                                        {maturity.bullets.map((bullet, i) => (
                                            <div key={i} className="premium-check-item">
                                                <CheckCircle style={{ color: 'var(--accent-gold)' }} size={16} />
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
                                            <div className="maturity-scale-range serif-number">
                                                {c.min}–{c.max}
                                            </div>
                                            <div className="maturity-scale-label">{c.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Impact Indicators */}
                                <div className="maturity-impact-grid">
                                    <div className="impact-card">
                                        <p className="impact-card-label">Exposure Profile</p>
                                        <p className="impact-card-value">{maturity.riskLevel} Risk</p>
                                    </div>
                                    <div className="impact-card">
                                        <p className="impact-card-label">{maturity.leakageLabel}</p>
                                        <p className="impact-card-value">{maturity.leakage}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section Breakdown */}
                            <div className="section-breakdown-container">
                                <div className="section-breakdown-header-main">
                                    <h3 className="section-breakdown-main-title">Score Breakdown by Category</h3>
                                    <p className="section-breakdown-subtitle">Granular performance analysis across operational pillars</p>
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
                                                    <span className="serif-number">{s.score}</span>
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

                            <div className="impact-analysis-box glass-card">
                                <div className="impact-header-group">
                                    <span className="impact-eyebrow">Strategic Impact Analysis</span>
                                    <h3 className="impact-main-title">Results Interpretation</h3>
                                </div>

                                <div className="impact-analysis-content">
                                    {totalScore < 85 ? (
                                        <div className="impact-risk-warning">
                                            <div className="impact-warning-header">
                                                <p className="impact-warning-eyebrow">
                                                    If you scored below <span className="serif-number">85</span>:
                                                </p>
                                                <h4 className="impact-warning-title">You are likely experiencing:</h4>
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
                                                            <AlertCircle size={20} />
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
                                                <CheckCircle size={32} />
                                            </motion.div>
                                            <h4 className="maturity-title" style={{ marginTop: 0 }}>Institutional readiness confirmed</h4>
                                            <p className="maturity-description">
                                                Your infrastructure demonstrates a high level of digital maturity. To reach elite REIT-standard performance, focus on refining real-time automation and predictive portfolio analytics.
                                            </p>
                                        </div>
                                    )}

                                    {totalScore < 65 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="impact-risk-notice critical"
                                        >
                                            <p className="impact-risk-label">
                                                If you scored below <span className="serif-number">65</span>:
                                            </p>
                                            <p className="impact-risk-message">
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
        </>
    );
};

export default ResultsSection;
