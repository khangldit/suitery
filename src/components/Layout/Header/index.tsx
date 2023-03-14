import './styles.scss';
import React, { useEffect, useState } from 'react';
import { Button, MenuProps } from 'antd';
import { Menu } from 'antd';
type PropType = {};

const Header = (props: PropType) => {
  //   const {} = props;

  //   const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState('');
  const items: MenuProps['items'] = [
    {
      label: 'Play now',
      key: '/play-now',
    },
    {
      label: 'My Item',
      key: '/my-item',
    },
    {
      label: 'Draw',
      key: '/draw',
    },
  ];
  useEffect(() => {
    window.open(current, '_self');
  }, [current]);

  // #### functions

  // #### render
  return (
    <div className="main-layout-header">
      <div className="left d-flex flex-row">
        <div
          onClick={() => {
            window.open('/', '_self');
          }}
          className="cursor-pointer fs-24 fw-bold"
        >
          SUITERY
        </div>
        <div>
          <Menu
            className="header-menu"
            onClick={(e) => {
              setCurrent(e.key);
            }}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
      </div>
      <div className="right d-flex flex-row align-items-center">
        <Button className="btn-grey">How To Play</Button>
        <Button className="btn-yellow">Connect Wallet</Button>
      </div>
    </div>
  );
};
export default Header;
