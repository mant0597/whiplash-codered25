import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the primary cause of global warming?",
    options: [
      "Greenhouse gas emissions",
      "Solar flares",
      "Volcanic eruptions",
      "Ocean currents"
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which of these is NOT a renewable energy source?",
    options: [
      "Solar power",
      "Wind power",
      "Coal",
      "Hydroelectric power"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What percentage of Earth's water is freshwater?",
    options: [
      "About 3%",
      "About 50%",
      "About 75%",
      "About 97%"
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which of these activities helps reduce carbon footprint?",
    options: [
      "Using disposable products",
      "Taking longer showers",
      "Using public transportation",
      "Keeping lights on when not in use"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What is the largest threat to marine ecosystems?",
    options: [
      "Ocean acidification",
      "Plastic pollution",
      "Overfishing",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 6,
    question: "Which gas is responsible for the ozone layer depletion?",
    options: [
      "Carbon dioxide",
      "Chlorofluorocarbons (CFCs)",
      "Methane",
      "Nitrogen"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What is the most effective way to reduce waste?",
    options: [
      "Recycling",
      "Reducing consumption",
      "Reusing items",
      "Composting"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which ecosystem stores the most carbon?",
    options: [
      "Tropical rainforests",
      "Peatlands",
      "Grasslands",
      "Coral reefs"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "What percentage of global greenhouse gas emissions come from transportation?",
    options: [
      "About 5%",
      "About 15%",
      "About 25%",
      "About 35%"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which action has the highest impact on reducing personal carbon footprint?",
    options: [
      "Using reusable bags",
      "Taking shorter showers",
      "Eating less meat",
      "Turning off lights"
    ],
    correctAnswer: 2
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  if (showScore) {
    return (
      <div className="min-h-[400px] bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-xl mb-4">
          You scored {score} out of {questions.length}
        </p>
        <button
          onClick={resetQuiz}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[400px] bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1}/{questions.length}
          </span>
          <span className="text-sm text-gray-500">
            Score: {score}
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-4">
          {questions[currentQuestion].question}
        </h2>
      </div>
      
      <div className="space-y-3">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            disabled={showExplanation}
            className={`w-full text-left p-4 rounded-lg transition-colors ${
              selectedAnswer === null
                ? 'hover:bg-green-50 border border-gray-200'
                : selectedAnswer === index
                ? index === questions[currentQuestion].correctAnswer
                  ? 'bg-green-100 border border-green-500'
                  : 'bg-red-100 border border-red-500'
                : index === questions[currentQuestion].correctAnswer
                ? 'bg-green-100 border border-green-500'
                : 'border border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {showExplanation && index === questions[currentQuestion].correctAnswer && (
                <CheckCircle2 className="text-green-500" />
              )}
              {showExplanation && selectedAnswer === index && index !== questions[currentQuestion].correctAnswer && (
                <XCircle className="text-red-500" />
              )}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <button
          onClick={handleNextQuestion}
          className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors w-full"
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      )}
    </div>
  );
};

export default Quiz;