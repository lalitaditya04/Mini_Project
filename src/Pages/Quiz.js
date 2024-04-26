import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";
import logo from "../TechHavenLogo.png";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      question:
        "What is the main function of the display panel in a television?",
      options: [
        "To house the processor and memory",
        "To provide power to the TV",
        "To produce images using various technologies",
        "To render graphics and enhance visual performance",
      ],
      answer: "To produce images using various technologies",
    },
    {
      question:
        "Which component of a laptop is responsible for temporarily storing data that the CPU needs for quick access?",
      options: ["GPU", "RAM", "Storage device", "Battery"],
      answer: "RAM",
    },
    {
      question: "What is the primary function of the SoC in a smartphone?",
      options: [
        "To integrate the CPU, GPU, and other components",
        "To house the processor and memory",
        "To convert electrical power from an outlet",
        "To produce images using various display technologies",
      ],
      answer: "To integrate the CPU, GPU, and other components",
    },
    {
      question:
        "Which internal part of a television is responsible for coordinating the TV's functions and housing essential components like the processor and memory?",
      options: ["Display panel", "PSU", "Motherboard", "Audio system"],
      answer: "Motherboard",
    },
    {
      question:
        "In a laptop, which component is responsible for rendering graphics and enhancing visual performance, particularly for gaming and multimedia applications?",
      options: ["CPU", "RAM", "Storage device", "GPU"],
      answer: "GPU",
    },
    {
      question: "What is the primary function of the battery in a smartphone?",
      options: [
        "To integrate the CPU, GPU, and other components",
        "To temporarily store data for quick access",
        "To provide power for extended usage",
        "To render graphics and enhance visual performance",
      ],
      answer: "To provide power for extended usage",
    },
    {
      question:
        "Which internal part of a television converts electrical power from an outlet into a form suitable for the TV, providing the necessary energy to operate?",
      options: ["PSU", "CPU", "Display panel", "Audio system"],
      answer: "PSU",
    },
    {
      question:
        "In a laptop, which component stores the operating system, applications, and user data, facilitating quick access and seamless performance?",
      options: ["CPU", "RAM", "Storage device", "GPU"],
      answer: "Storage device",
    },
    {
      question:
        "What is the primary function of the motherboard in a television?",
      options: [
        "To produce images using various display technologies",
        "To house the processor and memory",
        "To coordinate the TV's functions and house essential components",
        "To render graphics and enhance visual performance",
      ],
      answer: "To coordinate the TV's functions and house essential components",
    },
    {
      question:
        "In a smartphone, which component integrates the CPU, GPU, and other components, enabling the execution of tasks and ensuring overall device performance?",
      options: ["SoC", "Battery", "Display screen", "Internal storage"],
      answer: "SoC",
    },
  ];

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <header className="header">
          <div className="ImageCont">
            <Link to="/"><img src={logo} alt="Tech Heaven Logo" className="logo" /></Link>
          </div>
        </header>
        <h1>Tech Heaven Quiz</h1>
        {currentQuestion < questions.length ? (
          <div className="quiz-content">
            <div className="question-container">
              <h2>{questions[currentQuestion].question}</h2>
              <div className="options-container">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="option-button"
                    onClick={() => handleAnswer(option)}
                    disabled={showAnswer}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {showAnswer && (
                <div className="answer-container">
                  <p>
                    Correct Answer:{" "}
                    <span className="correct-answer">
                      {questions[currentQuestion].answer}
                    </span>
                  </p>
                  <p>
                    Your Score: <span className="score">{score}</span>
                  </p>
                  <button className="next-button" onClick={handleNextQuestion}>
                    Next Question
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="quiz-result">
            <h2>Quiz Completed!</h2>
            <p>
              Your final score is: <span className="score">{score}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
