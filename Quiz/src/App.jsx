// App.jsx
import React, { useState } from "react";
import './App.css';
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import LightMode from "./assets/Light.svg";
import DarkMode from "./assets/Dark.png";
import Home from "./components/Home";

function App() {
  const [Theme, setTheme] = useState("dark");
  const [que, setQue] = useState(0);
  const [Score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [currentComponent, setCurrentComponent] = useState("home");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.classList.toggle("Dark", Theme === "light");
    document.body.classList.toggle("Light", Theme === "dark");
  };

  const startQuiz = () => {
    setCurrentComponent("quiz");
  };

  const handleNext = (selectedOption, isCorrect) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[que] = selectedOption;
      return newAnswers;
    });

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setQue((prevQ) => prevQ + 1);
  };

  const handlePrev = () => {
    setQue((prevQ) => prevQ - 1);
  };

  const handleRestart = () => {
    setQue(0);
    setScore(0);
    setUserAnswers(Array(questions.length).fill(null));
    setCurrentComponent("home");
  };

  const ResultComponent =
    que === questions.length ? (
      <Result Score={Score} Restart={handleRestart} />
    ) : (
      <QuestionBox que={que} onNext={handleNext} onPrev={handlePrev} />
    );

  return (
    <div className={`Quiz ${Theme}`}>
      <div className={`Nav-Bar ${Theme}`}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "100px", paddingRight: "100px" }}>
          <p style={{ fontSize: "45px", letterSpacing: "3px", margin: "0 10px" }}>Music Trivia</p>
          <button style={{border:"none",background:"none",cursor:"pointer"}} className="darkModeBtn" onClick={changeTheme}>
            <img style={{ width: "50px", marginLeft: "10px", marginRight: "10px" }} src={Theme === "light" ? DarkMode : LightMode } alt={Theme} />
          </button>
        </nav>
      </div>
      <div className="Main-Part">
        {currentComponent === "home" ? (
          <Home startQuiz={startQuiz} />
        ) : (
          ResultComponent
        )}
      </div>
    </div>
  );
}

export default App;
