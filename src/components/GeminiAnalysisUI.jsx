// Reusable Gemini Analysis UI Component
import React from 'react';
import './GeminiAnalysis.css';

export const GeminiAnalysisUI = ({ geminiAnalysis, rubric, selfScore, getTotalSelfScore, getMaxScore }) => {
  if (!geminiAnalysis) return null;

  return (
    <div className="gemini-analysis-section">
      <div className="analysis-header">
        <h3>AI-Powered Step-by-Step Analysis</h3>
      </div>

      <div className="analysis-results">
        {/* Step Coverage Summary */}
        {geminiAnalysis.stepCoverage && (
          <div className="step-coverage-summary">
            <h4>Step Coverage</h4>
            <div className="coverage-bar">
              <div 
                className="coverage-fill" 
                style={{ width: `${geminiAnalysis.stepCoverage.percentage}%` }}
              ></div>
            </div>
            <p>
              {geminiAnalysis.stepCoverage.covered} of {geminiAnalysis.stepCoverage.total} steps covered 
              ({geminiAnalysis.stepCoverage.percentage}%)
            </p>
          </div>
        )}

        {/* Step-by-Step Analysis */}
        {geminiAnalysis.stepAnalysis && geminiAnalysis.stepAnalysis.length > 0 && (
          <div className="step-analysis-section">
            <h4>Step-by-Step Evaluation</h4>
            <div className="steps-list">
              {geminiAnalysis.stepAnalysis.map((step, index) => (
                <div 
                  key={index} 
                  className={`step-item ${step.studentCovered ? 'covered' : 'missing'} ${step.accuracy}`}
                >
                  <div className="step-header">
                    <span className="step-number">Step {step.stepNumber}</span>
                    <span className="step-name">{step.stepName}</span>
                    <span className={`step-status ${step.studentCovered ? 'present' : 'missing'}`}>
                      {step.studentCovered ? '✓ Covered' : '✗ Missing'}
                    </span>
                    <span className={`accuracy-badge ${step.accuracy}`}>
                      {step.accuracy}
                    </span>
                  </div>
                  <p className="step-feedback">{step.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Score Comparison */}
        <div className="score-comparison">
          <h4>Score Comparison</h4>
          <div className="comparison-grid">
            <div className="score-card ai-score">
              <span className="score-label">AI Score</span>
              <span className="score-value-large">
                {geminiAnalysis.totalScore.toFixed(2)} / {geminiAnalysis.maxTotalScore}
              </span>
              <span className="score-percentage">
                {((geminiAnalysis.totalScore / geminiAnalysis.maxTotalScore) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="score-card self-score">
              <span className="score-label">Your Self Score</span>
              <span className="score-value-large">
                {getTotalSelfScore()} / {getMaxScore()}
              </span>
              <span className="score-percentage">
                {getMaxScore() > 0 ? ((getTotalSelfScore() / getMaxScore()) * 100).toFixed(1) : 0}%
              </span>
            </div>
            <div className="score-card difference">
              <span className="score-label">Difference</span>
              <span className={`score-value-large ${
                Math.abs(geminiAnalysis.totalScore - getTotalSelfScore()) < 0.5 
                  ? 'close' 
                  : geminiAnalysis.totalScore > getTotalSelfScore() 
                    ? 'too-harsh' 
                    : 'too-lenient'
              }`}>
                {(geminiAnalysis.totalScore - getTotalSelfScore()).toFixed(2)}
              </span>
              <span className="score-note">
                {Math.abs(geminiAnalysis.totalScore - getTotalSelfScore()) < 0.5 
                  ? '✓ Close match' 
                  : geminiAnalysis.totalScore > getTotalSelfScore() 
                    ? 'You were too harsh' 
                    : 'You were too lenient'}
              </span>
            </div>
          </div>
        </div>

        {/* Criterion-wise Scores with Step Mapping */}
        <div className="criterion-scores">
          <h4>Criterion-wise Analysis</h4>
          <div className="criterion-list">
            {rubric.map((criterion, index) => {
              const aiScore = geminiAnalysis.scores[index] || { 
                score: 0, 
                maxScore: criterion.maxScore, 
                feedback: 'Not evaluated',
                stepsRelated: [],
                strengths: [],
                weaknesses: []
              };
              const selfScoreValue = selfScore[index] || 0;
              
              return (
                <div key={index} className="criterion-analysis-item">
                  <div className="criterion-header-analysis">
                    <div className="criterion-info">
                      <span className="criterion-name">{criterion.description}</span>
                      {aiScore.stepsRelated && aiScore.stepsRelated.length > 0 && (
                        <span className="steps-related">
                          Related to: Steps {aiScore.stepsRelated.join(', ')}
                        </span>
                      )}
                    </div>
                    <div className="score-badges">
                      <span className="badge ai-badge">
                        AI: {parseFloat(aiScore.score).toFixed(2)}/{aiScore.maxScore}
                      </span>
                      <span className="badge self-badge">
                        You: {selfScoreValue}/{criterion.maxScore}
                      </span>
                      <span className={`badge difference-badge ${
                        Math.abs(parseFloat(aiScore.score) - selfScoreValue) < 0.25 
                          ? 'match' 
                          : parseFloat(aiScore.score) > selfScoreValue 
                            ? 'harsh' 
                            : 'lenient'
                      }`}>
                        Diff: {(parseFloat(aiScore.score) - selfScoreValue).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="criterion-feedback">
                    <p><strong>Feedback:</strong> {aiScore.feedback}</p>
                    
                    {aiScore.strengths && aiScore.strengths.length > 0 && (
                      <div className="feedback-section strengths">
                        <strong>Strengths:</strong>
                        <ul>
                          {aiScore.strengths.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {aiScore.weaknesses && aiScore.weaknesses.length > 0 && (
                      <div className="feedback-section weaknesses">
                        <strong>Areas for Improvement:</strong>
                        <ul>
                          {aiScore.weaknesses.map((w, i) => (
                            <li key={i}>{w}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Overall Feedback */}
        {geminiAnalysis.overallFeedback && (
          <div className="overall-feedback">
            <h4>Overall Assessment</h4>
            <p>{geminiAnalysis.overallFeedback}</p>
          </div>
        )}

        {/* Suggestions */}
        {geminiAnalysis.suggestions && geminiAnalysis.suggestions.length > 0 && (
          <div className="ai-suggestions">
            <h4>Improvement Suggestions</h4>
            <ul>
              {geminiAnalysis.suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

