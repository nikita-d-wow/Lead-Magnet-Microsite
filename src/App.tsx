import { useState, useMemo, useRef } from 'react';
import { auditData, classifications } from './auditData';
import { Sparkles, AlertCircle } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyThisMatters from './components/WhyThisMatters';
import HowItWorks from './components/HowItWorks';
import AuditSection from './components/AuditSection';
import ResultsSection from './components/ResultsSection';
import Footer from './components/Footer';

const TOTAL_QUESTIONS = 25;

function App() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const auditRef = useRef<HTMLDivElement>(null);

  const handleScoreChange = (questionId: string, score: number) => {
    setScores(prev => ({ ...prev, [questionId]: score }));
    setShowWarning(false);
  };

  const answeredCount = Object.keys(scores).length;

  const totalScore = useMemo(() => {
    return Object.values(scores).reduce((a, b) => a + b, 0);
  }, [scores]);

  const maturity = useMemo(() => {
    return classifications.find(c => totalScore >= c.min && totalScore <= c.max) || classifications[0];
  }, [totalScore]);

  const sectionScores = useMemo(() => {
    return auditData.map(section => {
      const sectionTotal = section.questions.reduce((sum, q) => sum + (scores[q.id] || 0), 0);
      const maxScore = section.questions.length * 5;
      return {
        id: section.id,
        title: section.subtitle,
        score: sectionTotal,
        maxScore,
      };
    });
  }, [scores]);

  const startAudit = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const allAnswered = answeredCount === TOTAL_QUESTIONS;

  const handleGenerateScore = () => {
    if (!allAnswered) {
      setShowWarning(true);
      auditRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    setShowWarning(false);
    setShowResults(true);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      <Header />
      <div className="app-wrapper">
        <HeroSection onStartAudit={startAudit} />
        <WhyThisMatters />
        <HowItWorks />

        <div ref={auditRef}>
          {auditData.map((section) => (
            <AuditSection
              key={section.id}
              section={section}
              scores={scores}
              onScoreChange={handleScoreChange}
            />
          ))}
        </div>

        {/* Generate Score Button */}
        <div className="generate-score-wrapper">
          <button className="btn-primary generate-score-btn" onClick={handleGenerateScore}>
            <Sparkles size={22} />
            Generate My Score
          </button>
          {showWarning && (
            <p className="generate-score-warning">
              <AlertCircle size={14} />
              Please answer all {TOTAL_QUESTIONS} questions to generate your score
            </p>
          )}
          <p className="generate-score-hint">
            {answeredCount} of {TOTAL_QUESTIONS} questions answered
          </p>
        </div>

        <div ref={resultsRef}>
          <ResultsSection
            totalScore={totalScore}
            maturity={maturity}
            showResults={showResults}
            sectionScores={sectionScores}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
