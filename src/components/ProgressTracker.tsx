import { motion } from 'framer-motion';

interface ProgressTrackerProps {
    answeredCount: number;
    totalQuestions: number;
    totalScore: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ answeredCount, totalQuestions, totalScore }) => {
    const progressPercent = (answeredCount / totalQuestions) * 100;

    return (
        <>
            <div className="progress-top-bar">
                <motion.div
                    className="progress-top-fill"
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                />
            </div>

            <motion.div
                className="progress-circle-indicator"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="progress-circle-inner">
                    <div className="progress-circle-count">
                        <span className="current">{answeredCount}</span>
                        <span className="total">/{totalQuestions}</span>
                    </div>
                    <div className="progress-circle-score">
                        <span className="label">Score</span>
                        <span className="value">{totalScore}</span>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ProgressTracker;
