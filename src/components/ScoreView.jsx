// ScoreView.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ScoreView = ({ score, totalQuestions, onReset }) => {
  return (
    <div className="scoreView">
      <p>You scored {score} out of {totalQuestions}</p>
      <Link to="/">
        <button onClick={onReset}>Reset</button>
      </Link>
    </div>
  );
};

export default ScoreView;
