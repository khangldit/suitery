import '../styles.scss';
import React, { useEffect, useState } from 'react';
import { Moment } from 'moment';
import TimeDisplay from '@components/TimeDisplay';
type DrawInfo = {
  name: string;
  numbers: number[];
  time: Moment;
  drawingTitle: string;
};
type PropType = {
  data: DrawInfo;
  invert?: boolean;
};

const DrawingCard = (props: PropType) => {
  const { invert, data } = props;

  //   const [visible, setVisible] = useState(false);

  //   useEffect(() => {}, []);

  // #### functions

  // #### render
  return (
    <div
      className="drawing-card-wrapper"
      style={{
        backgroundColor: `var(--color-gray-${invert ? '18' : '21'})`,
      }}
    >
      <div className={`fs-32 fw-bold color-${invert ? '-white' : 'yellow-4'}`}>
        {data.name}
      </div>
      <div className="lucky-numbers">
        {data.numbers &&
          data.numbers.map((number, index) => {
            return (
              <div
                className="number fs-20 fw-bold"
                style={{
                  backgroundColor: `var(--color-${
                    invert ? 'yellow-4' : 'gray-9'
                  })`,
                }}
              >
                {number}
              </div>
            );
          })}
      </div>
      <div
        className="count-down-card"
        style={{
          backgroundColor: `var(--color-gray-${!invert ? '18' : '21'})`,
        }}
      >
        <div className="fs-24 lh-34 fw-bold">{data.drawingTitle}</div>
        <div className="w-50">
          <TimeDisplay time={data.time} />
        </div>
      </div>
    </div>
  );
};
export default DrawingCard;
