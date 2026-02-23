import { motion } from 'framer-motion';
import { CheckCircle, Layers, HelpCircle, SlidersHorizontal, Award } from 'lucide-react';

const STEPS = [
    { icon: <Layers size={28} />, title: <><span className="serif-number">5</span> Sections</>, text: 'Comprehensive evaluation categories' },
    { icon: <HelpCircle size={28} />, title: <><span className="serif-number">25</span> Questions</>, text: 'Targeted maturity data points' },
    { icon: <SlidersHorizontal size={28} />, title: 'Self-scoring', text: 'Objective evaluation framework' },
    { icon: <Award size={28} />, title: 'Instant Result', text: 'Maturity classification report' },
];

const LEVELS = [
    { score: '1', label: 'Not in place' },
    { score: '2', label: 'Ad hoc' },
    { score: '3', label: 'Partially structured' },
    { score: '4', label: 'Fully structured' },
    { score: '5', label: 'Institutional & automated' },
];

const HowItWorks = () => {
    return (
        <section className="how-section" id="how-it-works">
            <div className="premium-container">
                <motion.div
                    className="how-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="how-eyebrow">Our Methodology</span>
                    <h2 className="how-title">How the <span className="gold-gradient-text">Audit Works</span></h2>
                </motion.div>

                <div className="how-features">
                    {STEPS.map((step, index) => (
                        <motion.div
                            key={index}
                            className="how-feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="how-feature-icon">{step.icon}</div>
                            <h3 className="how-feature-label">{step.title}</h3>
                            <p className="how-feature-desc">{step.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="how-scoring-card"
                    id="framework"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="how-scoring-title">Instant Classification System</h3>
                    <div className="how-scoring-scale">
                        {LEVELS.map((level, index) => (
                            <motion.div
                                key={index}
                                className="how-score-item"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            >
                                <div className="how-score-circle serif-number">{level.score}</div>
                                <span className="how-score-label">{level.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="how-scoring-connector">
                        <div className="how-connector-line" />
                        <div className="how-connector-dots">
                            {LEVELS.map((_, i) => (
                                <div
                                    key={i}
                                    className="how-connector-dot"
                                    style={{
                                        background: i === 0 ? '#ef4444' : i === 1 ? '#f59e0b' : i === 2 ? '#10b981' : '#3b82f6'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <p className="how-scoring-note">
                        <CheckCircle size={18} style={{ color: 'var(--accent-gold)' }} />
                        Includes customized recommendations based on your specific score.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
