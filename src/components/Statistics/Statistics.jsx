import { StatisticItem, StatisticList, Result } from '../Statistics/styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <StatisticList>
            <StatisticItem>Good:<Result>{good}</Result></StatisticItem>
            <StatisticItem>Neutral:<Result>{neutral}</Result></StatisticItem>
            <StatisticItem>Bad:<Result>{bad}</Result></StatisticItem>
            <StatisticItem>Total:<Result>{total}</Result></StatisticItem>
            <StatisticItem>Positive feedback:<Result>{positivePercentage}%</Result></StatisticItem>
        </StatisticList>

    )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
     


