import React, { useEffect, useState } from 'react';

type PropType = {
  total: number;
  milestones: number[];
  current: number;
  prefix?: string;
  suffix?: string;
};

const MileStone = (props: PropType) => {
  const { milestones = [], total, current, prefix, suffix } = props;

  //   const [visible, setVisible] = useState(false);

  //   useEffect(() => {}, []);

  // #### functions

  // #### render
  return (
    <div className="w-100 milestone-container">
      <div
        className="current-milestone"
        style={{ width: `${(current * 100) / total}%` }}
      ></div>
      {milestones.map((milestone) => {
        return (
          <div
            className="milestone"
            style={{ left: `calc(${(milestone * 100) / total}% - 30px)` }}
          >
            <div
              className="milestone-mark"
              style={{
                backgroundColor: 'transparent',
              }}
            ></div>
            <div className="milestone-value">
              {prefix}
              {milestone}
              {suffix}
            </div>
          </div>
        );
      })}
      <div className="milestone-total">
        <div className="milestone-value">
          {prefix}
          {total}
          {suffix}
        </div>
      </div>
    </div>
  );
};
export default MileStone;
