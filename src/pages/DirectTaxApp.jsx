import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SiteLogo from '../components/SiteLogo';
import { analyzeAnswer } from '../services/geminiService';
import { GeminiAnalysisUI } from '../components/GeminiAnalysisUI';
import { directTaxMcqQuestions, directTaxLongAnswerQuestions } from '../data/directTaxQuestions.js';
import './DirectTaxApp.css';

const DirectTaxDashboard = () => {
  const navigate = useNavigate();
  
  // Calculate counts once - ensure data is available
  const totalMCQQuestions = directTaxMcqQuestions?.length || 0;
  const totalLongAnswerQuestions = directTaxLongAnswerQuestions?.length || 0;
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Lazy initialize progress from localStorage
  const [progress, setProgress] = useState(() => {
    try {
      const savedProgress = localStorage.getItem('directTaxProgress');
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        return {
          score: parsed.score || { correct: 0, incorrect: 0, total: 0 },
          answered: parsed.answered || []
        };
      }
    } catch (e) {
      console.error('Error loading progress:', e);
    }
    return {
      score: { correct: 0, incorrect: 0, total: 0 },
      answered: []
    };
  });
  
  const [isContextExpanded, setIsContextExpanded] = useState(true);
  const [filters, setFilters] = useState({
    examSession: 'all',
    topic: 'all',
    difficulty: 'all'
  });
  
  // Long Answer Practice State
  const [longAnswerIndex, setLongAnswerIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showWorkingNotes, setShowWorkingNotes] = useState(false);
  const [selfScore, setSelfScore] = useState({});
  const [geminiAnalysis, setGeminiAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState(null);
  
  // SVG animation state
  const [animateProgress, setAnimateProgress] = useState(false);

  // Memoize filtered questions
  const filteredMCQs = useMemo(() => {
    return directTaxMcqQuestions.filter(q => {
      if (filters.examSession !== 'all' && q.examSession !== filters.examSession) return false;
      if (filters.topic !== 'all' && q.topic !== filters.topic) return false;
      if (filters.difficulty !== 'all' && q.difficulty !== filters.difficulty) return false;
      return true;
    });
  }, [filters.examSession, filters.topic, filters.difficulty]);

  // Memoize unique filter values
  const examSessions = useMemo(() => {
    return [...new Set(directTaxMcqQuestions.map(q => q.examSession).filter(Boolean))];
  }, []);

  const topics = useMemo(() => {
    return [...new Set(directTaxMcqQuestions.map(q => q.topic).filter(Boolean))];
  }, []);

  const difficulties = useMemo(() => ['Easy', 'Medium', 'Hard'], []);

  // Current question (memoized)
  const currentQuestionData = useMemo(() => {
    return filteredMCQs[currentQuestion] || null;
  }, [filteredMCQs, currentQuestion]);

  // Memoize answered question lookup
  const answeredQuestionMap = useMemo(() => {
    const map = new Map();
    progress.answered.forEach(a => {
      map.set(a.id, a);
    });
    return map;
  }, [progress.answered]);

  // Debounced localStorage save
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem('directTaxProgress', JSON.stringify({
          score: progress.score,
          answered: progress.answered
        }));
      } catch (e) {
        console.error('Error saving progress:', e);
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [progress]);

  // Reset selection when question changes
  useEffect(() => {
    if (currentQuestionData) {
      const answered = answeredQuestionMap.get(currentQuestionData.id);
      setSelectedAnswer(answered?.selected ?? null);
      setShowExplanation(!!answered);
      setIsContextExpanded(true);
    }
  }, [currentQuestionData, answeredQuestionMap]);

  // Trigger progress animation when score changes
  useEffect(() => {
    setAnimateProgress(true);
    const timer = setTimeout(() => setAnimateProgress(false), 400);
    return () => clearTimeout(timer);
  }, [progress.score.total]);

  // Memoized handlers
  const handleAnswerSelect = useCallback((optionId) => {
    if (!showExplanation && !answeredQuestionMap.has(currentQuestionData?.id)) {
      setSelectedAnswer(optionId);
    }
  }, [showExplanation, currentQuestionData, answeredQuestionMap]);

  const handleAnswerSubmit = useCallback(() => {
    if (selectedAnswer === null || !currentQuestionData) {
      return;
    }
    
    const questionId = currentQuestionData.id;
    
    // Check if already answered
    if (answeredQuestionMap.has(questionId)) {
      setShowExplanation(true);
      return;
    }
    
    const isCorrect = selectedAnswer === currentQuestionData.correctAnswer;
    
    setShowExplanation(true);
    setProgress(prev => ({
      score: {
        correct: prev.score.correct + (isCorrect ? 1 : 0),
        incorrect: prev.score.incorrect + (isCorrect ? 0 : 1),
        total: prev.score.total + 1
      },
      answered: [...prev.answered, {
        id: questionId,
        selected: selectedAnswer,
        correct: isCorrect
      }]
    }));
  }, [selectedAnswer, currentQuestionData, answeredQuestionMap]);

  const nextQuestion = useCallback(() => {
    if (currentQuestion < filteredMCQs.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  }, [currentQuestion, filteredMCQs.length]);

  const prevQuestion = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  }, [currentQuestion]);

  const handleQuestionSelect = useCallback((index) => {
    setCurrentQuestion(index);
  }, []);

  const handleFilterChange = useCallback((filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setCurrentQuestion(0);
  }, []);

  const toggleContext = useCallback(() => {
    setIsContextExpanded(prev => !prev);
  }, []);

  // Memoize topic progress calculations
  const topicProgress = useMemo(() => {
    return topics.map(topic => {
      const topicQuestions = directTaxMcqQuestions.filter(q => q.topic === topic);
      const answeredCount = progress.answered.filter(a => 
        topicQuestions.some(q => q.id === a.id)
      ).length;
      const progressPercent = (answeredCount / Math.max(topicQuestions.length, 1)) * 100;
      
      return {
        topic,
        answeredCount,
        totalCount: topicQuestions.length,
        progress: progressPercent
      };
    });
  }, [topics, progress.answered]);

  // Calculate progress percentage for SVG
  const progressPercentage = useMemo(() => {
    return Math.round((progress.score.correct / Math.max(progress.score.total, 1)) * 100);
  }, [progress.score.correct, progress.score.total]);

  const progressCircumference = 283; // 2 * PI * 45
  const progressOffset = useMemo(() => {
    return progressCircumference - (progress.score.total / Math.max(totalMCQQuestions, 1)) * progressCircumference;
  }, [progress.score.total, totalMCQQuestions, progressCircumference]);

  // Render methods for each tab
  const renderDashboard = useCallback(() => {
    return (
      <div className="dt-dashboard">
        <div className="dt-hero">
          <div className="dt-progress-ring">
            <svg viewBox="0 0 100 100">
              <circle className="dt-progress-bg" cx="50" cy="50" r="45" />
              <circle 
                className="dt-progress-fill" 
                cx="50" cy="50" r="45"
                strokeDasharray={`${progressCircumference} ${progressCircumference}`}
                strokeDashoffset={progressOffset}
                style={{ 
                  transition: animateProgress ? 'stroke-dashoffset 0.35s ease-in-out' : 'none',
                  willChange: animateProgress ? 'stroke-dashoffset' : 'auto'
                }}
              />
            </svg>
            <div className="dt-progress-text">
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

        <div className="dt-topics-grid">
          <h2>Topics</h2>
          <div className="dt-topics">
            {topicProgress.map(({ topic, answeredCount, totalCount, progress: progressPercent }) => (
              <div key={topic} className="dt-topic-card">
                <h3>{topic}</h3>
                <div className="dt-topic-progress">
                  <div 
                    className="dt-topic-progress-fill" 
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span>{answeredCount}/{totalCount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }, [progress, totalMCQQuestions, totalLongAnswerQuestions, topicProgress, progressPercentage, progressOffset, animateProgress, progressCircumference]);

  // Memoized question palette button component
  const QuestionPaletteButton = React.memo(({ question, index, isActive, status, onClick }) => (
    <button
      key={question.id}
      className={`dt-palette-btn ${status} ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {index + 1}
    </button>
  ));

  const renderMCQ = useCallback(() => {
    if (filteredMCQs.length === 0) {
      return (
        <div className="dt-no-questions">
          <p>No questions match your filters</p>
          <p>Total questions available: {totalMCQQuestions}</p>
          <p>Try adjusting your filter settings.</p>
        </div>
      );
    }

    if (!currentQuestionData) {
      return <div className="dt-no-questions">Question not found at index {currentQuestion}</div>;
    }
    
    const answered = answeredQuestionMap.get(currentQuestionData.id);

    return (
      <div className="dt-mcq-container">
        <div className="dt-mcq-sidebar">
          <div className="dt-filters">
            <select 
              value={filters.examSession} 
              onChange={e => handleFilterChange('examSession', e.target.value)}
            >
              <option value="all">All Sessions</option>
              {examSessions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select 
              value={filters.topic} 
              onChange={e => handleFilterChange('topic', e.target.value)}
            >
              <option value="all">All Topics</option>
              {topics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select 
              value={filters.difficulty} 
              onChange={e => handleFilterChange('difficulty', e.target.value)}
            >
              <option value="all">All Difficulties</option>
              {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          
          <div className="dt-question-palette">
            {filteredMCQs.map((q, idx) => {
              const ans = answeredQuestionMap.get(q.id);
              let status = 'unanswered';
              if (ans) status = ans.correct ? 'correct' : 'incorrect';
              
              return (
                <QuestionPaletteButton
                  key={q.id}
                  question={q}
                  index={idx}
                  isActive={idx === currentQuestion}
                  status={status}
                  onClick={() => handleQuestionSelect(idx)}
                />
              );
            })}
          </div>
        </div>

        <div className="dt-mcq-main">
          {currentQuestionData.caseContext && (
            <div className="dt-case-context-panel">
              <div className="dt-case-context-header" onClick={toggleContext}>
                <span>📋 Case Study Context</span>
                <span className="dt-toggle-icon">{isContextExpanded ? '▼' : '▶'}</span>
              </div>
              {isContextExpanded && (
                <div className="dt-case-context-body">
                  <pre>{currentQuestionData.caseContext}</pre>
                </div>
              )}
            </div>
          )}

          <div className="dt-question-header">
            <span className="dt-badge dt-badge-session">{currentQuestionData.examSession}</span>
            <span className="dt-badge dt-badge-topic">{currentQuestionData.topic}</span>
            {currentQuestionData.sectionReference && (
              <span className="dt-badge dt-badge-section">{currentQuestionData.sectionReference}</span>
            )}
            <span className={`dt-badge dt-badge-difficulty dt-${currentQuestionData.difficulty?.toLowerCase() || 'medium'}`}>
              {currentQuestionData.difficulty}
            </span>
            <span className="dt-badge dt-badge-marks">{currentQuestionData.marks} Marks</span>
          </div>

          <div className="dt-question-text">
            <p><strong>Q{currentQuestion + 1}.</strong> {currentQuestionData.question}</p>
          </div>

          <div className="dt-options">
            {currentQuestionData.options.map((option, idx) => {
              let optionClass = 'dt-option';
              if (showExplanation || answered) {
                if (idx === currentQuestionData.correctAnswer) optionClass += ' correct';
                else if (idx === (answered?.selected ?? selectedAnswer)) optionClass += ' incorrect';
              } else if (idx === selectedAnswer) {
                optionClass += ' selected';
              }

              return (
                <button
                  key={idx}
                  className={optionClass}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAnswerSelect(idx);
                  }}
                  disabled={showExplanation || !!answered}
                  type="button"
                >
                  <span className="dt-option-label">{String.fromCharCode(65 + idx)}</span>
                  <span className="dt-option-text">{option}</span>
                </button>
              );
            })}
          </div>

          {!showExplanation && !answered && (
            <button 
              className="dt-submit-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAnswerSubmit();
              }}
              disabled={selectedAnswer === null || selectedAnswer === undefined}
            >
              Submit Answer
            </button>
          )}

          {(showExplanation || answered) && (
            <div className="dt-explanation">
              <h3>Explanation</h3>
              <div className="dt-explanation-content">
                {currentQuestionData.explanation.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              
              {(answered?.selected ?? selectedAnswer) !== currentQuestionData.correctAnswer && 
                currentQuestionData.whereWentWrong && currentQuestionData.whereWentWrong[answered?.selected ?? selectedAnswer] && (
                <div className="dt-where-wrong">
                  <h4>Where You Went Wrong</h4>
                  <p>{currentQuestionData.whereWentWrong[answered?.selected ?? selectedAnswer]}</p>
                </div>
              )}
            </div>
          )}

          <div className="dt-navigation">
            <button onClick={prevQuestion} disabled={currentQuestion === 0}>
              ← Previous
            </button>
            <span>{currentQuestion + 1} / {filteredMCQs.length}</span>
            <button onClick={nextQuestion} disabled={currentQuestion === filteredMCQs.length - 1}>
              Next →
            </button>
          </div>
        </div>
      </div>
    );
  }, [filteredMCQs, currentQuestion, currentQuestionData, selectedAnswer, showExplanation, filters, examSessions, topics, difficulties, answeredQuestionMap, isContextExpanded, handleFilterChange, handleQuestionSelect, handleAnswerSelect, handleAnswerSubmit, prevQuestion, nextQuestion, toggleContext, totalMCQQuestions]);

  // Long Answer Practice Handlers
  const handleLongAnswerSubmit = useCallback(() => {
    if (userAnswer.trim()) {
      setIsSubmitted(true);
    }
  }, [userAnswer]);

  const handleSelfScore = useCallback((criterionIndex, score) => {
    setSelfScore(prev => ({
      ...prev,
      [criterionIndex]: score
    }));
  }, []);

  const getTotalSelfScore = useCallback(() => {
    return Object.values(selfScore).reduce((sum, val) => sum + val, 0);
  }, [selfScore]);

  const getMaxScore = useCallback(() => {
    const currentQ = directTaxLongAnswerQuestions?.[longAnswerIndex];
    return currentQ?.rubric?.reduce((sum, r) => sum + r.maxScore, 0) || 0;
  }, [longAnswerIndex]);

  const handleGeminiAnalysis = useCallback(async () => {
    if (!userAnswer.trim()) {
      setAnalysisError('Please submit your answer first');
      return;
    }

    const currentQ = directTaxLongAnswerQuestions?.[longAnswerIndex];
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
  }, [userAnswer, longAnswerIndex]);

  const resetLongAnswerState = useCallback(() => {
    setUserAnswer('');
    setIsSubmitted(false);
    setShowSolution(false);
    setShowWorkingNotes(false);
    setSelfScore({});
    setGeminiAnalysis(null);
    setAnalysisError(null);
  }, []);

  const handleLongAnswerNext = useCallback(() => {
    if (longAnswerIndex < totalLongAnswerQuestions - 1) {
      setLongAnswerIndex(prev => prev + 1);
      resetLongAnswerState();
    }
  }, [longAnswerIndex, totalLongAnswerQuestions, resetLongAnswerState]);

  const handleLongAnswerPrevious = useCallback(() => {
    if (longAnswerIndex > 0) {
      setLongAnswerIndex(prev => prev - 1);
      resetLongAnswerState();
    }
  }, [longAnswerIndex, resetLongAnswerState]);

  const handleLongAnswerPaletteClick = useCallback((index) => {
    setLongAnswerIndex(index);
    resetLongAnswerState();
  }, [resetLongAnswerState]);

  // Memoize word count calculation
  const wordCount = useMemo(() => {
    return userAnswer.split(/\s+/).filter(w => w).length;
  }, [userAnswer]);

  const renderLongAnswer = useCallback(() => {
    const questions = Array.isArray(directTaxLongAnswerQuestions) 
      ? directTaxLongAnswerQuestions 
      : [];
    const count = questions.length;
    
    if (count === 0) {
      return (
        <div className="dt-long-answer">
          <div className="dt-no-questions">
            <h2>Long Answer Practice</h2>
            <p>No long answer questions available yet.</p>
          </div>
        </div>
      );
    }

    const currentQ = questions[longAnswerIndex];
    if (!currentQ) return null;

    return (
      <div className="dt-long-answer-practice">
        <div className="dt-practice-header">
          <div className="dt-question-nav">
            <button 
              className="dt-nav-arrow" 
              onClick={handleLongAnswerPrevious}
              disabled={longAnswerIndex === 0}
            >
              ←
            </button>
            <span className="dt-question-counter">
              Question {longAnswerIndex + 1} of {count}
            </span>
            <button 
              className="dt-nav-arrow" 
              onClick={handleLongAnswerNext}
              disabled={longAnswerIndex === count - 1}
            >
              →
            </button>
          </div>
        </div>

        <div className="dt-case-study-container">
          <div className="dt-question-meta">
            <span className="dt-badge dt-badge-session">{currentQ.examSession}</span>
            <span className="dt-badge dt-badge-topic">{currentQ.topic}</span>
            <span className="dt-badge dt-badge-marks">{currentQ.marks} Marks</span>
          </div>

          <div className="dt-question-section">
            <h3>Problem Statement</h3>
            <div className="dt-question-text dt-case-study-text">
              <pre>{currentQ.question}</pre>
            </div>
          </div>

          <div className="dt-answer-section">
            <h3>Your Answer</h3>
            {!isSubmitted ? (
              <>
                <div className="dt-answer-input-container">
                  <textarea
                    className="dt-answer-textarea"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Write your detailed answer here...

For calculation questions:
• Use tables where appropriate
• Show step-by-step working
• Include formulas and assumptions

For analysis questions:
• Structure your answer with clear headings
• Provide reasoning for each point
• Include relevant calculations"
                    rows={15}
                  />
                  <div className="dt-textarea-footer">
                    <span className="dt-word-count">{wordCount} words</span>
                  </div>
                </div>
                <button 
                  className="dt-btn-primary dt-submit-btn"
                  onClick={handleLongAnswerSubmit}
                  disabled={!userAnswer.trim()}
                >
                  Submit Answer
                </button>
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
                  <div className="dt-error-message" style={{ marginTop: '1rem' }}>
                    <p>⚠️ {analysisError}</p>
                    <button className="dt-retry-btn" onClick={handleGeminiAnalysis}>Retry</button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Gemini AI Analysis Section */}
          {isSubmitted && geminiAnalysis && (
            <GeminiAnalysisUI
              geminiAnalysis={geminiAnalysis}
              rubric={currentQ.rubric}
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
                  <pre>{currentQ.modelAnswer}</pre>
                </div>
                
                {/* Working Notes Expandable Section */}
                {currentQ.workingNotes && (
                  <div className="dt-working-notes-section">
                    <button 
                      className="dt-working-notes-toggle"
                      onClick={() => setShowWorkingNotes(!showWorkingNotes)}
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        style={{ transform: showWorkingNotes ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                      >
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                      <span>Working Notes</span>
                    </button>
                    {showWorkingNotes && (
                      <div className="dt-working-notes-content">
                        <pre>{currentQ.workingNotes}</pre>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="dt-self-evaluation-section">
                <h3>Self Evaluation</h3>
                <p className="dt-evaluation-instructions">
                  Compare your answer with the model answer and score yourself on each criterion:
                </p>
                <div className="dt-rubric-grid">
                  {currentQ.rubric?.map((criterion, index) => (
                    <div key={index} className="dt-rubric-item">
                      <div className="dt-rubric-criterion">
                        <span className="dt-criterion-text">{criterion.description}</span>
                        <span className="dt-criterion-max">Max: {criterion.maxScore} marks</span>
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
                  <span>Total Self Score:</span>
                  <span className="dt-score-value">
                    {getTotalSelfScore()} / {getMaxScore()}
                  </span>
                  <span className="dt-percentage">
                    ({getMaxScore() > 0 ? ((getTotalSelfScore() / getMaxScore()) * 100).toFixed(1) : 0}%)
                  </span>
                </div>
              </div>

              <div className="dt-improvement-tips">
                <h4>Key Takeaways & Improvement Tips</h4>
                <ul>
                  <li>Always show step-by-step calculations with proper formulas</li>
                  <li>Present data in tabular format for clarity</li>
                  <li>Include brief reasoning for each calculation step</li>
                  <li>Check if all parts of the question are addressed</li>
                  <li>Verify your final answers with logical checks</li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="dt-case-study-palette">
          <h4>Questions</h4>
          <div className="dt-palette-list">
            {questions.map((q, index) => (
              <button
                key={q.id || index}
                className={`dt-palette-item ${index === longAnswerIndex ? 'current' : ''}`}
                onClick={() => handleLongAnswerPaletteClick(index)}
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
  }, [longAnswerIndex, userAnswer, isSubmitted, showSolution, showWorkingNotes, selfScore, geminiAnalysis, isAnalyzing, analysisError, wordCount, handleLongAnswerSubmit, handleGeminiAnalysis, handleLongAnswerPrevious, handleLongAnswerNext, handleLongAnswerPaletteClick, getTotalSelfScore, getMaxScore, handleSelfScore, totalLongAnswerQuestions]);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="dt-container">
      <header className="dt-header">
        <button className="dt-back-btn" onClick={() => navigate('/')}>
          ← Back
        </button>
        <div className="dt-header-title">
          <SiteLogo showText={true} />
          <div>
            <h1>CA Final</h1>
            <span>Direct Tax Laws & International Taxation</span>
          </div>
        </div>
      </header>

      <nav className="dt-nav">
        <button 
          className={activeTab === 'dashboard' ? 'active' : ''} 
          onClick={() => handleTabChange('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={activeTab === 'mcq' ? 'active' : ''} 
          onClick={() => handleTabChange('mcq')}
        >
          MCQ Practice
        </button>
        <button 
          className={activeTab === 'long' ? 'active' : ''} 
          onClick={() => handleTabChange('long')}
        >
          Long Answer
        </button>
      </nav>

      <main className="dt-main">
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'mcq' && renderMCQ()}
        {activeTab === 'long' && renderLongAnswer()}
      </main>
    </div>
  );
};

export default React.memo(DirectTaxDashboard);
