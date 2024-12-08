import React from 'react';
import { useLocation } from 'react-router-dom';
import './QuizPage.css';

const QuizPage = () => {
  const location = useLocation();
  const { quiz } = location.state;

  return (
    <div className="quiz-page-container">
      <h2>Quiz</h2>
      {quiz && quiz.map((question, index) => (
        <div key={question.id} className="quiz-question">
          <p><strong>Q{index + 1}:</strong> {question.question}</p>
          <ul>
            <li>{question.option1}</li>
            <li>{question.option2}</li>
            <li>{question.option3}</li>
            <li>{question.option4}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizPage;
