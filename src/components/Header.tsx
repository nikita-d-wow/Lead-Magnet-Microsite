import { motion } from 'framer-motion';
import logo from '../assets/WR-logo-1.svg';

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1100,
                padding: '1.5rem 0',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--border-color)',
            }}
        >
            <div className="premium-container">
                <img src={logo} alt="WowRealty" style={{ height: '40px' }} />
            </div>
        </motion.header>
    );
};

export default Header;

