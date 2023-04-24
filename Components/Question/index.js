

export default function Question({ question, onAnswer }) {
    return (
      <div>
        <h2>{question.question}</h2>
        {question.answers.map((answer, index) => (
          <button key={index} onClick={() => onAnswer(answer.id)}>
            {answer.text}
          </button>
        ))}
      </div>
    );
  }
  