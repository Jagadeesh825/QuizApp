// App.js
import React, { useState } from 'react';
import './App.css';
import Background from './components/Background';
import QuizView from './components/QuizView';
import ScoreView from './components/ScoreView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin" },
      { text: "Madrid" },
      { text: "Paris", isCorrect: true },
      { text: "Rome" },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Mars", isCorrect: true },
      { text: "Jupiter" },
      { text: "Venus" },
      { text: "Saturn" },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens" },
      { text: "William Shakespeare", isCorrect: true },
      { text: "Jane Austen" },
      { text: "Mark Twain" },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Elephant" },
      { text: "Blue Whale", isCorrect: true },
      { text: "Giraffe" },
      { text: "Hippopotamus" },
    ],
  },
  {
    question: "In which year did Christopher Columbus reach the Americas?",
    answers: [
      { text: "1492", isCorrect: true },
      { text: "1515" },
      { text: "1620" },
      { text: "1776" },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Yuan" },
      { text: "Won" },
      { text: "Yen", isCorrect: true },
      { text: "Ringgit" },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh" },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Pablo Picasso" },
      { text: "Claude Monet" },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean" },
      { text: "Indian Ocean" },
      { text: "Arctic Ocean" },
      { text: "Pacific Ocean", isCorrect: true },
    ],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton" },
      { text: "Albert Einstein", isCorrect: true },
      { text: "Galileo Galilei" },
      { text: "Stephen Hawking" },
    ],
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Sydney" },
      { text: "Melbourne" },
      { text: "Canberra", isCorrect: true },
      { text: "Perth" },
    ],
  },
];


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // Validate the answer and update the score
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleReset = () => {
    // Reset logic here if needed
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Background />} />
          <Route
            path="/quiz-view"
            element={<QuizView questions={questions} currentQuestion={currentQuestion} onAnswerClick={handleAnswerClick} />}
          />
          <Route
            path="/score-view"
            element={<ScoreView score={score} totalQuestions={questions.length} onReset={handleReset} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
