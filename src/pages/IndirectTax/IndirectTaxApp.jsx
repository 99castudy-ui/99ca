import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { mcqQuestions, longAnswerQuestions } from '../../data/questions.js';

// Header Component
const Header = ({ currentSection, onNavigate }) => {
  const navigate = useNavigate();
  const getProgress = () => {
    return 35;
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <button className="back-button" onClick={() => navigate('/')} title="Back to Main Dashboard">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="logo-text">
            <h1>CA Final</h1>
            <span>Indirect Tax Laws</span>
          </div>
        </div>
        <nav className="main-nav">
          <button 
            className={`nav-btn ${currentSection === 'dashboard' ? 'active' : ''}`}
            onClick={() => onNavigate('dashboard')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            Dashboard
          </button>
          <button 
            className={`nav-btn ${currentSection === 'mcq' ? 'active' : ''}`}
            onClick={() => onNavigate('mcq')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            MCQ Practice
          </button>
          <button 
            className={`nav-btn ${currentSection === 'long' ? 'active' : ''}`}
            onClick={() => onNavigate('long')}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
            </svg>
            Long Answers
          </button>
        </nav>
        <div className="header-actions">
          <div className="progress-indicator">
            <div className="progress-ring">
              <svg viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" stroke="var(--bg-card)" strokeWidth="3"/>
                <circle cx="18" cy="18" r="16" fill="none" stroke="var(--accent)" strokeWidth="3" 
                  strokeDasharray={`${getProgress()}, 100`} strokeDashoffset="0" strokeLinecap="round"
                  transform="rotate(-90 18 18)"/>
              </svg>
              <span>{getProgress()}%</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Dashboard Component
const Dashboard = ({ onStartPractice }) => {
  const topics = [
    { name: "Customs", mcqs: 5, longAnswers: 1, progress: 45 },
    { name: "GST Registration", mcqs: 2, longAnswers: 0, progress: 30 },
    { name: "Input Tax Credit", mcqs: 1, longAnswers: 0, progress: 60 },
    { name: "Time of Supply", mcqs: 1, longAnswers: 0, progress: 20 },
    { name: "Valuation", mcqs: 1, longAnswers: 0, progress: 55 },
    { name: "Exemptions", mcqs: 1, longAnswers: 0, progress: 40 },
    { name: "Reverse Charge", mcqs: 1, longAnswers: 0, progress: 25 },
    { name: "Interest & Penalty", mcqs: 2, longAnswers: 0, progress: 15 },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <div className="hero-content">
          <h2>Welcome Back!</h2>
          <p>Continue your preparation for CA Final Paper 5: Indirect Tax Laws</p>
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-value">{mcqQuestions.length}</div>
              <div className="stat-label">Questions Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">0%</div>
              <div className="stat-label">Accuracy Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">0</div>
              <div className="stat-label">Hours Practiced</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="circular-progress-large">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="var(--bg-card)" strokeWidth="8"/>
              <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="8" 
                strokeDasharray="283" strokeDashoffset="170" strokeLinecap="round"
                transform="rotate(-90 50 50)"/>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--accent)"/>
                  <stop offset="100%" stopColor="var(--accent-purple)"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="progress-center">
              <span className="progress-value">40%</span>
              <span className="progress-label">Complete</span>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Start</h3>
        <div className="action-cards">
          <button className="action-card mcq-card" onClick={() => onStartPractice('mcq')}>
            <div className="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div className="action-content">
              <h4>MCQ Practice</h4>
              <p>{mcqQuestions.length} questions from past papers</p>
            </div>
            <div className="action-arrow">→</div>
          </button>
          
          <button className="action-card long-card" onClick={() => onStartPractice('long')}>
            <div className="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
              </svg>
            </div>
            <div className="action-content">
              <h4>Case Studies</h4>
              <p>{longAnswerQuestions.length} comprehensive problems</p>
            </div>
            <div className="action-arrow">→</div>
          </button>
          
          <button className="action-card revision-card">
            <div className="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 4v6h6"/>
                <path d="M23 20v-6h-6"/>
                <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/>
              </svg>
            </div>
            <div className="action-content">
              <h4>Revision Mode</h4>
              <p>Review your mistakes</p>
            </div>
            <div className="action-arrow">→</div>
          </button>
        </div>
      </div>

      <div className="topics-section">
        <h3>Topics Overview</h3>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <button 
              key={index} 
              className="topic-card"
              onClick={() => onStartPractice('mcq')}
            >
              <div className="topic-header">
                <h4>{topic.name}</h4>
                <span className="topic-progress">{topic.progress}%</span>
              </div>
              <div className="topic-progress-bar">
                <div className="progress-fill" style={{ width: `${topic.progress}%` }}></div>
              </div>
              <div className="topic-meta">
                <span>{topic.mcqs} MCQs</span>
                <span>{topic.longAnswers} Case Studies</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// MCQ Practice Component
const MCQPractice = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [answers, setAnswers] = useState({});

  const currentQuestion = mcqQuestions[currentQuestionIndex];

  const handleAnswerSelect = (optionIndex) => {
    if (!isSubmitted) {
      setSelectedAnswer(optionIndex);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setIsSubmitted(true);
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: selectedAnswer
      }));
      
      if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      } else {
        setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < mcqQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(answers[mcqQuestions[currentQuestionIndex + 1].id] ?? null);
      setIsSubmitted(!!answers[mcqQuestions[currentQuestionIndex + 1].id]);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(answers[mcqQuestions[currentQuestionIndex - 1].id] ?? null);
      setIsSubmitted(!!answers[mcqQuestions[currentQuestionIndex - 1].id]);
      setShowExplanation(false);
    }
  };

  const getDifficultyClass = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'difficulty-easy';
      case 'medium': return 'difficulty-medium';
      case 'hard': return 'difficulty-hard';
      default: return '';
    }
  };

  return (
    <div className="mcq-practice">
      <div className="practice-header">
        <div className="question-nav">
          <button 
            className="nav-arrow" 
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            ←
          </button>
          <span className="question-counter">
            Question {currentQuestionIndex + 1} of {mcqQuestions.length}
          </span>
          <button 
            className="nav-arrow" 
            onClick={handleNext}
            disabled={currentQuestionIndex === mcqQuestions.length - 1}
          >
            →
          </button>
        </div>
        <div className="score-display">
          <span className="score-correct">✓ {score.correct}</span>
          <span className="score-incorrect">✗ {score.incorrect}</span>
        </div>
      </div>

      <div className="question-container">
        <div className="question-meta">
          <span className="exam-session">{currentQuestion.examSession}</span>
          <span className="topic-badge">{currentQuestion.topic}</span>
          <span className={`difficulty-badge ${getDifficultyClass(currentQuestion.difficulty)}`}>
            {currentQuestion.difficulty}
          </span>
          <span className="marks-badge">{currentQuestion.marks} Marks</span>
        </div>

        <div className="question-text">
          <pre>{currentQuestion.question}</pre>
        </div>

        <div className="options-container">
          {currentQuestion.options.map((option, index) => {
            let optionClass = 'option-card';
            if (isSubmitted) {
              if (index === currentQuestion.correctAnswer) {
                optionClass += ' correct';
              } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                optionClass += ' incorrect';
              }
            } else if (index === selectedAnswer) {
              optionClass += ' selected';
            }

            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleAnswerSelect(index)}
                disabled={isSubmitted}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {isSubmitted && index === currentQuestion.correctAnswer && (
                  <span className="option-indicator correct-indicator">✓</span>
                )}
                {isSubmitted && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                  <span className="option-indicator incorrect-indicator">✗</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="action-buttons">
          {!isSubmitted ? (
            <button 
              className="btn-primary submit-btn"
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
            >
              Submit Answer
            </button>
          ) : (
            <>
              <button 
                className="btn-secondary explanation-btn"
                onClick={() => setShowExplanation(!showExplanation)}
              >
                {showExplanation ? 'Hide' : 'Show'} Explanation
              </button>
              <button 
                className="btn-primary next-btn"
                onClick={handleNext}
                disabled={currentQuestionIndex === mcqQuestions.length - 1}
              >
                Next Question →
              </button>
            </>
          )}
        </div>

        {isSubmitted && (
          <div className={`result-banner ${selectedAnswer === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}`}>
            {selectedAnswer === currentQuestion.correctAnswer ? (
              <>
                <span className="result-icon">🎉</span>
                <span className="result-text">Correct! Well done!</span>
              </>
            ) : (
              <>
                <span className="result-icon">❌</span>
                <span className="result-text">
                  Incorrect. The correct answer is <strong>{String.fromCharCode(65 + currentQuestion.correctAnswer)}</strong>
                </span>
              </>
            )}
          </div>
        )}

        {showExplanation && (
          <div className="explanation-container">
            <h4>Detailed Explanation</h4>
            <div className="explanation-content">
              <pre>{currentQuestion.explanation}</pre>
            </div>
            {selectedAnswer !== currentQuestion.correctAnswer && currentQuestion.whereWentWrong && (
              <div className="mistake-analysis">
                <h5>Where You Went Wrong</h5>
                <p>{currentQuestion.whereWentWrong[selectedAnswer]}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="question-palette">
        <h4>Question Navigator</h4>
        <div className="palette-grid">
          {mcqQuestions.map((q, index) => {
            let paletteClass = 'palette-btn';
            if (index === currentQuestionIndex) paletteClass += ' current';
            if (answers[q.id] !== undefined) {
              paletteClass += answers[q.id] === q.correctAnswer ? ' answered-correct' : ' answered-incorrect';
            }
            return (
              <button
                key={q.id}
                className={paletteClass}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  setSelectedAnswer(answers[q.id] ?? null);
                  setIsSubmitted(!!answers[q.id]);
                  setShowExplanation(false);
                }}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Long Answer Practice Component
const LongAnswerPractice = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [selfScore, setSelfScore] = useState({});

  const currentQuestion = longAnswerQuestions[currentQuestionIndex];

  const handleSubmit = () => {
    if (userAnswer.trim()) {
      setIsSubmitted(true);
    }
  };

  const handleSelfScore = (criterionIndex, score) => {
    setSelfScore(prev => ({
      ...prev,
      [criterionIndex]: score
    }));
  };

  const getTotalSelfScore = () => {
    return Object.values(selfScore).reduce((sum, val) => sum + val, 0);
  };

  const getMaxScore = () => {
    return currentQuestion.rubric.reduce((sum, r) => sum + r.maxScore, 0);
  };

  const handleNext = () => {
    if (currentQuestionIndex < longAnswerQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setUserAnswer('');
      setIsSubmitted(false);
      setShowSolution(false);
      setSelfScore({});
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setUserAnswer('');
      setIsSubmitted(false);
      setShowSolution(false);
      setSelfScore({});
    }
  };

  return (
    <div className="long-answer-practice">
      <div className="practice-header">
        <div className="question-nav">
          <button 
            className="nav-arrow" 
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            ←
          </button>
          <span className="question-counter">
            Case Study {currentQuestionIndex + 1} of {longAnswerQuestions.length}
          </span>
          <button 
            className="nav-arrow" 
            onClick={handleNext}
            disabled={currentQuestionIndex === longAnswerQuestions.length - 1}
          >
            →
          </button>
        </div>
      </div>

      <div className="case-study-container">
        <div className="question-meta">
          <span className="exam-session">{currentQuestion.examSession}</span>
          <span className="topic-badge">{currentQuestion.topic}</span>
          <span className="marks-badge">{currentQuestion.marks} Marks</span>
        </div>

        <div className="question-section">
          <h3>Problem Statement</h3>
          <div className="question-text case-study-text">
            <pre>{currentQuestion.question}</pre>
          </div>
        </div>

        <div className="answer-section">
          <h3>Your Answer</h3>
          {!isSubmitted ? (
            <>
              <div className="answer-input-container">
                <textarea
                  className="answer-textarea"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Write your detailed answer here...

For calculation questions:
• Use tables where appropriate
• Show step-by-step working
• Include relevant section numbers and provisions

For explanation questions:
• Structure your answer with clear headings
• Reference legal provisions
• Provide reasoning for each point"
                  rows={15}
                />
                <div className="textarea-footer">
                  <span className="word-count">{userAnswer.split(/\s+/).filter(w => w).length} words</span>
                </div>
              </div>
              <button 
                className="btn-primary submit-btn"
                onClick={handleSubmit}
                disabled={!userAnswer.trim()}
              >
                Submit Answer
              </button>
            </>
          ) : (
            <div className="submitted-answer">
              <div className="answer-display">
                <pre>{userAnswer}</pre>
              </div>
              <button 
                className="btn-secondary"
                onClick={() => setShowSolution(!showSolution)}
              >
                {showSolution ? 'Hide' : 'View'} Model Answer
              </button>
            </div>
          )}
        </div>

        {showSolution && (
          <>
            <div className="model-answer-section">
              <h3>Model Answer</h3>
              <div className="model-answer-content">
                <pre>{currentQuestion.modelAnswer}</pre>
              </div>
            </div>

            <div className="self-evaluation-section">
              <h3>Self Evaluation</h3>
              <p className="evaluation-instructions">
                Compare your answer with the model answer and score yourself on each criterion:
              </p>
              <div className="rubric-grid">
                {currentQuestion.rubric.map((criterion, index) => (
                  <div key={index} className="rubric-item">
                    <div className="rubric-criterion">
                      <span className="criterion-text">{criterion.description}</span>
                      <span className="criterion-max">Max: {criterion.maxScore} marks</span>
                    </div>
                    <div className="score-input">
                      <input
                        type="number"
                        min="0"
                        max={criterion.maxScore}
                        step="0.5"
                        value={selfScore[index] || ''}
                        onChange={(e) => handleSelfScore(index, parseFloat(e.target.value) || 0)}
                        placeholder="0"
                      />
                      <span>/ {criterion.maxScore}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-score">
                <span>Total Self Score:</span>
                <span className="score-value">
                  {getTotalSelfScore()} / {getMaxScore()}
                </span>
                <span className="percentage">
                  ({((getTotalSelfScore() / getMaxScore()) * 100).toFixed(1)}%)
                </span>
              </div>
            </div>

            <div className="improvement-tips">
              <h4>Key Takeaways & Improvement Tips</h4>
              <ul>
                <li>Always mention specific section numbers and rule references</li>
                <li>For calculations, present data in tabular format for clarity</li>
                <li>Include brief reasoning for each treatment/conclusion</li>
                <li>Check if all parts of the question are addressed</li>
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="case-study-palette">
        <h4>Case Studies</h4>
        <div className="palette-list">
          {longAnswerQuestions.map((q, index) => (
            <button
              key={q.id}
              className={`palette-item ${index === currentQuestionIndex ? 'current' : ''}`}
              onClick={() => {
                setCurrentQuestionIndex(index);
                setUserAnswer('');
                setIsSubmitted(false);
                setShowSolution(false);
                setSelfScore({});
              }}
            >
              <span className="case-number">Case {index + 1}</span>
              <span className="case-topic">{q.topic}</span>
              <span className="case-marks">{q.marks}M</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Indirect Tax App Component
function IndirectTaxApp() {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const handleNavigate = (section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <Dashboard onStartPractice={handleNavigate} />;
      case 'mcq':
        return <MCQPractice />;
      case 'long':
        return <LongAnswerPractice />;
      default:
        return <Dashboard onStartPractice={handleNavigate} />;
    }
  };

  return (
    <div className="app">
      <Header currentSection={currentSection} onNavigate={handleNavigate} />
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default IndirectTaxApp;


