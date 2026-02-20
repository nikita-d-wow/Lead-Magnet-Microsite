import { motion } from 'framer-motion';
import { CheckCircle, Layers, HelpCircle, SlidersHorizontal, Award } from 'lucide-react';

const features = [
    { icon: <Layers size={28} />, label: '5 Sections' },
    { icon: <HelpCircle size={28} />, label: '25 Questions' },
    { icon: <SlidersHorizontal size={28} />, label: 'Self-scoring framework' },
    { icon: <Award size={28} />, label: 'Instant maturity classification' },
];

const scoringLegend = [
    { score: '1', label: 'Not in place' },
    { score: '2', label: 'Ad hoc' },
    { score: '3', label: 'Partially structured' },
    { score: '4', label: 'Fully structured' },
    { score: '5', label: 'Institutional & automated' },
];

const HowItWorks = () => {
    return (
        <section className="how-section">
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="how-header"
                >
                    <span className="how-eyebrow">The Process</span>
                    <h2 className="how-title">
                        How It <span className="gold-gradient-text">Works</span>
                    </h2>
                </motion.div>

                {/* Feature Cards */}
                <div className="how-features">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="how-feature-card"
                        >
                            <div className="how-feature-icon">{item.icon}</div>
                            <h4 className="how-feature-label">{item.label}</h4>
                        </motion.div>
                    ))}
                </div>

                {/* Scoring Scale */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="how-scoring-card"
                >
                    <h3 className="how-scoring-title">Score each question from 1 to 5</h3>
                    <div className="how-scoring-scale">
                        {scoringLegend.map((item, i) => (
                            <div key={i} className="how-score-item">
                                <div className="how-score-circle">
                                    {item.score}
                                </div>
                                <span className="how-score-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="how-scoring-connector">
                        <div className="how-connector-line" />
                        <div className="how-connector-dots">
                            {scoringLegend.map((_, i) => (
                                <div key={i} className="how-connector-dot" />
                            ))}
                        </div>
                    </div>
                    <p className="how-scoring-note">
                        <CheckCircle size={16} color="var(--accent-gold)" />
                        Add up your scores at the end for your maturity classification
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
