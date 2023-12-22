// QuestionBox.jsx

import React, { useState } from 'react';
import questions from '../questions';
import '../App.css';

export default function QuestionBox({ que, Theme, onNext }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [Highlighted, setHighlighted] = useState(false);

  const handleOptionClick = (index) => {
    setSelectedOption(index);

    const isCorrect = questions[que].options[index].isCorrect;

    onNext(index, isCorrect);
    setSelectedOption(null);
  };

  return (
    <div className={`Quiz-box ${Theme}`}>
      <h5>{que + 1} out of 10</h5>
      <h3 style={  { color: Highlighted ? 'red' : 'white' }} className={`Question ${Theme}`}>
        {questions[que].text}
      </h3>
      <div className={`optContainer ${Theme }`}>
        {questions[que].options.map((option, index) => (
          <button
            key={index}
            className={`option button ${Theme} ${selectedOption === index ? 'selected' : ''}`}
            id={index}
            onClick={() => handleOptionClick(index)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="buttonContainer">
        <button onClick={() => setHighlighted(true)}>Highlight</button>
        <button onClick={() => setHighlighted(false)}>Remove Highlight</button>
      </div>
    </div>
  );
}
