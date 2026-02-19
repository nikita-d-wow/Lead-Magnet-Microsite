import { useState, useMemo } from 'react';
import { auditData, classifications } from './auditData';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyThisMatters from './components/WhyThisMatters';
import HowItWorks from './components/HowItWorks';
import AuditSection from './components/AuditSection';
import ResultsSection from './components/ResultsSection';
import ProgressTracker from './components/ProgressTracker';
import Footer from './components/Footer';

const TOTAL_QUESTIONS = 25;

function App() {
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleScoreChange = (questionId: string, score: number) => {
    setScores(prev => ({ ...prev, [questionId]: score }));
  };

  const answeredCount = Object.keys(scores).length;

  const totalScore = useMemo(() => {
    return Object.values(scores).reduce((a, b) => a + b, 0);
  }, [scores]);

  const maturity = useMemo(() => {
    return classifications.find(c => totalScore >= c.min && totalScore <= c.max) || classifications[0];
  }, [totalScore]);

  const startAudit = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <Header />
      <HeroSection onStartAudit={startAudit} />
      <WhyThisMatters />
      <HowItWorks />

      {auditData.map((section) => (
        <AuditSection
          key={section.id}
          section={section}
          scores={scores}
          onScoreChange={handleScoreChange}
        />
      ))}

      <ResultsSection totalScore={totalScore} maturity={maturity} />
      <Footer />

      {/* Sticky progress tracker — always visible */}
      {answeredCount > 0 && (
        <ProgressTracker
          answeredCount={answeredCount}
          totalQuestions={TOTAL_QUESTIONS}
          totalScore={totalScore}
        />
      )}
    </div>
  );
}

export default App;
