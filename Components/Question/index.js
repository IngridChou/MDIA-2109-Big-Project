import React from "react";
import styles from "./Question.module.css";

export default function Question({ question, onAnswer, selectedAnswer }) {
  return (
    <div className={styles.alloptions}>
      <h2 className={styles.title}>{question.question}</h2>
      {question.answers.map((answer, index) => (
        <button
          key={index}
          className={`${styles.options} ${selectedAnswer === answer.id ? styles.selected : ""}`}
          onClick={() => onAnswer(answer.id)}
        >
          {answer.text}
        </button>
      ))}
    </div>
  );
}
