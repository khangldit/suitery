import { Button, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import SuitcaseItem from '@assets/svg/suitcase_item.svg';
import BigSuitcase from '@assets/svg/big_suitcase.svg';
import Annual from '@assets/svg/anual_ticket.svg';
import Month from '@assets/svg/month_ticket.svg';
import AnnualSmall from '@assets/svg/anual_ticket_small.svg';
import MonthSmall from '@assets/svg/month_ticket_small.svg';
import CustomPagination from '@components/CustomPagination';
type PropType = {};
const SuitcaseTabs = (props: PropType) => {
  //   const {} = props;

  const [openedList, setOpened] = useState([]);
  const [availableList, setAvailable] = useState([]);
  const [mode, setMode] = useState('opened');
  const [selectedOpened, setSelectedOpened] = useState(null);
  const [selectedAvailable, setSelectedAvailable] = useState(null);

  useEffect(() => {
    setAvailable([
      {
        id: '1',
        type: 'month',
      },
      {
        id: '2',
        type: 'month',
      },
      {
        id: '3',
        type: 'month',
      },
      {
        id: '4',
        type: 'annual',
      },
      {
        id: '5',
        type: 'annual',
      },
      {
        id: '6',
        type: 'month',
      },
      {
        id: '7',
        type: 'month',
      },
    ]);
    setOpened([
      {
        id: '1',
        name: 123,
      },
      {
        id: '2',
        name: 34,
      },
      {
        id: '3',
        name: 2,
      },
      {
        id: '4',
        name: 99,
      },
      {
        id: '5',
        name: 12,
      },
    ]);
  }, []);

  // #### functions
  // #### render
  const handleData = () => {
    let array = [];
    for (let i = 0; i < 15; i++) {
      if (mode === 'opened') {
        array.push(
          <div className="available-cell-wrapper">
            <div
              className={`suitcase-cell ${
                selectedOpened &&
                openedList[i] &&
                openedList[i].id === selectedOpened.id
                  ? 'selected-opened'
                  : ''
              }`}
              onClick={() => openedList[i] && setSelectedOpened(openedList[i])}
            >
              {openedList[i] && (
                <>
                  <img alt="" src={openedList[i] && SuitcaseItem} />
                  {openedList[i] && openedList[i].name}
                </>
              )}
            </div>
          </div>
        );
      } else {
        array.push(
          <div className="available-cell-wrapper">
            <div
              className={`suitcase-cell ${
                selectedAvailable &&
                availableList[i] &&
                availableList[i].id === selectedAvailable.id
                  ? 'selected-available'
                  : ''
              }`}
              onClick={() =>
                availableList[i] && setSelectedAvailable(availableList[i])
              }
            >
              {availableList[i] && (
                <>
                  <img
                    alt=""
                    src={
                      availableList[i].type === 'month'
                        ? MonthSmall
                        : AnnualSmall
                    }
                  />
                </>
              )}
            </div>
          </div>
        );
      }
    }
    return array;
  };
  const RightCol = () => {
    return mode === 'opened' ? (
      <div className="col-5 selected-open-right">
        {selectedOpened ? (
          <>
            <img alt="" src={BigSuitcase} />
            {/* <Button className="btn-yellow mt-3 w-30">OPEN</Button> */}
            <Button
              className="btn-yellow fs-16 fw-bold p-2"
              style={{ width: '200px', maxWidth: '80%' }}
            >
              OPEN
            </Button>
          </>
        ) : null}
      </div>
    ) : (
      <div className="col-5 selected-available-right">
        {selectedAvailable ? (
          <>
            <img
              alt=""
              src={selectedAvailable.type === 'month' ? Month : Annual}
            />
          </>
        ) : null}
      </div>
    );
  };
  const renderlList = () => {
    const cells = handleData();
    return (
      <>
        <div className="col-7 px-0">
          <Tabs
            style={{ paddingLeft: '10px' }}
            defaultActiveKey={mode}
            items={[
              {
                key: 'opened',
                label: 'Opened Suitcase',
              },
              {
                key: 'available',
                label: 'Available Suitcase',
              },
            ]}
            onChange={(tab) => {
              setMode(tab);
            }}
          />
          <div className="available-table">{cells}</div>
          <CustomPagination
            showTotal={false}
            meta={{ page_size: 15, current_page: 1, total: 105 }}
          />
        </div>
        <RightCol />
      </>
    );
  };
  return (
    <div className="row suitcase-tabs mb-4">
      <div className="fs-64 lh-80 fw-bold">My Item</div>
      {renderlList()}
    </div>
  );
};
export default SuitcaseTabs;
