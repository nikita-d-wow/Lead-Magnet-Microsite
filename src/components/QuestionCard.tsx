import React from 'react';
import { motion } from 'framer-motion';

interface QuestionCardProps {
    question: string;
    score: number;
    onScoreChange: (score: number) => void;
    index: number;
    questionNumber: number;
    isLocked?: boolean;
}

const scoreLabels = [
    'Not in place',
    'Ad hoc',
    'Partially structured',
    'Fully structured',
    'Institutional & automated'
];

const QuestionCard: React.FC<QuestionCardProps> = ({ question, score, onScoreChange, index, questionNumber, isLocked = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`question-item ${score > 0 ? 'question-item--answered' : ''} ${isLocked ? 'question-item--locked' : ''}`}
        >
            <div className="question-header">
                <span className="question-number serif-number">Q{questionNumber}</span>
                <p className="question-text">{question}</p>
            </div>
            <div className="score-options">
                {[1, 2, 3, 4, 5].map((s) => (
                    <motion.button
                        key={s}
                        className={`score-btn ${score === s ? 'active' : ''}`}
                        onClick={() => !isLocked && onScoreChange(s)}
                        title={isLocked ? 'Answers are locked after score generation' : scoreLabels[s - 1]}
                        whileHover={isLocked ? {} : { scale: 1.12 }}
                        whileTap={isLocked ? {} : { scale: 0.92 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        disabled={isLocked}
                        style={isLocked ? { cursor: 'not-allowed', opacity: score === s ? 1 : 0.35 } : {}}
                    >
                        <span className="score-btn-number serif-number">{s}</span>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default QuestionCard;
