import './styles.scss';
import DefaultBackground from '@components/Layout/DefaultBackground';
import React, { useState } from 'react';
// import BNB from '@assets/svg/currency/bnb_icon.svg';
// import Next from '@assets/svg/next_icon.svg';
import InvestChart from './Charts/InvestChart';
// import BalanceChart from './Charts/BalanceChart';
import RadioGroup from '@components/RadioGroup';
import MileStone from './Charts/MileStone';
import SuitcaseTabs from './Charts/SuitcaseTabs';
// import { increase } from '@reducers/counterReducer';
// import { Tabs } from 'antd';
type PropType = {};

const MyItem = (props: PropType) => {
  //   const {} = props;

  //   useEffect(() => {}, []);

  // #### functions

  // #### render
  return (
    <DefaultBackground>
      <div className="my-item-page page">
        <div className="row">
          <div className="col-12">
            <SuitcaseTabs />
            <div className="my-item-card">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="fs-32 fw-bold">Your Investment</div>
                <div>
                  <RadioGroup
                    options={[
                      {
                        key: 'day',
                        label: 'Day',
                      },
                      {
                        key: 'month',
                        label: 'Month',
                      },
                      {
                        key: 'week',
                        label: 'Week',
                      },
                      {
                        key: 'year',
                        label: 'Year',
                      },
                    ]}
                  />
                </div>
              </div>
              <InvestChart />
            </div>
          </div>
          {/* <div className="col-3">
            <div className="my-item-card align-items-center">
              <div className="fs-16">Your Balance</div>
              <div className="fs-48 fw-bold">309.7</div>
              <span>
                <img src={BNB} alt="bnb" className="me-1" />
                BNB
              </span>
              <div
                className="fs-16 top-up-balance clickable mt-2"
                onClick={() => {}}
              >
                Top up Balance <img alt="next" src={Next} className="ms-1" />
              </div>
              <BalanceChart />
            </div>
          </div> */}
          <div className="col-12">
            <div
              className="my-item-card align-items-center"
              style={{ height: 200 }}
            >
              {/* <div className="fs-32 fw-bold">Milestone</div> */}
              <div className="milestone-chart mt-2 mb-5">
                <MileStone
                  total={200}
                  milestones={[10, 50, 100]}
                  current={67}
                  suffix="K"
                  prefix="$"
                />
              </div>
              <div className="fw-16 fw-bold color-gray-13">
                When a milestone is reached, an amount of USDT will be donated
                to the golden box.
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultBackground>
  );
};
export default MyItem;
