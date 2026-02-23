import { motion } from 'framer-motion';
import { AlertTriangle, Database, BarChart3, FileSpreadsheet, Users } from 'lucide-react';

const REASONS = [
    { icon: <AlertTriangle size={22} />, title: 'Collections are manual', text: 'Time-consuming processes that slow revenue.' },
    { icon: <Database size={22} />, title: 'Data sits in silos', text: 'Disconnected systems hiding the full picture.' },
    { icon: <BarChart3 size={22} />, title: 'Reporting is reactive', text: 'Decisions made on outdated information.' },
    { icon: <FileSpreadsheet size={22} />, title: 'Compliance lives in spreadsheets', text: 'Audit risk hiding in manual records.' },
    { icon: <Users size={22} />, title: 'Tenant engagement is fragmented', text: 'Inconsistent communication eroding trust.' },
];

const WhyThisMatters = () => {
    return (
        <section className="why-section" id="why-this-matters">
            <div className="premium-container">
                <motion.div
                    className="why-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="why-eyebrow">The Business Case</span>
                    <h2 className="why-title">
                        The Cost of <span className="gold-gradient-text">Digital Immature</span>
                    </h2>
                    <p className="why-subtitle">
                        In an era of rapid institutionalization, digital maturity isn't a luxury—it's the baseline for survival and growth.
                    </p>
                </motion.div>

                <div className="why-grid">
                    {REASONS.map((reason, index) => (
                        <motion.div
                            key={index}
                            className="why-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="why-card-icon">{reason.icon}</div>
                            <h3 className="why-card-title">{reason.title}</h3>
                            <p className="why-card-text">{reason.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="why-closing"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="why-closing-line" />
                    <p>Understanding these risks is the first step toward institutional excellence.</p>
                    <div className="why-closing-line" />
                </motion.div>
            </div>
        </section>
    );
};

export default WhyThisMatters;
