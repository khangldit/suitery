import React, { useEffect, useState } from 'react';
import Suitcase from '@assets/svg/suitcase_item.svg';
import CustomPagination from '@components/CustomPagination';
type PropType = {};

const TopBuyerList = (props: PropType) => {
  //   const {} = props;

  //   useEffect(() => {}, []);

  const [topBuyers, setTopBuyers] = useState([
    { top: 1, box_number: 1, price: 0.55 },
    { top: 1, box_number: 1, price: 0.55 },
    { top: 1, box_number: 1, price: 0.55 },
    { top: 1, box_number: 1, price: 0.55 },
    { top: 1, box_number: 1, price: 0.55 },
  ]);

  // #### functions

  // #### render
  return (
    <React.Fragment>
      <div className="fs-32 fw-bold mb-3">Top Suitcase Buyer</div>
      <div className="top-suitcase-buyers">
        <div className="header-row d-flex">
          <div className="header-cell flex-1">Top</div>
          <div className="header-cell flex-2">Box number</div>
          <div className="header-cell flex-2">Price</div>
        </div>
        <div className="content">
          {topBuyers.map((buyer, index) => {
            return (
              <div className="item-row d-flex">
                <div className="cell flex-1">{buyer.top}</div>
                <div className="cell flex-2">
                  <img className="me-1" src={Suitcase} alt="" />
                  {buyer.box_number}
                </div>
                <div className="cell flex-column align-items-start flex-2">
                  <div>{buyer.price} BNB</div>
                  <div className="color-gray-10">${buyer.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>{' '}
      <CustomPagination
        meta={{
          page_size: 5,
          total: 15,
          current_page: 2,
        }}
      />
    </React.Fragment>
  );
};
export default TopBuyerList;
