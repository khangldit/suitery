import './styles.scss';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { Menu } from 'antd';
import Bell from '@assets/svg/bell-notification.svg';
import UKFlag from '@assets/svg/UK_flag.svg';
import SuiteryLogo from '@assets/svg/suitery_logo.svg';
type PropType = {};

const Header = (props: PropType) => {
  //   const {} = props;
  const navigate = useNavigate();

  //   const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState('');
  const items: { label: string; key: string }[] = [
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
    if (window.location && window.location.pathname) {
      setCurrent(window.location.pathname);
    }
  }, []);

  // #### functions

  // #### render
  return (
    <div className="main-layout-header">
      <div className="left d-flex flex-row flex-1">
        <div className="cursor-pointer">
          <Link
            to={'/'}
            onClick={() => {
              setCurrent('');
            }}
          >
            <img src={SuiteryLogo} alt="" />
          </Link>
        </div>
        <div className="flex-1">
          <Menu
            className="header-menu"
            onClick={(e) => {
              setCurrent(e.key);
            }}
            selectedKeys={[current]}
            mode="horizontal"
          >
            {items &&
              items.map((item) => {
                return (
                  <Menu.Item
                    key={item.key}
                    onClick={() => {
                      navigate(item.key);
                    }}
                  >
                    <div className="fs-16 fw-bold clickable">{item.label}</div>
                  </Menu.Item>
                );
              })}
          </Menu>
        </div>
      </div>
      <div className="right d-flex flex-row align-items-center">
        <div className="btn">
          <img src={UKFlag} alt="" />
        </div>
        <div className="btn me-2">
          <img src={Bell} alt="" />
        </div>
        <Button className="btn-grey fs-16">How To Play</Button>
        <Button className="btn-yellow  fs-16">Connect Wallet</Button>
      </div>
    </div>
  );
};
export default Header;
