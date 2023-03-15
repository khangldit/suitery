import './styles.scss';
import React from 'react';
import Bg1 from '@assets/svg/bg_coin_1.svg';
import Bg2 from '@assets/svg/bg_coin_2.svg';
import BigSuitcase from '@assets/svg/big_suitcase.svg';
import { Button } from 'antd';
function Home() {
  return (
    <div className="page row home-page-wrapper">
      <div className="col-6">
        <div
          className="main-card"
          style={{
            backgroundImage: `url(${Bg1})`,
          }}
        >
          <div className="fs-32 fw-bold">Next Drawing - Sun, Dec 18</div>
          <div className="fs-16 color-gray-5">Estimated Jackpot</div>
          <div className="fs-32 fw-bold color-yellow-4">$45 MILLION</div>
          <div className="fs-12 color-gray-5">Cash Value: $22.9 Million</div>
        </div>
      </div>
      <div className="col-6">
        <div
          className=" main-card"
          style={{
            backgroundImage: `url(${Bg2})`,
          }}
        >
          <div className="fs-32  fw-bold">Countdown to Drawing</div>
          <div className=" d-flex flex-row w-70 justify-content-between">
            <div className="d-flex flex-column align-items-center">
              <div className="fs-32 fw-bold color-yellow-4">46</div>
              <div className="fs-16 color-gray-5 mt-3">Hours</div>
            </div>
            <div className="fs-32 fw-bold color-yellow-4">:</div>
            <div className="d-flex flex-column align-items-center">
              <div className="fs-32 fw-bold color-yellow-4">12</div>
              <div className="fs-16 color-gray-5 mt-3">Min</div>
            </div>
            <div className="fs-32 fw-bold color-yellow-4">:</div>
            <div className="d-flex flex-column align-items-center">
              <div className="fs-32 fw-bold color-yellow-4">00</div>
              <div className="fs-16 color-gray-5 mt-3">Second</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6 d-flex align-items-center justify-content-center mt-4">
        <img src={BigSuitcase} alt=""></img>
      </div>
      <div className="col-6 mt-4 mystery-suitcase">
        <div className="fs-32 fw-bold mb-3">Mystery Suitcase #10</div>
        <div className="buy-now-card">
          <div className="fs-16 color-gray-5">Price</div>
          <div className="fw-bold color-yellow-4 fs-32">0.75 BUSD</div>
          <div className="fs-16 color-gray-5">$327.54</div>
          <Button className="btn-buy-now">BUY NOW</Button>
        </div>
        <div className="report-card">
          <div>
            You can{' '}
            <span className="color-yellow-4 fw-bold">Report any problem</span>{' '}
            you found.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
