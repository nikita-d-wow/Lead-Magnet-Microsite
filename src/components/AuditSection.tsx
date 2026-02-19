import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Target } from 'lucide-react';
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
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Section Header */}
                    <div className="audit-section-header">
                        <div className="audit-section-icon">
                            <ClipboardCheck size={28} />
                        </div>
                        <div>
                            <p className="audit-section-eyebrow">Section {section.sectionNumber}</p>
                            <h2 className="audit-section-title">{section.title}</h2>
                            <p className="audit-section-subtitle">{section.subtitle}</p>
                        </div>
                    </div>

                    {/* Main Card */}
                    <div className="audit-card">
                        {/* What This Measures */}
                        <div className="audit-measures">
                            <span className="audit-measures-label">What This Measures</span>
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
                                    {answeredCount} of {section.questions.length} answered
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
                                <span className="audit-score-label"><Target size={16} color="var(--accent-gold)" /> Section Score</span>
                                <span className="audit-score-value">
                                    {sectionTotal}
                                    <span className="audit-score-max">/ {maxScore}</span>
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
