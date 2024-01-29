import React from "react";
import "./result.css";

const Result = ({ userAnswers }) => {
  const questions = [
    {
      text: "What is ReactJS?",
      correctAnswerIndex: 1,
    },
    {
      text: "React.js is written in which of the following language?",
      correctAnswerIndex: 0,
    },
    {
      text: "What is a state in React?",
      correctAnswerIndex: 1,
    },
    {
      text: "What is the return value of the useState hook?",
      correctAnswerIndex: 0,
    },
    {
      text: "How many elements can a valid react component return?",
      correctAnswerIndex: 3,
    },
  ];

  let correctAnswers = 0;

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === questions[index].correctAnswerIndex) {
      correctAnswers++;
    }
  });

  const totalQuestions = questions.length;
  const score = (correctAnswers / totalQuestions) * 100;

  return (
    <div>
      <nav>
        <div className="content">
          <p className="logo">Quizzy</p>
        </div>
      </nav>

      <div className="recon">
        <h2 className="score">SCORES</h2>
        <div className="result2">
          <p>
            {correctAnswers} out of {totalQuestions} are correct
          </p>
          <p>Percentage Score: {score.toFixed(2)}%</p>
        </div>
        <img src="drawkit.png" alt="" />
      </div>
      <div class="containerr">
        <a href="QuestionBox.jsx">
          <div class="circle">Play Again</div>
        </a>
      </div>
    </div>
  );
};

export default Result;
