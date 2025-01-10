import React, { useState } from 'react';


const quizQuestions = [
  {
    question: "Which of these activities releases the most carbon dioxide?",
    options: [
      "Driving a car",
      "Using air conditioning",
      "Flying in an airplane",
      "Using a laptop"
    ],
    correct: 2
  },
  {
    question: "What is the most effective way to reduce your carbon footprint?",
    options: [
      "Using public transportation",
      "Reducing meat consumption",
      "Using renewable energy",
      "Recycling"
    ],
    correct: 2
  },
  {
    question: "Which renewable energy source currently provides the most electricity globally?",
    options: [
      "Solar power",
      "Wind power",
      "Hydroelectric power",
      "Geothermal power"
    ],
    correct: 2
  }
];

export default function EcoQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-600">Quiz Complete!</h2>
          <p className="text-xl mb-4">Your score: {score} out of {quizQuestions.length}</p>
          <button
            onClick={resetQuiz}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Question {currentQuestion + 1}/{quizQuestions.length}</h2>
            <span className="text-green-600 font-semibold">Score: {score}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-2 bg-green-600 rounded"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h3 className="text-xl mb-6">{quizQuestions[currentQuestion].question}</h3>
        
        <div className="space-y-4">
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
