import logo from '../assets/WR logo.png';

const Footer = () => {
    return (
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div>
                    <img
                        src={logo}
                        alt="WowRealty"
                        style={{ height: '30px', opacity: 0.6, marginBottom: '1rem' }}
                    />
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        © 2026 WowLabz. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
