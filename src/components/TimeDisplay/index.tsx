import moment, { Moment } from 'moment';
import React, { useEffect, useState } from 'react';
type PropType = {
  time: Moment;
};

const TimeDisplay = (props: PropType) => {
  const { time = moment() } = props;
  const [timeState, setTime] = useState(time || moment());
  const [second, setSecond] = useState(time.second() || 0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timeState.add(1, 'seconds');
      setSecond(newTime.seconds());
      setTime(newTime);
      console.log('Interval triggered second:', timeState.seconds());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // #### functions

  // #### render
  return (
    <div className=" d-flex flex-row w-100 justify-content-between">
      <div className="d-flex flex-column align-items-center">
        <div className="fs-32 fw-bold color-yellow-4">{timeState.hour()}</div>
        <div className="fs-16 color-gray-9 mt-2">Hours</div>
      </div>
      <div className="fs-32 fw-bold color-yellow-4">:</div>
      <div className="d-flex flex-column align-items-center">
        <div className="fs-32 fw-bold color-yellow-4">{timeState.minute()}</div>
        <div className="fs-16 color-gray-9 mt-2">Min</div>
      </div>
      <div className="fs-32 fw-bold color-yellow-4">:</div>
      <div className="d-flex flex-column align-items-center">
        <div className="fs-32 fw-bold color-yellow-4">{second}</div>
        <div className="fs-16 color-gray-9 mt-2">Second</div>
      </div>
    </div>
  );
};
export default TimeDisplay;
