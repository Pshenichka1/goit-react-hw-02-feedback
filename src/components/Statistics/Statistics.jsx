import React from "react";
import { StatisticItem, StatisticList } from '../Statistics/styled';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
        return (
            <StatisticList>
                <StatisticItem>Good:{good}</StatisticItem>
                <StatisticItem>Neutral:{neutral}</StatisticItem>
                <StatisticItem>Bad:{bad}</StatisticItem>
                <StatisticItem>Total:{total}</StatisticItem>
                <StatisticItem>Positive feedback:{positivePercentage}%</StatisticItem>
            </StatisticList>

        )
}
     


