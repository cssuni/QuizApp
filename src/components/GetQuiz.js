import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './GetQuiz.css';

const GetQuiz = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(`http://localhost:8090/quiz/get/${inputValue}`);
      navigate('/quiz', { state: { quiz: response.data } });
    } catch (error) {
      console.error('Error fetching quiz:', error);
    }
  };

  return (
    <div className="get-quiz-container">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter quiz topic" 
      />
      <button onClick={handleButtonClick}>Get Quiz</button>
    </div>
  );
};

export default GetQuiz;
