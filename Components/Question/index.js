import styles from "./Question.module.css";

export default function Question({ question, onAnswer }) {
    return (
      <div className={styles.alloptions}>
        <h2 className={styles.title}>{question.question}</h2>
        {question.answers.map((answer, index) => (
          <button className={styles.options} key={index} onClick={() => onAnswer(answer.id)}>
            {answer.text}
          </button>
        ))}
      </div>
    );
  }
  