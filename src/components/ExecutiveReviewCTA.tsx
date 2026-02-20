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
                    style={{
                        padding: '2rem 1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                        borderRadius: '24px'
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <h4 className="gold-gradient-text" style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                            Want a Confidential Executive Benchmark Review?
                        </h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            WowRealty offers a complimentary <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Portfolio Digital Maturity Briefing</span>
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        width: '100%',
                        maxWidth: '1000px',
                        background: 'rgba(212, 175, 55, 0.03)',
                        borderRadius: '16px',
                        border: '1px solid rgba(212, 175, 55, 0.1)',
                        overflow: 'hidden'
                    }}>
                        {[
                            { text: 'Executive score interpretation', icon: <Shield size={18} /> },
                            { text: 'Blind spot analysis', icon: <Target size={18} /> },
                            { text: 'Risk exposure mapping', icon: <BarChart3 size={18} /> },
                            { text: '90-day stabilization roadmap', icon: <Map size={18} /> },
                        ].map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.6rem',
                                padding: '1.5rem 1rem',
                                position: 'relative',
                                borderRight: i < 3 ? '1px solid rgba(212, 175, 55, 0.1)' : 'none'
                            }}>
                                <div style={{ color: 'var(--accent-gold)' }}>{item.icon}</div>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    lineHeight: 1.3,
                                    color: 'var(--text-primary)',
                                    textAlign: 'center',
                                    maxWidth: '150px'
                                }}>
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://calendly.com/shri_harsha/letstalk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary animated-pulse-gold"
                        style={{
                            textDecoration: 'none',
                            padding: '0.9rem 2.5rem',
                            fontSize: '0.9rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem'
                        }}
                    >
                        Book My Executive Review <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ExecutiveReviewCTA;
