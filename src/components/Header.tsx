import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/WR-logo-1.svg';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
    onStartAudit?: () => void;
    isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onStartAudit }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navItems = [
        { label: 'Methodology', href: '#how-it-works' },
        { label: 'Impact Analysis', href: '#why-this-matters' },
        { label: 'Our Framework', href: '#framework' },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);

        // Delay scroll to allow menu close animation and DOM to settle
        setTimeout(() => {
            const targetId = href.replace('#', '');
            const element = document.getElementById(targetId);

            if (element) {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 350);
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`premium-header ${isMenuOpen ? 'menu-open' : ''}`}
        >
            <div className="premium-container header-flex">
                <div className="header-logo-container">
                    <img src={logo} alt="WowRealty" className="header-logo" />
                </div>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="nav-link"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="header-actions">
                    <button
                        onClick={onStartAudit}
                        className="btn-primary"
                    >
                        Start Audit
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.nav
                        className="mobile-nav"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="mobile-nav-content">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className="mobile-nav-link"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    // Delay action to allow menu close animation to complete
                                    setTimeout(() => {
                                        onStartAudit?.();
                                    }, 350);
                                }}
                                className="btn-primary mobile-audit-btn"
                            >
                                Start Audit
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;

