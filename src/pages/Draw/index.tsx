import './styles.scss';
import DefaultBackground from '@components/Layout/DefaultBackground';
import React, { useEffect, useState } from 'react';
import DrawingCard from './components/DrawingCard';
import moment, { Moment } from 'moment';
import HistoryTables from './components/HistoryTables';
type DrawInfo = {
  name: string;
  numbers: number[];
  time: Moment;
  drawingTitle: string;
};
type PropType = {};

const Draw = (props: PropType) => {
  //   const {} = props;

  const [drawing, setDrawing] = useState<DrawInfo[]>([
    {
      name: 'FEBRUARY',
      numbers: [21, 3, 42, 23, 52],
      time: moment(),
      drawingTitle: 'Countdown to next monthly drawing ',
    },
    {
      name: '2022',
      numbers: [99, 45, 34, 29, 92],
      time: moment().add(5, 'hours'),
      drawingTitle: 'Countdown to next yearly drawing ',
    },
  ]);

  //   useEffect(() => {}, []);

  // #### functions

  // #### render
  return (
    <DefaultBackground>
      <div className="page drawing-page-wrapper row">
        <div
          className="col-12 pb-3"
          style={{
            textAlign: 'center',
            borderBottom: '1px solid var(--color-gray-13)',
          }}
        >
          <div className="fs-20 lh-30 fw-bold color-gray-5">Daily Jackpot</div>
          <div className="fs-48 lh-60 fw-bold color-yellow-4">
            {'Number of winning today'.toUpperCase()}
          </div>
          <div className="fs-74 lh-76 fw-bold">358</div>
        </div>
        <div className="col-6 ps-0">
          <DrawingCard data={drawing[0]} />
        </div>
        <div className="col-6 pe-0">
          <DrawingCard data={drawing[1]} invert={true} />
        </div>
        <div className="col-12 px-0">
          <div
            className="winning-jackpot"
            style={{
              backgroundColor: 'var(--color-gray-21)',
            }}
          >
            <div className="fs-48 fw-bold color-yellow-4 header">
              Winning Jackpot
            </div>
            <HistoryTables />
          </div>
        </div>
      </div>
    </DefaultBackground>
  );
};
export default Draw;
