import React from 'react';
import { motion } from 'framer-motion';

interface QuestionCardProps {
    question: string;
    score: number;
    onScoreChange: (score: number) => void;
    index: number;
    questionNumber: number;
}

const scoreLabels = ['Not in place', 'Ad hoc', 'Partial', 'Structured', 'Institutional'];

const QuestionCard: React.FC<QuestionCardProps> = ({ question, score, onScoreChange, index, questionNumber }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`question-item ${score > 0 ? 'question-item--answered' : ''}`}
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
                        onClick={() => onScoreChange(s)}
                        title={scoreLabels[s - 1]}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                        <span className="score-btn-number serif-number">{s}</span>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default QuestionCard;
