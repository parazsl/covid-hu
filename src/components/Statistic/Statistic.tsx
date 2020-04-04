import React, { FC } from 'react';

type StatisticProps = {
  value: number;
  name: string;
};

export const Statistic: FC<StatisticProps> = ({ value, name }) => {
  return (
    <div>
      <span>
        {value} - {name}
      </span>
    </div>
  );
};
