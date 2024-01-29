import React, { useState } from "react";
import "./question.css";

const QuizComponent = ({ questions, onQuizComplete }) => {
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleAnswerClick = (optionId) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestionIndex] = optionId;
    setUserAnswers(updatedUserAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      onQuizComplete(updatedUserAnswers);
    }
  };

  const toggleHighlight = () => {
    setIsHighlighted((prev) => !prev);
  };

  const removeHighlight = () => {
    setIsHighlighted(false);
  };

  return (
    <div>
      <nav>
        <div className="content">
          <p className="logo">Quizzy</p>
        </div>
      </nav>
      <div className="container">
        <div className="container2">
          <h2 id="text1">Question</h2>
          <p id="text2">{`${currentQuestionIndex + 1} of ${
            questions.length
          }`}</p>
          <p id="text3" style={{ color: isHighlighted ? "red" : "black" }}>
            {questions.length > 0 && questions[currentQuestionIndex].text}
          </p>
        </div>
        <div className="container3">
          {questions.length > 0 &&
            questions[currentQuestionIndex].options.map((option) => (
              <div
                key={option.id}
                className="box"
                onClick={() => handleAnswerClick(option.id)}
              >
                {option.text}
              </div>
            ))}
        </div>
        <div>
          {isHighlighted ? (
            <button onClick={removeHighlight} className="highlight">
              Remove Highlight
            </button>
          ) : (
            <button onClick={toggleHighlight} className="highlight">
              Highlight
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
