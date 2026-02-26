import { motion } from 'framer-motion';
import logo from '../assets/WR logo (1).png';

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <footer
                style={{
                    padding: '5rem 0',
                    borderTop: '1px solid var(--border-color)',
                    background: 'var(--footer-bg)',
                }}
            >
                <div
                    className="premium-container"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <img
                            src={logo}
                            alt="WowRealty"
                            style={{ height: '40px', opacity: 0.9, marginBottom: '1.5rem', width: 'auto' }}
                        />
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            © 2026 WowLabz. All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </footer>
        </motion.div>
    );
};

export default Footer;

