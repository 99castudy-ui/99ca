import React, { useState, useEffect } from 'react';
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
  
  // Debug logs
  console.log('=== DirectTaxDashboard Component Load ===');
  console.log('directTaxLongAnswerQuestions:', directTaxLongAnswerQuestions);
  console.log('totalLongAnswerQuestions:', totalLongAnswerQuestions);
  console.log('Is Array:', Array.isArray(directTaxLongAnswerQuestions));
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0, total: 0 });
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
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

  // Filter questions based on selected filters
  const filteredMCQs = directTaxMcqQuestions.filter(q => {
    if (filters.examSession !== 'all' && q.examSession !== filters.examSession) return false;
    if (filters.topic !== 'all' && q.topic !== filters.topic) return false;
    if (filters.difficulty !== 'all' && q.difficulty !== filters.difficulty) return false;
    return true;
  });

  // Get unique values for filters
  const examSessions = [...new Set(directTaxMcqQuestions.map(q => q.examSession).filter(Boolean))];
  const topics = [...new Set(directTaxMcqQuestions.map(q => q.topic).filter(Boolean))];
  const difficulties = ['Easy', 'Medium', 'Hard'];

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('directTaxProgress');
    if (savedProgress) {
      try {
        const { score: savedScore, answered } = JSON.parse(savedProgress);
        setScore(savedScore || { correct: 0, incorrect: 0, total: 0 });
        setAnsweredQuestions(answered || []);
      } catch (e) {
        console.error('Error loading progress:', e);
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('directTaxProgress', JSON.stringify({
      score,
      answered: answeredQuestions
    }));
  }, [score, answeredQuestions]);

  // Restore selected answer when question changes
  useEffect(() => {
    if (filteredMCQs.length > 0 && currentQuestion < filteredMCQs.length) {
      const question = filteredMCQs[currentQuestion];
      if (question) {
        const answered = answeredQuestions.find(a => a.id === question.id);
        setSelectedAnswer(answered?.selected ?? null);
        setShowExplanation(!!answered);
        setIsContextExpanded(true);
      }
    }
  }, [currentQuestion]); // Removed filteredMCQs from dependencies to prevent unnecessary resets

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) {
      console.warn('No answer selected');
      return;
    }
    
    const question = filteredMCQs[currentQuestion];
    if (!question) {
      console.error('Question not found at index:', currentQuestion);
      return;
    }
    
    if (!question.id) {
      console.error('Question missing id:', question);
      return;
    }
    
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    // Check if already answered
    const alreadyAnswered = answeredQuestions.find(a => a.id === question.id);
    if (alreadyAnswered) {
      setShowExplanation(true);
      return;
    }
    
    setShowExplanation(true);
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
      total: prev.total + 1
    }));
    setAnsweredQuestions(prev => [...prev, {
      id: question.id,
      selected: selectedAnswer,
      correct: isCorrect
    }]);
  };

  const nextQuestion = () => {
    const nextIdx = Math.min(currentQuestion + 1, filteredMCQs.length - 1);
    setCurrentQuestion(nextIdx);
    const nextQ = filteredMCQs[nextIdx];
    const answered = answeredQuestions.find(a => a.id === nextQ?.id);
    setSelectedAnswer(answered?.selected ?? null);
    setShowExplanation(!!answered);
  };

  const prevQuestion = () => {
    const prevIdx = Math.max(currentQuestion - 1, 0);
    setCurrentQuestion(prevIdx);
    const prevQ = filteredMCQs[prevIdx];
    const answered = answeredQuestions.find(a => a.id === prevQ?.id);
    setSelectedAnswer(answered?.selected ?? null);
    setShowExplanation(!!answered);
  };

  // Render methods for each tab
  const renderDashboard = () => {
    // Use component-level variables
    const longAnswerCount = totalLongAnswerQuestions;
    const mcqCount = totalMCQQuestions;
    
    return (
    <div className="dt-dashboard">
      <div className="dt-hero">
        <div className="dt-progress-ring">
          <svg viewBox="0 0 100 100">
            <circle className="dt-progress-bg" cx="50" cy="50" r="45" />
            <circle 
              className="dt-progress-fill" 
              cx="50" cy="50" r="45"
              strokeDasharray={`${(score.total / Math.max(directTaxMcqQuestions.length, 1)) * 283} 283`}
            />
          </svg>
          <div className="dt-progress-text">
            <span className="dt-progress-value">{Math.round((score.correct / Math.max(score.total, 1)) * 100)}%</span>
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
          <span className="dt-stat-value">{score.total}</span>
          <span className="dt-stat-label">Questions Solved</span>
        </div>
        <div className="dt-stat-card">
          <span className="dt-stat-value">{score.correct}</span>
          <span className="dt-stat-label">Correct Answers</span>
        </div>
        <div className="dt-stat-card">
          <span className="dt-stat-value">{directTaxMcqQuestions.length}</span>
          <span className="dt-stat-label">Total MCQs</span>
        </div>
        <div className="dt-stat-card">
          <span className="dt-stat-value">{longAnswerCount}</span>
          <span className="dt-stat-label">Long Answer Questions</span>
        </div>
      </div>

      <div className="dt-topics-grid">
        <h2>Topics</h2>
        <div className="dt-topics">
          {topics.map(topic => {
            const topicQuestions = directTaxMcqQuestions.filter(q => q.topic === topic);
            const answeredCount = answeredQuestions.filter(a => 
              topicQuestions.some(q => q.id === a.id)
            ).length;
            const progress = (answeredCount / Math.max(topicQuestions.length, 1)) * 100;
            
            return (
              <div key={topic} className="dt-topic-card">
                <h3>{topic}</h3>
                <div className="dt-topic-progress">
                  <div 
                    className="dt-topic-progress-fill" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span>{answeredCount}/{topicQuestions.length}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    );
  };

  const renderMCQ = () => {
    // Debug: Log question counts
    console.log('Total MCQs:', directTaxMcqQuestions.length);
    console.log('Filtered MCQs:', filteredMCQs.length);
    console.log('Current question index:', currentQuestion);
    
    if (filteredMCQs.length === 0) {
      return (
        <div className="dt-no-questions">
          <p>No questions match your filters</p>
          <p>Total questions available: {directTaxMcqQuestions.length}</p>
          <p>Try adjusting your filter settings.</p>
        </div>
      );
    }

    const question = filteredMCQs[currentQuestion];
    if (!question) {
      return <div className="dt-no-questions">Question not found at index {currentQuestion}</div>;
    }
    
    const answered = answeredQuestions.find(a => a.id === question.id);

    return (
      <div className="dt-mcq-container">
        <div className="dt-mcq-sidebar">
          <div className="dt-filters">
            <select 
              value={filters.examSession} 
              onChange={e => {
                setFilters(prev => ({ ...prev, examSession: e.target.value }));
                setCurrentQuestion(0);
              }}
            >
              <option value="all">All Sessions</option>
              {examSessions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select 
              value={filters.topic} 
              onChange={e => {
                setFilters(prev => ({ ...prev, topic: e.target.value }));
                setCurrentQuestion(0);
              }}
            >
              <option value="all">All Topics</option>
              {topics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select 
              value={filters.difficulty} 
              onChange={e => {
                setFilters(prev => ({ ...prev, difficulty: e.target.value }));
                setCurrentQuestion(0);
              }}
            >
              <option value="all">All Difficulties</option>
              {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          
          <div className="dt-question-palette">
            {filteredMCQs.map((q, idx) => {
              const ans = answeredQuestions.find(a => a.id === q.id);
              let status = 'unanswered';
              if (ans) status = ans.correct ? 'correct' : 'incorrect';
              
              return (
                <button
                  key={q.id}
                  className={`dt-palette-btn ${status} ${idx === currentQuestion ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentQuestion(idx);
                    const q = filteredMCQs[idx];
                    const answered = answeredQuestions.find(a => a.id === q?.id);
                    setSelectedAnswer(answered?.selected ?? null);
                    setShowExplanation(!!answered);
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        <div className="dt-mcq-main">
          {question.caseContext && (
            <div className="dt-case-context-panel">
              <div className="dt-case-context-header" onClick={() => setIsContextExpanded(!isContextExpanded)}>
                <span>📋 Case Study Context</span>
                <span className="dt-toggle-icon">{isContextExpanded ? '▼' : '▶'}</span>
              </div>
              {isContextExpanded && (
                <div className="dt-case-context-body">
                  <pre>{question.caseContext}</pre>
                </div>
              )}
            </div>
          )}

          <div className="dt-question-header">
            <span className="dt-badge dt-badge-session">{question.examSession}</span>
            <span className="dt-badge dt-badge-topic">{question.topic}</span>
            {question.sectionReference && (
              <span className="dt-badge dt-badge-section">{question.sectionReference}</span>
            )}
            <span className={`dt-badge dt-badge-difficulty dt-${question.difficulty?.toLowerCase() || 'medium'}`}>
              {question.difficulty}
            </span>
            <span className="dt-badge dt-badge-marks">{question.marks} Marks</span>
          </div>

          <div className="dt-question-text">
            <p><strong>Q{currentQuestion + 1}.</strong> {question.question}</p>
          </div>

          <div className="dt-options">
            {question.options.map((option, idx) => {
              let optionClass = 'dt-option';
              if (showExplanation || answered) {
                if (idx === question.correctAnswer) optionClass += ' correct';
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
                    if (!showExplanation && !answered) {
                      setSelectedAnswer(idx);
                    }
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
                {question.explanation.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              
              {(answered?.selected ?? selectedAnswer) !== question.correctAnswer && 
                question.whereWentWrong && question.whereWentWrong[answered?.selected ?? selectedAnswer] && (
                <div className="dt-where-wrong">
                  <h4>Where You Went Wrong</h4>
                  <p>{question.whereWentWrong[answered?.selected ?? selectedAnswer]}</p>
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
  };

  // Long Answer Practice Handlers
  const handleLongAnswerSubmit = () => {
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
    const currentQ = directTaxLongAnswerQuestions?.[longAnswerIndex];
    return currentQ?.rubric?.reduce((sum, r) => sum + r.maxScore, 0) || 0;
  };

  const handleGeminiAnalysis = async () => {
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
  };

  const handleLongAnswerNext = () => {
    if (longAnswerIndex < totalLongAnswerQuestions - 1) {
      setLongAnswerIndex(prev => prev + 1);
      setUserAnswer('');
      setIsSubmitted(false);
      setShowSolution(false);
      setShowWorkingNotes(false);
      setSelfScore({});
      setGeminiAnalysis(null);
      setAnalysisError(null);
    }
  };

  const handleLongAnswerPrevious = () => {
    if (longAnswerIndex > 0) {
      setLongAnswerIndex(prev => prev - 1);
      setUserAnswer('');
      setIsSubmitted(false);
      setShowSolution(false);
      setShowWorkingNotes(false);
      setSelfScore({});
      setGeminiAnalysis(null);
      setAnalysisError(null);
    }
  };

  const handleLongAnswerPaletteClick = (index) => {
    setLongAnswerIndex(index);
    setUserAnswer('');
    setIsSubmitted(false);
    setShowSolution(false);
    setShowWorkingNotes(false);
    setSelfScore({});
    setGeminiAnalysis(null);
    setAnalysisError(null);
  };

  const renderLongAnswer = () => {
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

    const currentQuestion = questions[longAnswerIndex];
    if (!currentQuestion) return null;

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
            <span className="dt-badge dt-badge-session">{currentQuestion.examSession}</span>
            <span className="dt-badge dt-badge-topic">{currentQuestion.topic}</span>
            <span className="dt-badge dt-badge-marks">{currentQuestion.marks} Marks</span>
          </div>

          <div className="dt-question-section">
            <h3>Problem Statement</h3>
            <div className="dt-question-text dt-case-study-text">
              <pre>{currentQuestion.question}</pre>
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
                    <span className="dt-word-count">{userAnswer.split(/\s+/).filter(w => w).length} words</span>
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
                
                {/* Working Notes Expandable Section */}
                {currentQuestion.workingNotes && (
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
                        <pre>{currentQuestion.workingNotes}</pre>
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
                  {currentQuestion.rubric?.map((criterion, index) => (
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
  };

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
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={activeTab === 'mcq' ? 'active' : ''} 
          onClick={() => setActiveTab('mcq')}
        >
          MCQ Practice
        </button>
        <button 
          className={activeTab === 'long' ? 'active' : ''} 
          onClick={() => setActiveTab('long')}
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

export default DirectTaxDashboard;
