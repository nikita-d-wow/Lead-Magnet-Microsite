import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Target, BarChart3, Map } from 'lucide-react';

const ExecutiveReviewCTA: React.FC = () => {
    return (
        <section style={{ padding: '3rem 0 5rem' }} id="executive-review">
            <div className="premium-container" style={{ maxWidth: '1200px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="cta-strip glass-card"
                >
                    <div className="cta-header">
                        <h4 className="gold-gradient-text cta-title">
                            Want a Confidential Executive Benchmark Review?
                        </h4>
                        <p className="cta-subtitle">
                            WowRealty offers a complimentary <span className="cta-highlight">Portfolio Digital Maturity Briefing</span>
                        </p>
                    </div>

                    <div className="benchmark-grid">
                        {[
                            { text: 'Executive score interpretation', icon: <Shield size={18} /> },
                            { text: 'Blind spot analysis', icon: <Target size={18} /> },
                            { text: 'Risk exposure mapping', icon: <BarChart3 size={18} /> },
                            { text: '90-day digital stabilization roadmap', icon: <Map size={18} /> },
                        ].map((item, i) => (
                            <div key={i} className="benchmark-item">
                                <div className="benchmark-icon">{item.icon}</div>
                                <span className="benchmark-text">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://calendly.com/shri_harsha/letstalk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary cta-btn animated-pulse-gold"
                    >
                        Book My Executive Review <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ExecutiveReviewCTA;
