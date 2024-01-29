import React, { useState } from "react";
import "./App.css";
import QuizComponent from "./components/QuestionBox";
import Result from "./components/Result";
import questions from "./question";

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleQuizComplete = (answers) => {
    setUserAnswers(answers);
    setQuizCompleted(true);
  };

  return (
    <div className="App">
      {!quizCompleted ? (
        <QuizComponent
          questions={questions}
          onQuizComplete={handleQuizComplete}
        />
      ) : (
        <Result userAnswers={userAnswers} questions={questions} />
      )}
    </div>
  );
}

export default App;
