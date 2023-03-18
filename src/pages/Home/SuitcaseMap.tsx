import React, { useEffect, useState } from 'react';
import Suitcase from '@assets/svg/suitcase_item.svg';
import CustomPagination from '@components/ui/CustomPagination';

type PropType = {};

const SuitcaseMap = (props: PropType) => {
  //   const {} = props;
  const [suitcases, setSuitcases] = useState<number[]>([]);

  useEffect(() => {
    let array: number[] = [];
    for (let i = 0; i < 35; i++) {
      array.push(i);
    }
    setSuitcases(array);
  }, []);

  // #### functions

  // #### render
  const renderItem = (item) => {
    return (
      <button className="suitcase-item-wrapper">
        <div className="suitcase-item">
          <img src={Suitcase} alt="" />
          <div>Box {item}</div>
        </div>
      </button>
    );
  };
  return (
    <React.Fragment>
      <div className="fs-32 fw-bold mb-2">Suitcase Map</div>
      <div className="suitcase-map">
        {suitcases.map((item) => {
          return renderItem(item);
        })}
      </div>
      <CustomPagination
        meta={{
          page_size: 35,
          total: 3000,
          current_page: 1,
        }}
      />
    </React.Fragment>
  );
};
export default SuitcaseMap;
