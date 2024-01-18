import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizView = ({ questions, currentQuestion, onAnswerClick }) => {
  const navigate = useNavigate();
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleButtonClick = (isCorrect) => {
    onAnswerClick(isCorrect);

    if (currentQuestion + 1 === questions.length) {
      setQuizCompleted(true);
    }
  };

  const showScore = () => {
    navigate('/score-view');
  };

  useEffect(() => {
    if (quizCompleted) {
      navigate('/score-view');
    }
  }, [quizCompleted, navigate]);

  return (
    <>
      <div className="question">
        <div className="question-number">
          <span>Question {currentQuestion + 1} / {questions.length}</span>
          <div className="question-text">{questions[currentQuestion]?.question}</div>
        </div>
      </div>
      <div className="answer">
        {questions[currentQuestion]?.answers.map(({ text, isCorrect }) => (
          <button key={text} onClick={() => handleButtonClick(isCorrect)}>
            {text}
          </button>
        ))}
      </div>
      {quizCompleted && (
        <div>
          <p>Quiz Completed!</p>
          <button onClick={showScore}>Show Score</button>
        </div>
      )}
    </>
  );
};

export default QuizView;
