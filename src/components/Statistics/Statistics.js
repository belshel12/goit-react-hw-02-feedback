import PropTypes from 'prop-types';
import { List, Item, Option, Value } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item>
        <Option>Good:</Option>
        <Value>{good}</Value>
      </Item>
      <Item>
        <Option>Neutral:</Option>
        <Value>{neutral}</Value>
      </Item>
      <Item>
        <Option>Bad:</Option>
        <Value>{bad}</Value>
      </Item>
      <Item>
        <Option>Total:</Option>
        <Value>{total}</Value>
      </Item>
      <Item>
        <Option>Positive feedback:</Option>
        <Value>{positivePercentage}%</Value>
      </Item>
    </List>
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
