import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SiteLogo from '../components/SiteLogo';
import { analyzeAnswer } from '../services/geminiService';
import { GeminiAnalysisUI } from '../components/GeminiAnalysisUI';
import { directTaxMcqQuestions, directTaxLongAnswerQuestions } from '../data/directTaxQuestions.js';
import './DirectTaxApp.css';

const DirectTaxDashboard = () => {
  const navigate = useNavigate();
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
      const answered = answeredQuestions.find(a => a.id === question?.id);
      setSelectedAnswer(answered?.selected ?? null);
      setShowExplanation(!!answered);
      setIsContextExpanded(true);
    }
  }, [currentQuestion, filteredMCQs]);

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null) return;
    
    const question = filteredMCQs[currentQuestion];
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
  const renderDashboard = () => (
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

  const renderMCQ = () => {
    if (filteredMCQs.length === 0) {
      return <div className="dt-no-questions">No questions match your filters</div>;
    }

    const question = filteredMCQs[currentQuestion];
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
                  onClick={() => !showExplanation && !answered && setSelectedAnswer(idx)}
                  disabled={showExplanation || !!answered}
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
              onClick={handleAnswerSubmit}
              disabled={selectedAnswer === null}
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

  const renderLongAnswer = () => {
    return (
      <div className="dt-long-answer">
        <div className="dt-long-header">
          <h2>Long Answer Practice</h2>
          <p>{directTaxLongAnswerQuestions.length} comprehensive problems available</p>
        </div>
        <div className="dt-long-content">
          <p>Long Answer practice section will be implemented here.</p>
          <p>This will include:</p>
          <ul>
            <li>Case study questions</li>
            <li>Detailed answer submission</li>
            <li>AI-powered analysis</li>
            <li>Model answers and rubrics</li>
          </ul>
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
