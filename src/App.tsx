import { useState, useMemo, useRef } from 'react';
import { auditData, classifications } from './auditData';
import { Sparkles, AlertCircle } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyThisMatters from './components/WhyThisMatters';
import HowItWorks from './components/HowItWorks';
import AuditSection from './components/AuditSection';
import ResultsSection from './components/ResultsSection';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';
import ExecutiveReviewCTA from './components/ExecutiveReviewCTA';

import { captureLead } from './services/api';

const TOTAL_QUESTIONS = 25;

function App() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);
  const auditRef = useRef<HTMLDivElement>(null);
  const leadCaptureRef = useRef<HTMLDivElement>(null);

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
    if (!isLeadCaptured) {
      const leadElement = document.getElementById('lead-capture');
      if (leadElement) {
        leadElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback if ref hasn't rendered yet
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    } else {
      auditRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLeadCapture = async (name: string, email: string) => {
    setIsSubmitting(true);
    try {
      await captureLead(name, email);

      setIsLeadCaptured(true);

      setTimeout(() => {
        const auditElement = document.getElementById('audit-start');
        if (auditElement) {
          auditElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          auditRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (error) {
      alert('Failed to save your details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
      <Header onStartAudit={startAudit} />
      <div className="app-wrapper">
        <HeroSection onStartAudit={startAudit} />
        <WhyThisMatters />
        <HowItWorks />

        {!isLeadCaptured && (
          <div ref={leadCaptureRef}>
            <LeadCapture onCapture={handleLeadCapture} isSubmitting={isSubmitting} />
          </div>
        )}

        {/* Assessment Section - Only visible after lead capture */}
        {isLeadCaptured && (
          <>
            <div id="audit-start" ref={auditRef}>
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
          </>
        )}

        <ExecutiveReviewCTA />
        <Footer />
      </div>
    </>
  );
}

export default App;
