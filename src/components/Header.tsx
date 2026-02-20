import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/WR-logo-1.svg';

interface HeaderProps {
    onStartAudit?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStartAudit }) => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="premium-header"
        >
            <div className="premium-container header-flex">
                <div className="header-logo-container">
                    <img src={logo} alt="WowRealty" className="header-logo" />
                </div>

                <button
                    onClick={onStartAudit}
                    className="btn-nav-audit"
                >
                    Start Audit
                </button>
            </div>
        </motion.header>
    );
};

export default Header;

