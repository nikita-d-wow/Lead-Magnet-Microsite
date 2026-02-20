import { motion } from 'framer-motion';
import { AlertTriangle, Database, BarChart3, FileSpreadsheet, Users } from 'lucide-react';

const painPoints = [
    { icon: <AlertTriangle size={22} />, title: 'Collections are manual', text: 'Time-consuming processes that slow revenue.' },
    { icon: <Database size={22} />, title: 'Data sits in silos', text: 'Disconnected systems hiding the full picture.' },
    { icon: <BarChart3 size={22} />, title: 'Reporting is reactive', text: 'Decisions made on outdated information.' },
    { icon: <FileSpreadsheet size={22} />, title: 'Compliance lives in spreadsheets', text: 'Audit risk hiding in manual records.' },
    { icon: <Users size={22} />, title: 'Tenant engagement is fragmented', text: 'Inconsistent communication eroding trust.' },
];

const WhyThisMatters = () => {
    return (
        <section id="why-this-matters" className="why-section">
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="why-header"
                >
                    <span className="why-eyebrow">Why This Matters</span>
                    <h2 className="why-title">
                        The Cost of <span className="gold-gradient-text">Digital Immaturity</span>
                    </h2>
                    <p className="why-subtitle">
                        Most real estate developers believe they are "digitally enabled."
                        But behind the scenes:
                    </p>
                </motion.div>

                <div className="why-grid">
                    {painPoints.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="why-card"
                        >
                            <div className="why-card-icon">{item.icon}</div>
                            <h4 className="why-card-title">{item.title}</h4>
                            <p className="why-card-text">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="why-closing"
                >
                    <div className="why-closing-line" />
                    <p>
                        This audit reveals where your portfolio truly stands — across
                        governance, execution, integration, and risk.
                    </p>
                    <div className="why-closing-line" />
                </motion.div>
            </div>
        </section>
    );
};

export default WhyThisMatters;
