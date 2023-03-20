import './styles.scss';
import DefaultBackground from '@components/Layout/DefaultBackground';
import React, { useEffect, useState } from 'react';
import BNB from '@assets/svg/currency/bnb_icon.svg';
import Next from '@assets/svg/next_icon.svg';
import InvestChart from './Charts/InvestChart';
import BalanceChart from './Charts/BalanceChart';
import RadioGroup from '@components/RadioGroup';
import MileStone from './Charts/MileStone';
type PropType = {};

const MyItem = (props: PropType) => {
  //   const {} = props;

  //   const [visible, setVisible] = useState(false);

  //   useEffect(() => {}, []);

  // #### functions

  // #### render
  return (
    <DefaultBackground>
      <div className="my-item-page page">
        <div className="row">
          <div className="col-9">
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
          <div className="col-3">
            <div className="my-item-card align-items-center">
              <div className="fs-16">Your Balance</div>
              <div className="fs-48 fw-bold">230.9</div>
              <span>
                <img src={BNB} alt="bnb" className="me-1" />
                BNB
              </span>
              <div className="fs-16 top-up-balance clickable mt-2">
                Top up Balance <img alt="next" src={Next} className="ms-1" />
              </div>
              <BalanceChart />
            </div>
          </div>
          <div className="col-12">
            <div
              className="my-item-card align-items-center"
              style={{ height: 200 }}
            >
              <div className="fs-32 fw-bold">Milestone</div>
              <div className="milestone-chart mt-2 mb-5">
                <MileStone
                  total={200}
                  milestones={[10, 50, 100]}
                  current={50}
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
