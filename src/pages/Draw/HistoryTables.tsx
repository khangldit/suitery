import React, { useEffect, useState } from 'react';

type PropType = {};

const HistoryTable = (props: PropType) => {
  //   const {} = props;
  const data = {
    daily: [
      {
        time: 'March 15',
        numbers: [1, 3, 4],
      },
      {
        time: 'March 16',
        numbers: [150],
      },
    ],
    monthly: [
      {
        time: 'March',
        chain: '05-06-07-08-09',
        numbers: [100],
      },
      {
        time: 'June',
        chain: '05-06-07-08-09',
        numbers: [],
      },
      {
        time: 'July',
        chain: '05-06-07-08-09',
        numbers: [45, 71],
      },
    ],
    yearly: [
      {
        time: '2021',
        chain: '05-06-07-08-09',
        numbers: [100],
      },
      {
        time: '2022',
        chain: '05-06-07-08-09',
        numbers: [],
      },
      {
        time: '2023',
        chain: '05-06-07-08-09',
        numbers: [45, 71],
      },
    ],
  };
  //   const [visible, setVisible] = useState(false);

  //   useEffect(() => {}, []);

  // #### functions

  // #### render
  return (
    <div className="row history-tables">
      <div className="col-4 pe-5">
        <div className="list">
          <div className="header-item row-line">
            <div className="cell flex-1">Day</div>
            <div className="cell flex-1 ">BoxNumber</div>
          </div>
          {data.daily.map((day, index) => {
            return (
              <div
                className="row-line"
                style={{
                  borderWidth: index === data.daily.length - 1 ? 0 : '',
                }}
              >
                <div className="cell flex-1">{day.time}</div>
                <div className="cell flex-1">
                  {!day.numbers.length ? (
                    '#'
                  ) : (
                    <div>
                      {day.numbers.map((num) => {
                        return <div>#{num}</div>;
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-4 px-3">
        <div className="list">
          <div className="header-item row-line">
            <div className="cell flex-1">Month</div>
            <div className="cell flex-2">Chain</div>
            <div className="cell flex-1">BoxNumber</div>
          </div>
          {data.monthly.map((month, index) => {
            return (
              <div
                className="row-line"
                style={{
                  borderWidth: index === data.monthly.length - 1 ? 0 : '',
                }}
              >
                <div className="cell flex-1">{month.time}</div>
                <div className="cell flex-2">{month.chain}</div>
                <div className="cell flex-1">
                  {!month.numbers.length ? (
                    '#'
                  ) : (
                    <div>
                      {month.numbers.map((num) => {
                        return <div>#{num}</div>;
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-4 ps-5">
        <div className="list">
          <div className="header-item row-line">
            <div className="cell flex-1">Month</div>
            <div className="cell flex-2">Chain</div>
            <div className="cell flex-1">BoxNumber</div>
          </div>
          {data.yearly.map((year, index) => {
            return (
              <div
                className="row-line"
                style={{
                  borderWidth: index === data.yearly.length - 1 ? 0 : '',
                }}
              >
                <div className="cell flex-1">{year.time}</div>
                <div className="cell flex-2">{year.chain}</div>
                <div className="cell flex-1">
                  {!year.numbers.length ? (
                    '#'
                  ) : (
                    <div>
                      {year.numbers.map((num) => {
                        return <div>#{num}</div>;
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HistoryTable;
