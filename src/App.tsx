import { useState, useMemo, useRef, useEffect } from 'react';
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

import { captureLead, submitScore } from './services/api';

const TOTAL_QUESTIONS = 25;

function App() {
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [isAuditLocked, setIsAuditLocked] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isGeneratingScore, setIsGeneratingScore] = useState(false);

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
    const matched = classifications.find(c => totalScore >= c.min && totalScore <= c.max) || classifications[0];
    console.log(`Maturity Calculation: Score ${totalScore} -> ${matched.label}`);
    return matched;
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
    // Store user data in state for later use
    setUserName(name);
    setUserEmail(email);

    // Optimistically transition to audit
    setIsLeadCaptured(true);

    setTimeout(() => {
      const auditElement = document.getElementById('audit-start');
      if (auditElement) {
        auditElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        auditRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    // Call API in the background
    try {
      await captureLead(name, email);
    } catch (error) {
      console.error('Background lead capture failed:', error);
      // We don't alert the user here as they've already started the audit
    }
  };

  // Handle page exit/abandonment
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isLeadCaptured && !showResults) {
        // Prepare scores by section for abandonment
        const scoresBySection: Record<string, number> = {};
        sectionScores.forEach(s => {
          scoresBySection[s.id] = s.score;
        });

        // Prepare data for abandonment
        const data = {
          name: userName,
          businessEmail: userEmail,
          totalScore: 0,
          maturityLabel: 'Abandoned',
          isAbandoned: true,
          scores: scoresBySection,
          classification: {
            description: classifications[0].description,
            bullets: classifications[0].bullets
          }
        };

        // This will use keepalive: true in submitScore
        submitScore(data).catch(() => { });
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isLeadCaptured, showResults, userName, userEmail]);

  const allAnswered = answeredCount === TOTAL_QUESTIONS;

  const handleGenerateScore = async () => {
    if (!allAnswered) {
      setShowWarning(true);
      auditRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    
    // Disable button and lock audit
    setIsGeneratingScore(true);
    setShowWarning(false);
    setIsAuditLocked(true);
    console.log('Generating score for:', { userName, userEmail, totalScore });
    setShowResults(true);

    // Prepare scores by section
    const scoresBySection: Record<string, number> = {};
    sectionScores.forEach(s => {
      scoresBySection[s.id] = s.score;
    });

    // Call API in background
    console.log('Sending score payload:', {
      name: userName,
      email: userEmail,
      totalScore,
      maturityLabel: maturity.label
    });

    submitScore({
      name: userName,
      businessEmail: userEmail,
      totalScore,
      maturityLabel: maturity.label,
      scores: scoresBySection,
      isAbandoned: false,
      classification: {
        description: maturity.description,
        bullets: maturity.bullets
      }
    }).then(res => {
      console.log('Score submission successful:', res);
    }).catch(err => {
      console.error('Failed to submit score results:', err);
    }).finally(() => {
      // Keep button disabled even if there's an error
      // setIsGeneratingScore(false); // Uncomment if you want to allow retry
    });

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
            <LeadCapture onCapture={handleLeadCapture} />
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
                  isLocked={isAuditLocked}
                />
              ))}
            </div>

            {/* Generate Score Button */}
            <div className="generate-score-wrapper">
              <button 
                className="btn-primary generate-score-btn" 
                onClick={handleGenerateScore}
                disabled={isGeneratingScore}
                style={{
                  opacity: isGeneratingScore ? 0.6 : 1,
                  cursor: isGeneratingScore ? 'not-allowed' : 'pointer',
                  pointerEvents: isGeneratingScore ? 'none' : 'auto'
                }}
              >
                <Sparkles size={22} />
                {isGeneratingScore ? 'Score Generated' : 'Generate My Score'}
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