import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Award } from 'lucide-react';
import { Section } from '../auditData';
import QuestionCard from './QuestionCard';

interface AuditSectionProps {
    section: Section;
    scores: Record<string, number>;
    onScoreChange: (questionId: string, score: number) => void;
}

const AuditSection: React.FC<AuditSectionProps> = ({ section, scores, onScoreChange }) => {
    const sectionTotal = section.questions.reduce((sum, q) => sum + (scores[q.id] || 0), 0);
    const maxScore = section.questions.length * 5;
    const progressPercent = (sectionTotal / maxScore) * 100;
    const answeredCount = section.questions.filter(q => scores[q.id]).length;

    return (
        <section className="audit-section">
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Header */}
                    <div className="audit-section-header" style={{ marginBottom: '2.5rem' }}>
                        <div className="audit-section-icon" style={{ color: 'var(--accent-gold)' }}>
                            <ClipboardCheck size={32} />
                        </div>
                        <div>
                            <p className="audit-section-eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                Section <span className="serif-number" style={{ fontSize: '1.4rem' }}>{section.sectionNumber}</span>
                            </p>
                            <h2 className="audit-section-title">{section.title}</h2>
                            <p className="audit-section-subtitle">{section.subtitle}</p>
                        </div>
                    </div>

                    {/* Main Card */}
                    <div className="audit-card">
                        {/* What This Measures */}
                        <div className="audit-measures">
                            <div className="audit-measures-label">What This Measures:</div>
                            <p className="audit-measures-text">{section.measures}</p>
                        </div>

                        {/* Questions */}
                        <div className="questions-list">
                            {section.questions.map((q, idx) => (
                                <QuestionCard
                                    key={q.id}
                                    index={idx}
                                    question={q.text}
                                    questionNumber={idx + 1}
                                    score={scores[q.id] || 0}
                                    onScoreChange={(s) => onScoreChange(q.id, s)}
                                />
                            ))}
                        </div>

                        {/* Section Score Footer */}
                        <div className="audit-score-footer">
                            <div className="audit-progress-info">
                                <span className="audit-answered">
                                    <span className="serif-number">{answeredCount}</span> of <span className="serif-number">{section.questions.length}</span> answered
                                </span>
                                <div className="audit-progress-bar">
                                    <motion.div
                                        className="audit-progress-fill"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progressPercent}%` }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                    />
                                </div>
                            </div>
                            <div className="audit-score-display">
                                <span className="audit-score-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Award size={18} color="var(--accent-gold)" /> Section Score
                                </span>
                                <span className="audit-score-value">
                                    <span className="serif-number">{sectionTotal}</span>
                                    <span className="audit-score-max">/ <span className="serif-number">{maxScore}</span></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AuditSection;
