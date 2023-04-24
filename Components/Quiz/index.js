import React, { useState, useEffect, useMemo } from "react";
import Question from "../Question";
import styles from "./Quiz.module.css";
import Image from "next/image";

export default function Quiz() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "Select a substance to test for",
            answers: [
                { id: 1, text: "Alcohol", result: "Alcohol" },
                { id: 2, text: "MDMA", result: "MDMA" },
                { id: 3, text: "Cocaine", result: "Cocaine" },
            ],
        },
        {
            id: 2,
            question: "MDMA",
            answers: [
                { id: 1, text: "0.1g(1 pill)", result: "0.1g(1 pill)" },
                { id: 2, text: "0.2g(2 pills)", result: "0.2g(2 pills)" },
                { id: 3, text: "0.3g(3 pills)", result: "0.3g(3 pills)" },
            ],
        },
        {
            id: 3,
            question: "Body Weight",
            answers: [
                { id: 1, text: "40~50kg", result: "40~50kg" },
                { id: 2, text: "50~60kg", result: "50~60kg" },
                { id: 3, text: "60~70kg", result: "60~70kg" },
            ],
        },
    ]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);


    const handleAnswer = (answerId) => {
        setSelectedAnswer(answerId);
    };

    const handleNext = () => {
        if (selectedAnswer === null) {
            // If no answer is selected, show an alert
            alert('Please select an answer');
            return;
        }

        // If an answer is selected, update the state with the answer and move to the next question
        setUserAnswers([...userAnswers, selectedAnswer]);
        setSelectedAnswer(null);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePrev = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    }

    const userResults = useMemo(() => {
        if (userAnswers.length < 3) {
            return [];
        }
        const result = [];
        questions.forEach((question, index) => {
            const answer = question.answers.find((answer) => answer.id === userAnswers[index]);
            result.push(answer.result);
        });
        return result;
    }, [userAnswers, questions]);

    return (
        <>
            {userAnswers.length === 3 ? (
                <>
                    <h2>Your Result:</h2>
                    <p>Based on your body weight:</p>
                    <input type="text" readOnly value={userResults[2]} />
                    <p>And your Dosage:</p>
                    <input type="text" readOnly value={userResults[1]} />
                    <p>of</p>
                    <input type="text" readOnly value={userResults[0]} />
                </>
            ) : (
                <div>
                    <h1>Step {currentQuestionIndex + 1}</h1>
                    <div className={styles.progressBar} style={{ width: `${(currentQuestionIndex + 1) / questions.length * 100}%` }} />
                    <Question question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
                    <button onClick={handleNext}>Next</button>
                    {currentQuestionIndex > 0 && (
                        <button className={styles.prevButton} onClick={handlePrev}>
                            <Image src="/backArrow.svg" alt="Previous Button" width={25} height={25} />
                        </button>
                    )}
                </div>
            )}
        </>
    );
}
