// Background.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './background.css';

const Background = () => {
  return (
    <>
      <div className="slider-thumb">
        <Link to="/quiz-view">
          <button>START QUIZ</button>
        </Link>
      </div>
    </>
  );
};

export default Background;
