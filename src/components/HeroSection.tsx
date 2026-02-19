import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    onStartAudit: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartAudit }) => {
    return (
        <section
            style={{
                height: '85vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p
                        className="gold-gradient-text"
                        style={{
                            textTransform: 'uppercase',
                            letterSpacing: '0.3em',
                            fontWeight: 600,
                            marginBottom: '2rem',
                        }}
                    >
                        The Real Estate Developer Digital Maturity Audit™
                    </p>
                    <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '2rem' }}>
                        How Digitally Mature Is Your <br />
                        <span className="gold-gradient-text">Real Estate Portfolio?</span>
                    </h1>
                    <p
                        style={{
                            fontSize: '1.4rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '800px',
                            margin: '0 auto 3rem',
                        }}
                    >
                        In 12 minutes, discover whether your real estate portfolio is
                        Institutional-Grade… or quietly leaking revenue, compliance risk, and
                        operational efficiency.
                    </p>
                    <button className="btn-primary" onClick={onStartAudit}>
                        Start the Audit <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
