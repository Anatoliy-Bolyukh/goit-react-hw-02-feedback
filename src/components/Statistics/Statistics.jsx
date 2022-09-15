const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul>
      <li>
        <p>
          Good:<span>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral:<span>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad:<span>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total:<span>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback:<span>{percentage}%</span>
        </p>
      </li>
      <div></div>
    </ul>
  );
};

export default Statistics;
