import './styles.scss';
import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { MetaType } from 'src/types';
type PropType = {
  meta?: MetaType;
};

const CustomPagination = (props: PropType) => {
  const { meta } = props;

  //   useEffect(() => {}, []);

  //   const [visible, setVisible] = useState(false);

  // #### functions

  // #### render
  return (
    <div className="custom-pagination">
      <Pagination
        showSizeChanger={false}
        defaultCurrent={meta.current_page || 1}
        showTotal={(total: number, range: any) => {
          console.log('________ShowTotal:', total, range);
          return <div>Total {total} items</div>;
        }}
        total={meta.total || 0}
        pageSize={meta.page_size || 10}
        itemRender={(a: number, type: string, ele: React.ReactNode) => {
          console.log('________itemRender', a, type, ele);

          switch (type) {
            case 'prev':
              return '<';
            case 'next':
              return '>';
            case 'jump-next':
            case 'jump-prev':
              return '...';
            default:
              return ele;
          }
        }}
      />
    </div>
  );
};
export default CustomPagination;
