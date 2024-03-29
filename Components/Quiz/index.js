import React, { useState, useEffect, useMemo } from "react";
import Question from "../Question";
import styles from "./Quiz.module.css";
import Image from "next/image";
import HighRisk from "../HighRisk";
import MedRisk from "../MedRisk";
import LowRisk from "../LowRisk";
import ButtonQR from "../ButtonQR";

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
            question: "Select Your Dosage of drug",
            answers: [
                { id: 1, text: "0.1g (1 pill)", result: "0.1g (1 pill)" },
                { id: 2, text: "0.2g (2 pills)", result: "0.2g (2 pills)" },
                { id: 3, text: "0.3g (3 pills)", result: "0.3g (3 pills)" },
            ],
        },
        {
            id: 3,
            question: "Select Your Body Weight",
            answers: [
                { id: 1, text: "40~50 kg", result: "40~50 kg" },
                { id: 2, text: "50~60 kg", result: "50~60 kg" },
                { id: 3, text: "60~70 kg", result: "60~70 kg" },
            ],
        },
    ]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isHighRisk, setIsHighRisk] = useState(false);
    const [isMedRisk, setIsMedRisk] = useState(false);
    const [isLowRisk, setIsLowRisk] = useState(false);

    const handleAnswer = (answerId) => {
        setSelectedAnswer(answerId);
    };

    const handleNext = () => {
        if (selectedAnswer === null) {
            alert("Please select an answer");
            return;
        }

        setUserAnswers([...userAnswers, selectedAnswer]);
        setSelectedAnswer(null);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePrev = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const handleRetakeQuiz = () => {
        setUserAnswers([]);
        setCurrentQuestionIndex(0);
    };

    const userResults = useMemo(() => {
        if (userAnswers.length < 3) {
            return [];
        }

        const result = [];
        let isHighRisk = false;
        let isMedRisk = false;
        let isLowRisk = false;

        questions.forEach((question, index) => {
            const answer = question.answers.find((answer) => answer.id === userAnswers[index]);
            result.push(answer.result);
            if (question.id === 1) {
                if (answer.result === "Alcohol") {
                    if (userAnswers[2] === 1) {
                        isLowRisk = userAnswers[1] === 1;
                        isMedRisk = userAnswers[1] === 2;
                        isHighRisk = userAnswers[1] === 3;
                    } else if (userAnswers[2] === 2) {
                        isLowRisk = userAnswers[1] === 1;
                        isMedRisk = userAnswers[1] === 2;
                        isHighRisk = userAnswers[1] === 3;
                    } else if (userAnswers[2] === 3) {
                        isLowRisk = userAnswers[1] === 1;
                        isMedRisk = userAnswers[1] === 2;
                        isHighRisk = userAnswers[1] === 3;
                    }
                } else if (answer.result === "MDMA") {
                    if (userAnswers[2] === 1) {
                        isLowRisk = userAnswers[1] === 1;
                        isMedRisk = userAnswers[1] === 2;
                        isHighRisk = userAnswers[1] === 3;
                    } else if (userAnswers[2] === 2) {
                        isLowRisk = userAnswers[1] === 1;
                        isMedRisk = userAnswers[1] === 2;
                        isHighRisk = userAnswers[1] === 3;
                    } else if (userAnswers[2] === 3) {
                        isLowRisk = userAnswers[1] === 1;
                        isMedRisk = userAnswers[1] === 2;
                        isHighRisk = userAnswers[1] === 3;
                    }
                } else if (answer.result === "Cocaine") {
                    if (userAnswers[2] === 1) {
                        isLowRisk = userAnswers[1] === 1;
                        isMedRisk = userAnswers[1] === 2;
                        isHighRisk = userAnswers[1] === 3;
                    } else if (userAnswers[2] === 2) {
                        isLowRisk = userAnswers[1] === 1;
                        isMedRisk = userAnswers[1] === 2;
                        isHighRisk = userAnswers[1] === 3;
                    } else if (userAnswers[2] === 3) {
                        isLowRisk = userAnswers[1] === 1;
                        isMedRisk = userAnswers[1] === 2;
                        isHighRisk = userAnswers[1] === 3;
                    }
                }
            }
        });
        return { result, isHighRisk, isMedRisk, isLowRisk };
    }, [userAnswers, questions]);

    useEffect(() => {
        setIsHighRisk(userResults.isHighRisk);
        setIsMedRisk(userResults.isMedRisk);
        setIsLowRisk(userResults.isLowRisk);
    }, [userResults]);

    return (
        <>
            {userAnswers.length === 3 ? (
                <>
                    <h2 className={styles.title}>Your Result:</h2>
                    <div className={styles.resultpt1}>
                        <p>Based on your body weight:</p>
                        <input className={styles.resultinput} type="text" readOnly value={userResults.result[2]} />
                    </div>
                    <div>
                        <div className={styles.resultpt2}>
                            <p>And your Dosage:</p>
                        </div>
                        <div className={styles.resultpt3}>
                            <input className={styles.resultinput} type="text" readOnly value={userResults.result[1]} />
                            <p className={styles.of}>of</p>
                            <input className={styles.resultinput} type="text" readOnly value={userResults.result[0]} />
                        </div>
                    </div>
                    <div>
                        {isHighRisk && <HighRisk />}
                        {isMedRisk && <MedRisk />}
                        {isLowRisk && <LowRisk />}
                    </div>
                    <div>
                        <button className={styles.button} onClick={handleRetakeQuiz}>Retake Quiz</button>
                        <ButtonQR />
                    </div>
                </>
            ) : (
                <div>
                    <h1 className={styles.progress}>Step {currentQuestionIndex + 1} of 3</h1>
                    <div className={styles.progressBar} style={{ width: `${(currentQuestionIndex + 1) / questions.length * 100}%` }} />
                    <Question
                        question={questions[currentQuestionIndex]}
                        onAnswer={handleAnswer}
                        selectedAnswer={selectedAnswer}
                    />
                    <div className={styles.page}>
                        <button className={styles.nextButton} onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}
        </>
    );
}
