import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { directTaxMcqQuestions, directTaxLongAnswerQuestions } from '../data/directTaxQuestions.js';
import { analyzeAnswer } from '../services/geminiService';
import { GeminiAnalysisUI } from '../components/GeminiAnalysisUI';
import './DirectTaxApp.css';

// Long Answer Practice Component - Separate component for performance
const LongAnswerPractice = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [selfScore, setSelfScore] = useState({});
  const [geminiAnalysis, setGeminiAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState(null);

  const currentQuestion = directTaxLongAnswerQuestions?.[currentQuestionIndex];

  // Use regular functions like other working routes - no useMemo needed
  const getTotalSelfScore = () => {
    return Object.values(selfScore).reduce((sum, val) => sum + val, 0);
  };

  const getMaxScore = () => {
    if (!currentQuestion?.rubric) return 0;
    return currentQuestion.rubric.reduce((sum, r) => sum + r.maxScore, 0);
  };

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

  const handleGeminiAnalysis = async () => {
    if (!userAnswer.trim()) {
      setAnalysisError('Please submit your answer first');
      return;
    }

    const currentQ = directTaxLongAnswerQuestions?.[currentQuestionIndex];
    if (!currentQ) return;

    setIsAnalyzing(true);
    setAnalysisError(null);
    
    try {
      const analysis = await analyzeAnswer(
        userAnswer,
        currentQ.modelAnswer,
        currentQ.question,
        currentQ.rubric
      );
      
      setGeminiAnalysis(analysis);
    } catch (error) {
      setAnalysisError(error.message || 'Failed to analyze answer. Please try again.');
      console.error('Analysis error:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < directTaxLongAnswerQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setUserAnswer('');
      setIsSubmitted(false);
      setShowSolution(false);
      setSelfScore({});
      setGeminiAnalysis(null);
      setAnalysisError(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setUserAnswer('');
      setIsSubmitted(false);
      setShowSolution(false);
      setSelfScore({});
      setGeminiAnalysis(null);
      setAnalysisError(null);
    }
  };

  const handlePaletteClick = (index) => {
    setCurrentQuestionIndex(index);
    setUserAnswer('');
    setIsSubmitted(false);
    setShowSolution(false);
    setSelfScore({});
    setGeminiAnalysis(null);
    setAnalysisError(null);
  };

  if (!directTaxLongAnswerQuestions || directTaxLongAnswerQuestions.length === 0) {
    return <div className="dt-no-questions">No long answer questions available</div>;
  }

  if (!currentQuestion) return null;

  return (
    <div className="dt-long-answer-practice">
      <div className="dt-case-study-container">
        <div className="dt-practice-header">
          <div className="dt-question-nav">
            <button 
              className="dt-nav-arrow" 
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              ←
            </button>
            <span className="dt-question-counter">
              Question {currentQuestionIndex + 1} of {directTaxLongAnswerQuestions.length}
            </span>
            <button 
              className="dt-nav-arrow" 
              onClick={handleNext}
              disabled={currentQuestionIndex === directTaxLongAnswerQuestions.length - 1}
            >
              →
            </button>
          </div>
        </div>

        <div className="dt-question-meta">
          <span className="dt-badge dt-badge-session">{currentQuestion.examSession}</span>
          <span className="dt-badge dt-badge-topic">{currentQuestion.topic}</span>
          <span className="dt-badge dt-badge-marks">{currentQuestion.marks} Marks</span>
        </div>

        <div className="dt-question-section">
          <h3>Problem Statement</h3>
          <div className="dt-case-study-text">
            <pre>{currentQuestion.question}</pre>
          </div>
        </div>

        <div className="dt-answer-section">
          <h3>Your Answer</h3>
          {!isSubmitted ? (
            <>
              <textarea
                className="dt-answer-textarea"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Write your detailed answer here..."
                rows={10}
              />
              <div className="dt-textarea-footer">
                <span className="dt-word-count">{userAnswer.split(/\s+/).filter(w => w).length} words</span>
                <button 
                  className="dt-submit-btn dt-submit-inline"
                  onClick={handleSubmit}
                  disabled={!userAnswer.trim()}
                >
                  Submit Answer
                </button>
              </div>
            </>
          ) : (
            <div className="dt-submitted-answer">
              <div className="dt-answer-display">
                <pre>{userAnswer}</pre>
              </div>
              <div className="dt-answer-actions">
                <button 
                  className="dt-btn-primary dt-analyse-btn"
                  onClick={handleGeminiAnalysis}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <span className="dt-loading-spinner"></span>
                      Analysing...
                    </>
                  ) : (
                    'Analyse'
                  )}
                </button>
                <button 
                  className="dt-btn-secondary" 
                  onClick={() => setShowSolution(!showSolution)}
                >
                  {showSolution ? 'Hide' : 'View'} Model Answer
                </button>
              </div>
              {analysisError && (
                <div className="dt-error-message">
                  <p>⚠️ {analysisError}</p>
                  <button className="dt-retry-btn" onClick={handleGeminiAnalysis}>Retry</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Gemini Analysis UI */}
        {isSubmitted && geminiAnalysis && (
          <GeminiAnalysisUI
            geminiAnalysis={geminiAnalysis}
            rubric={currentQuestion.rubric}
            selfScore={selfScore}
            getTotalSelfScore={getTotalSelfScore}
            getMaxScore={getMaxScore}
          />
        )}

        {showSolution && (
          <>
            <div className="dt-model-answer-section">
              <h3>Model Answer</h3>
              <div className="dt-model-answer-content">
                <pre>{currentQuestion.modelAnswer}</pre>
              </div>
            </div>

            <div className="dt-self-evaluation-section">
              <h3>Self Evaluation</h3>
              <div className="dt-rubric-grid">
                {currentQuestion.rubric?.map((criterion, index) => (
                  <div key={index} className="dt-rubric-item">
                    <div className="dt-rubric-criterion">
                      <span className="dt-criterion-text">{criterion.description}</span>
                      <span className="dt-criterion-max">Max: {criterion.maxScore}</span>
                    </div>
                    <div className="dt-score-input">
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
              <div className="dt-total-score">
                <span>Total:</span>
                <span className="dt-score-value">{getTotalSelfScore()} / {getMaxScore()}</span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="dt-case-study-palette">
        <h4>Questions</h4>
        <div className="dt-palette-list">
          {directTaxLongAnswerQuestions.map((q, index) => (
            <button
              key={q.id}
              className={`dt-palette-item ${index === currentQuestionIndex ? 'current' : ''}`}
              onClick={() => handlePaletteClick(index)}
            >
              <span className="dt-case-number">Q{index + 1}</span>
              <span className="dt-case-topic">{q.topic}</span>
              <span className="dt-case-marks">{q.marks}M</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const DirectTaxDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isContextExpanded, setIsContextExpanded] = useState(true);
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [mcqScore, setMcqScore] = useState({ correct: 0, incorrect: 0 });
  const [filters, setFilters] = useState({
    examSession: 'all',
    topic: 'all',
    difficulty: 'all'
  });

  const totalMCQQuestions = directTaxMcqQuestions?.length || 0;
  const totalLongAnswerQuestions = directTaxLongAnswerQuestions?.length || 0;

  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('directTaxProgress');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading progress:', e);
    }
    return { score: { correct: 0, incorrect: 0, total: 0 }, answered: [] };
  });


  // Validate and clean localStorage on mount - only clean invalid data, don't reset valid progress
  useEffect(() => {
    try {
      const saved = localStorage.getItem('directTaxProgress');
      if (!saved) return;
      
      const parsed = JSON.parse(saved);
      
      // Check if data structure is valid
      if (!parsed.score || typeof parsed.score !== 'object' || !Array.isArray(parsed.answered)) {
        console.log('Invalid progress data structure, clearing...');
        localStorage.removeItem('directTaxProgress');
        setProgress({
          score: { correct: 0, incorrect: 0, total: 0 },
          answered: []
        });
        return;
      }
      
      // Ensure score has required fields
      if (typeof parsed.score.correct !== 'number' || typeof parsed.score.incorrect !== 'number' || typeof parsed.score.total !== 'number') {
        console.log('Invalid score structure, resetting...');
        setProgress({
          score: { correct: 0, incorrect: 0, total: 0 },
          answered: parsed.answered || []
        });
        return;
      }
      
      // Remove answers for questions that no longer exist
      const validQuestionIds = new Set(directTaxMcqQuestions?.map(q => q.id) || []);
      const validAnswers = parsed.answered.filter(a => 
        a && typeof a.id !== 'undefined' && validQuestionIds.has(a.id)
      );
      
      // Only update if we actually removed invalid answers
      if (validAnswers.length !== parsed.answered.length) {
        console.log(`Cleaning ${parsed.answered.length - validAnswers.length} invalid answers...`);
        const correctCount = validAnswers.filter(a => a.correct).length;
        setProgress({
          score: {
            correct: correctCount,
            incorrect: validAnswers.length - correctCount,
            total: validAnswers.length
          },
          answered: validAnswers
        });
      }
    } catch (e) {
      console.error('Error validating progress:', e);
      localStorage.removeItem('directTaxProgress');
      setProgress({
        score: { correct: 0, incorrect: 0, total: 0 },
        answered: []
      });
    }
  }, []); // Run only once on mount

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem('directTaxProgress', JSON.stringify(progress));
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [progress]);

  // Memoize filtered questions
  const filteredMCQs = useMemo(() => {
    if (!directTaxMcqQuestions) return [];
    return directTaxMcqQuestions.filter(q => {
      if (filters.examSession !== 'all' && q.examSession !== filters.examSession) return false;
      if (filters.topic !== 'all' && q.topic !== filters.topic) return false;
      if (filters.difficulty !== 'all' && q.difficulty !== filters.difficulty) return false;
      return true;
    });
  }, [filters.examSession, filters.topic, filters.difficulty]);

  const currentQuestionData = useMemo(() => {
    return filteredMCQs[currentQuestion] || null;
  }, [filteredMCQs, currentQuestion]);

  const examSessions = useMemo(() => {
    return [...new Set(directTaxMcqQuestions?.map(q => q.examSession).filter(Boolean) || [])];
  }, []);

  const topics = useMemo(() => {
    return [...new Set(directTaxMcqQuestions?.map(q => q.topic).filter(Boolean) || [])];
  }, []);

  const answeredQuestionMap = useMemo(() => {
    const map = new Map();
    progress.answered.forEach(a => map.set(a.id, a));
    return map;
  }, [progress.answered]);

  // Dashboard calculations
  const progressPercentage = useMemo(() => {
    return Math.round((progress.score.correct / Math.max(progress.score.total, 1)) * 100);
  }, [progress.score.correct, progress.score.total]);

  const circumference = 283;
  const progressOffset = useMemo(() => {
    return circumference - (progress.score.total / Math.max(totalMCQQuestions, 1)) * circumference;
  }, [progress.score.total, totalMCQQuestions]);

  const topicProgress = useMemo(() => {
    return topics.map(topic => {
      const topicQuestions = directTaxMcqQuestions.filter(q => q.topic === topic);
      const answeredCount = progress.answered.filter(a =>
        topicQuestions.some(q => q.id === a.id)
      ).length;
      const progressPercent = (answeredCount / Math.max(topicQuestions.length, 1)) * 100;
      return { topic, answeredCount, totalCount: topicQuestions.length, progress: progressPercent };
    });
  }, [topics, progress.answered]);

  // Reset context expansion when question changes
  useEffect(() => {
    setIsContextExpanded(true);
  }, [currentQuestion]);

  const handleFilterChange = useCallback((filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setShowExplanation(false);
  }, []);

  // Ensure current question index is valid when filtered questions change
  useEffect(() => {
    if (filteredMCQs.length > 0 && currentQuestion >= filteredMCQs.length) {
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setIsSubmitted(false);
      setShowExplanation(false);
    }
  }, [filteredMCQs.length, currentQuestion]);

  const handleQuestionSelect = useCallback((index) => {
    setCurrentQuestion(index);
    const question = filteredMCQs[index];
    if (question) {
      setSelectedAnswer(mcqAnswers[question.id] ?? null);
      setIsSubmitted(!!mcqAnswers[question.id]);
      setShowExplanation(false);
    }
  }, [filteredMCQs, mcqAnswers]);

  const handleAnswerSelect = useCallback((optionId) => {
    if (!isSubmitted) {
      setSelectedAnswer(optionId);
    }
  }, [isSubmitted]);

  const toggleContext = useCallback(() => {
    setIsContextExpanded(prev => !prev);
  }, []);

  const handleAnswerSubmit = useCallback(() => {
    if (selectedAnswer === null || !currentQuestionData) return;
    
    setIsSubmitted(true);
    setMcqAnswers(prev => ({
      ...prev,
      [currentQuestionData.id]: selectedAnswer
    }));
    
    if (selectedAnswer === currentQuestionData.correctAnswer) {
      setMcqScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setMcqScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  }, [selectedAnswer, currentQuestionData]);

  const nextQuestion = useCallback(() => {
    if (currentQuestion < filteredMCQs.length - 1) {
      const nextIndex = currentQuestion + 1;
      const nextQuestion = filteredMCQs[nextIndex];
      setCurrentQuestion(nextIndex);
      setSelectedAnswer(mcqAnswers[nextQuestion?.id] ?? null);
      setIsSubmitted(!!mcqAnswers[nextQuestion?.id]);
      setShowExplanation(false);
    }
  }, [currentQuestion, filteredMCQs, mcqAnswers]);

  const prevQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      const prevIndex = currentQuestion - 1;
      const prevQuestion = filteredMCQs[prevIndex];
      setCurrentQuestion(prevIndex);
      setSelectedAnswer(mcqAnswers[prevQuestion?.id] ?? null);
      setIsSubmitted(!!mcqAnswers[prevQuestion?.id]);
      setShowExplanation(false);
    }
  }, [currentQuestion, filteredMCQs, mcqAnswers]);

  // FULL DASHBOARD RENDER
  const renderDashboard = () => (
    <div className="dt-dashboard">
      <div className="dt-hero">
        <div className="dt-progress-ring" style={{ position: 'relative', width: '120px', height: '120px' }}>
          <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
            <circle className="dt-progress-bg" cx="50" cy="50" r="45" fill="none" stroke="#2d3648" strokeWidth="8" />
            <circle
              className="dt-progress-fill"
              cx="50" cy="50" r="45"
              fill="none" stroke="#14b8a6" strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              style={{ transition: 'stroke-dashoffset 0.35s ease-in-out' }}
            />
          </svg>
          <div className="dt-progress-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <span className="dt-progress-value">{progressPercentage}%</span>
            <span className="dt-progress-label">Accuracy</span>
          </div>
        </div>
        <div className="dt-hero-info">
          <h1>Direct Tax Laws & International Taxation</h1>
          <p>CA Final Paper 4 - Practice Module</p>
        </div>
      </div>

      <div className="dt-stats-grid">
        <div className="dt-stat-card">
          <span className="dt-stat-value">{progress.score.total}</span>
          <span className="dt-stat-label">Questions Solved</span>
        </div>
        <div className="dt-stat-card">
          <span className="dt-stat-value">{progress.score.correct}</span>
          <span className="dt-stat-label">Correct Answers</span>
        </div>
        <div className="dt-stat-card">
          <span className="dt-stat-value">{totalMCQQuestions}</span>
          <span className="dt-stat-label">Total MCQs</span>
        </div>
        <div className="dt-stat-card">
          <span className="dt-stat-value">{totalLongAnswerQuestions}</span>
          <span className="dt-stat-label">Long Answer Questions</span>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
        <button 
          onClick={() => {
            if (window.confirm('Reset all progress? This cannot be undone.')) {
              localStorage.removeItem('directTaxProgress');
              setProgress({
                score: { correct: 0, incorrect: 0, total: 0 },
                answered: []
              });
              setCurrentQuestion(0);
              setSelectedAnswer(null);
              setShowExplanation(false);
              alert('Progress reset successfully!');
            }
          }}
          style={{
            padding: '0.75rem 1.5rem',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            color: '#f87171',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}
        >
          🗑️ Reset All Progress
        </button>
      </div>

      <div className="dt-topics-grid">
        <h2>Topics</h2>
        <div className="dt-topics">
          {topicProgress.map(({ topic, answeredCount, totalCount, progress: progressPercent }) => (
            <div key={topic} className="dt-topic-card">
              <h3>{topic}</h3>
              <div className="dt-topic-progress">
                <div className="dt-topic-progress-fill" style={{ width: `${progressPercent}%` }} />
              </div>
              <span>{answeredCount}/{totalCount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMCQ = () => {
    if (!currentQuestionData) {
      return <div className="dt-no-questions">No questions available</div>;
    }

    return (
      <div className="dt-mcq-container">
        <div className="dt-mcq-sidebar">
          <div className="dt-filters">
            <select value={filters.examSession} onChange={e => handleFilterChange('examSession', e.target.value)}>
              <option value="all">All Sessions</option>
              {examSessions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={filters.topic} onChange={e => handleFilterChange('topic', e.target.value)}>
              <option value="all">All Topics</option>
              {topics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          
          <div className="dt-question-palette">
            {filteredMCQs.map((q, idx) => {
              let paletteClass = 'dt-palette-btn';
              if (idx === currentQuestion) paletteClass += ' active';
              if (mcqAnswers[q.id] !== undefined) {
                paletteClass += mcqAnswers[q.id] === q.correctAnswer ? ' correct' : ' incorrect';
              }
              return (
                <button
                  key={q.id}
                  className={paletteClass}
                  onClick={() => handleQuestionSelect(idx)}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="dt-mcq-main">
          <div className="dt-question-header">
            <span className="dt-badge dt-badge-session">{currentQuestionData.examSession}</span>
            <span className="dt-badge dt-badge-topic">{currentQuestionData.topic}</span>
            {currentQuestionData.sectionReference && (
              <span className="dt-badge dt-badge-section">{currentQuestionData.sectionReference}</span>
            )}
            <span className="dt-badge dt-badge-marks">{currentQuestionData.marks} Marks</span>
          </div>

          {/* Case Study Context Panel */}
          {currentQuestionData.caseContext && (
            <div className="dt-case-context-panel">
              <div className="dt-case-context-header" onClick={toggleContext}>
                <span>📋 Case Study Context</span>
                <span className="dt-toggle-icon">{isContextExpanded ? '▼' : '▶'}</span>
              </div>
              {isContextExpanded && (
                <div className="dt-case-context-body">
                  {currentQuestionData.caseContext}
                </div>
              )}
            </div>
          )}

          <div className="dt-question-text">
            <p><strong>Q{currentQuestion + 1}.</strong> {currentQuestionData.question}</p>
          </div>

          <div className="dt-options">
            {currentQuestionData.options?.map((option, idx) => {
              let optionClass = 'dt-option';
              if (isSubmitted) {
                if (idx === currentQuestionData.correctAnswer) optionClass += ' correct';
                else if (idx === selectedAnswer && idx !== currentQuestionData.correctAnswer) optionClass += ' incorrect';
              } else if (idx === selectedAnswer) {
                optionClass += ' selected';
              }
              return (
                <button
                  key={idx}
                  className={optionClass}
                  onClick={() => handleAnswerSelect(idx)}
                  disabled={isSubmitted}
                >
                  <span className="dt-option-label">{String.fromCharCode(65 + idx)}</span>
                  <span className="dt-option-text">{option}</span>
                  {isSubmitted && idx === currentQuestionData.correctAnswer && (
                    <span className="dt-option-indicator" style={{ color: '#10b981', marginLeft: '0.5rem' }}>✓</span>
                  )}
                  {isSubmitted && idx === selectedAnswer && idx !== currentQuestionData.correctAnswer && (
                    <span className="dt-option-indicator" style={{ color: '#ef4444', marginLeft: '0.5rem' }}>✗</span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="dt-action-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            {!isSubmitted ? (
              <button 
                className="dt-submit-btn"
                onClick={handleAnswerSubmit}
                disabled={selectedAnswer === null}
              >
                Submit Answer
              </button>
            ) : (
              <>
                <button 
                  className="dt-btn-secondary"
                  onClick={() => setShowExplanation(!showExplanation)}
                >
                  {showExplanation ? 'Hide' : 'Show'} Explanation
                </button>
                <button 
                  className="dt-submit-btn"
                  onClick={nextQuestion}
                  disabled={currentQuestion === filteredMCQs.length - 1}
                >
                  Next Question →
                </button>
              </>
            )}
          </div>

          {isSubmitted && (
            <div className={`dt-result-banner ${selectedAnswer === currentQuestionData.correctAnswer ? 'correct' : 'incorrect'}`} style={{
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: selectedAnswer === currentQuestionData.correctAnswer 
                ? 'rgba(16, 185, 129, 0.1)' 
                : 'rgba(239, 68, 68, 0.1)',
              border: `1px solid ${selectedAnswer === currentQuestionData.correctAnswer ? '#10b981' : '#ef4444'}`
            }}>
              <span style={{ fontSize: '1.25rem' }}>
                {selectedAnswer === currentQuestionData.correctAnswer ? '🎉' : '❌'}
              </span>
              <span style={{ color: '#f1f5f9' }}>
                {selectedAnswer === currentQuestionData.correctAnswer 
                  ? 'Correct! Well done!' 
                  : `Incorrect. The correct answer is ${String.fromCharCode(65 + currentQuestionData.correctAnswer)}`}
              </span>
            </div>
          )}

          {showExplanation && (
            <div className="dt-explanation">
              <h3>Detailed Explanation</h3>
              <div className="dt-explanation-content">
                <p>{currentQuestionData.explanation}</p>
              </div>
              {selectedAnswer !== currentQuestionData.correctAnswer && currentQuestionData.whereWentWrong && (
                <div className="dt-where-wrong">
                  <h4>Where You Went Wrong</h4>
                  <p>{currentQuestionData.whereWentWrong[selectedAnswer]}</p>
                </div>
              )}
            </div>
          )}

          <div className="dt-navigation">
            <button onClick={prevQuestion} disabled={currentQuestion === 0}>← Previous</button>
            <span>{currentQuestion + 1} / {filteredMCQs.length}</span>
            <button onClick={nextQuestion} disabled={currentQuestion === filteredMCQs.length - 1}>Next →</button>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="dt-container">
      <header className="dt-header">
        <button className="dt-back-btn" onClick={() => navigate('/')}>← Back</button>
        <div className="dt-header-title">
          <h1>Direct Tax Laws</h1>
        </div>
      </header>

      <nav className="dt-nav">
        <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>Dashboard</button>
        <button className={activeTab === 'mcq' ? 'active' : ''} onClick={() => setActiveTab('mcq')}>MCQ Practice</button>
        <button className={activeTab === 'long' ? 'active' : ''} onClick={() => setActiveTab('long')}>Long Answer</button>
      </nav>
      <main className="dt-main">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'mcq' && renderMCQ()}
        {activeTab === 'long' && <LongAnswerPractice />}
      </main>
    </div>
  );
};

export default DirectTaxDashboard;
