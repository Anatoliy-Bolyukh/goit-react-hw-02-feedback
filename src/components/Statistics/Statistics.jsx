const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul>
            <li>
                <p>Good:<span>{good}</span></p>
            </li>
            <li>
                <p>Neutral:</p>
                <span>{neutral}</span>
            </li>
            <li>
                <p>Bad</p>
                <span>{bad}</span>
            </li>
            <li>
                <p>Total</p>
                <span>{total}</span>
            </li>
            <li>
                <p>Positive feedback</p>
                <span>{positivePercentage}</span>
            </li>
            <li>

            </li>
        </ul>
    )
}

export default Statistics