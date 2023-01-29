const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {total}</p>
      <p>
        Positive feedback: {positivePercentage > 0 ? positivePercentage : 0}%
      </p>
    </div>
  );
};

export default Statistics;
