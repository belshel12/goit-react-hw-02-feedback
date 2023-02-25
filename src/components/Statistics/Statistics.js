import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
      <ul>
        <li>
          <p>Good:</p>
          <span>{good}</span>
        </li>
        <li>
          <p>Neutral:</p>
          <span>{neutral}</span>
        </li>
        <li>
          <p>Bad:</p>
          <span>{bad}</span>
        </li>
        <li>
          <p>Total:</p>
          <span>{total}</span>
        </li>
        <li>
          <p>Positive feedback:</p>
          <span>{positivePercentage}%</span>
        </li>
      </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
