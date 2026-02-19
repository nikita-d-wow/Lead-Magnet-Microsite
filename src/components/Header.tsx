import { motion } from 'framer-motion';
import logo from '../assets/WR-logo-1.svg';

const Header = () => {
    return (
        <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <header
                style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 100,
                    padding: '1.5rem 0',
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    borderBottom: '1px solid var(--border-color)',
                }}
            >
                <div className="premium-container">
                    <img src={logo} alt="WowRealty" style={{ height: '40px' }} />
                </div>
            </header>
        </motion.div>
    );
};

export default Header;

