import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Shield, CheckCircle } from 'lucide-react';

interface LeadCaptureProps {
    onCapture: (name: string, email: string) => void;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ onCapture }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const validate = () => {
        const newErrors: { name?: string; email?: string } = {};
        if (!name.trim()) newErrors.name = 'Name is required';
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onCapture(name, email);
        }
    };

    return (
        <section id="lead-capture" className="lead-capture-section">
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lead-capture-card glass-card"
                >
                    <div className="lead-capture-header">
                        <div className="lead-capture-icon">
                            <Shield size={32} color="var(--accent-gold)" />
                        </div>
                        <h2 className="lead-capture-title gold-gradient-text">Unlock Your Digital Maturity Audit</h2>
                        <p className="lead-capture-subtitle">
                            Enter your credentials to access the professional real estate digital maturity framework and benchmark your portfolio.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="lead-capture-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <div className="input-wrapper">
                                <User className="input-icon" size={18} />
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={errors.name ? 'input-error' : ''}
                                />
                            </div>
                            {errors.name && <span className="form-error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Work Email</label>
                            <div className="input-wrapper">
                                <Mail className="input-icon" size={18} />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your professional email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={errors.email ? 'input-error' : ''}
                                />
                            </div>
                            {errors.email && <span className="form-error-message">{errors.email}</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn-primary lead-capture-submit"
                            style={{
                                alignSelf: 'center',
                                padding: '0.8rem 2.5rem',
                                fontSize: '1rem',
                                width: 'auto',
                                minWidth: '200px',
                                justifyContent: 'center'
                            }}
                        >
                            Access Audit
                        </button>

                        <div className="lead-capture-privacy">
                            <CheckCircle size={14} />
                            <span>Your data is strictly confidential & secure</span>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadCapture;
