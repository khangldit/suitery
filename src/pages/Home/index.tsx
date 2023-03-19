import './styles.scss';
import React, { useRef, useState } from 'react';
import Bg1 from '@assets/svg/bg_coin_1.svg';
import Bg2 from '@assets/svg/bg_coin_2.svg';
import BigSuitcase from '@assets/svg/big_suitcase.svg';
import { Button, Input, Modal } from 'antd';
import TopBuyerList from './TopBuyerList';
import SuitcaseMap from './SuitcaseMap';
import LastUpdateList from './LastUpdateList';
import DefaultBackground from '@components/Layout/DefaultBackground';
import CheckBox from '@components/CheckBox';
import GeneralModal from '@components/GeneralModal';
import CurrencyInput from '@components/CurrencyInput';
import { useNavigate } from 'react-router-dom';
import { MY_ITEM } from '@routes/constants';
import TimeDisplay from '@components/TimeDisplay';
import moment from 'moment';
const Home = () => {
  const [selectLever, setLever] = useState(1);
  const modalRef = useRef(null);
  const modalNothingRef = useRef(null);
  const modalEarnRef = useRef(null);
  const navigate = useNavigate();
  const renderModals = () => {
    return (
      <React.Fragment>
        <GeneralModal
          ref={(ref) => (modalRef.current = ref)}
          width={420}
          title={`Are you sure you want to purchase ${selectLever} boxes?`}
          footer={
            <div>
              <Button
                className="fs-16 fw-bold lh-24 btn-yellow mb-3"
                onClick={() => {
                  navigate(MY_ITEM);
                }}
              >
                Yes, Buy Now & Add To My Items
              </Button>
              <Button
                onClick={() => {
                  modalRef.current && modalRef.current.close();
                  let random = Math.floor(Math.random() * 9 + 1);
                  if (random % 2 === 0) {
                    modalEarnRef.current && modalEarnRef.current.show();
                  } else {
                    modalNothingRef.current && modalNothingRef.current.show();
                  }
                }}
                className="fs-16 fw-bold lh-24 btn-yellow mb-3"
              >
                Yes, Buy Now & Open
              </Button>
            </div>
          }
        >
          <div>
            <div className="d-flex flex-row align-items-center justify-content-between mb-2">
              <div className=" color-gray-14">Your Balance</div>
              <div className="">9.37 BUSD</div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between mb-2">
              <div className=" color-gray-14">The minimum box price is</div>
              <div className="">9.37 BUSD</div>
            </div>
            <CurrencyInput />
            <div className=" color-gray-14 mt-2">9.37 BUSD</div>
            <div className=" color-gray-14 mt-3">
              Once bought, it cannot be withdraw.
            </div>
          </div>
        </GeneralModal>
        <GeneralModal
          ref={(ref) => (modalNothingRef.current = ref)}
          width={420}
          title={`You Earn...`}
          footer={
            <div>
              <Button className="fs-16 fw-bold lh-24 btn-yellow mb-3">
                Nothing
              </Button>
            </div>
          }
        >
          <div>
            <img style={{ maxWidth: '100%' }} alt="" src={BigSuitcase} />
          </div>
        </GeneralModal>
        <GeneralModal
          ref={(ref) => (modalEarnRef.current = ref)}
          width={420}
          title={`You Earn...`}
          footer={
            <div>
              <Button className="fs-16 fw-bold lh-24 btn-yellow mb-3">
                CLAIM $100 NOW
              </Button>
            </div>
          }
        >
          <div>
            <img style={{ maxWidth: '100%' }} alt="" src={BigSuitcase} />
          </div>
        </GeneralModal>
      </React.Fragment>
    );
  };
  return (
    <DefaultBackground>
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
            <div className="w-70">
              <TimeDisplay time={moment()} />
            </div>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center mt-4">
          <img src={BigSuitcase} alt=""></img>
        </div>
        <div className="col-6 mt-4 mystery-suitcase">
          <div className="fs-32 fw-bold mb-3">Mystery Suitcase #10</div>
          <div className="buy-now-card">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <div className="fs-16 color-gray-5">Price</div>
                <div className="fw-bold color-yellow-4 fs-32">0.75 BUSD</div>
                <div className="fs-16 color-gray-5">$327.54</div>
              </div>
              <div className="select-lever-group">
                {[1, 10, 100].map((i) => {
                  return (
                    <div className="d-flex align-items-center me-2">
                      <span className="me-1">{i}x </span>
                      <CheckBox
                        checked={selectLever === i}
                        onChange={() => {
                          setLever(i);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <Button
              onClick={() => {
                modalRef.current && modalRef.current.show();
              }}
              className="btn-buy-now"
            >
              BUY NOW
            </Button>
          </div>
          <div className="report-card">
            <div>
              You can{' '}
              <span className="color-yellow-4 fw-bold">Report any problem</span>{' '}
              you found.
            </div>
          </div>
        </div>
        <div className="col-3 d-flex flex-column">
          <TopBuyerList />
        </div>
        <div className="col-9">
          <SuitcaseMap />
        </div>
        <div className="col-12">
          <LastUpdateList />
        </div>
      </div>
      {renderModals()}
    </DefaultBackground>
  );
};

export default Home;
