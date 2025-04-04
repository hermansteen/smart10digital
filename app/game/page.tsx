"use client"
import AnswerWheel from '@/components/AnswerWheel';
import QuestionDisplay from '@/components/QuestionDisplay';
import QuestionNavigation from '@/components/QuestionNavigation';
import { questions } from '@/data/questions';
import { useState, useEffect } from 'react';
// Move the existing page.tsx content here and add Scoreboard
import Scoreboard from '../components/Scoreboard';

const Game = () => {
    //shuffle questions
    //eslint-disable-next-line
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionsShuffled, setQuestionsShuffled] = useState(questions);
    console.log(questionsShuffled);
    // eslint-disable-next-line
    const shuffleAnswers = useEffect(() => {
        setQuestionsShuffled(questions.map((question) => {
            question.answers.sort(() => Math.random() - 0.5);
            return question;
        }))
    }, []);

    const handleAnswerClick = (index: number) => {
        setSelectedAnswers(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswers([]);
        }
    };

    const handlePrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            setSelectedAnswers([]);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
    <div className="relative h-screen flex justify-center items-center bg-gray-300">
        <Scoreboard />
        <QuestionNavigation
            currentIndex={currentQuestionIndex}
            totalQuestions={questions.length}
            onPrevious={handlePrevQuestion}
            onNext={handleNextQuestion}
        />
        <QuestionDisplay
            questionNumber={currentQuestionIndex + 1}
            question={currentQuestion.question}
        />
        <AnswerWheel
            answers={currentQuestion.answers}
            selectedAnswers={selectedAnswers}
            onAnswerClick={handleAnswerClick}
        />

    </div> 
    );
};

export default Game;