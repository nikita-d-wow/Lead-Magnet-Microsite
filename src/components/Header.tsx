import logo from '../assets/WR logo.png';

const Header = () => {
    return (
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
    );
};

export default Header;
