import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    onStartAudit: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartAudit }) => {
    return (
        <section
            style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '4rem 0 2rem',
                position: 'relative'
            }}
        >
            <div className="premium-container" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p
                        className="gold-eyebrow"
                        style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            fontSize: '0.75rem',
                            color: 'var(--accent-gold)',
                            border: '1px solid rgba(212, 175, 55, 0.3)',
                            padding: '0.4rem 1rem',
                            borderRadius: '99px',
                            display: 'inline-block'
                        }}
                    >
                        The Real Estate Developer Digital Maturity Audit™
                    </p>
                    <h1 style={{ fontSize: '2.5rem', lineHeight: 1.1, marginBottom: '0.75rem' }}>
                        The Real Estate Developer <br />
                        <span className="gold-gradient-text">Digital Maturity Audit™</span>
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        How Digitally Mature Is Your Real Estate Portfolio?
                    </h2>
                    <p
                        style={{
                            fontSize: '1rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '650px',
                            margin: '0 auto 2rem',
                            lineHeight: 1.6
                        }}
                    >
                        In <span className="serif-number">12</span> minutes, discover whether your real estate portfolio is
                        Institutional-Grade… or quietly leaking revenue, compliance risk, and
                        operational efficiency.
                    </p>
                    <button className="btn-primary" onClick={onStartAudit}>
                        Start the Audit <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>

            {/* Hero Stats Section */}
            <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                <div className="stat-item">
                    <span className="stat-value serif-number">5</span>
                    <span className="stat-label">Sections</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value serif-number">25</span>
                    <span className="stat-label">Questions</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value serif-number">12</span>
                    <span className="stat-label">Minutes</span>
                </div>
            </motion.div>

        </section>
    );
};

export default HeroSection;
