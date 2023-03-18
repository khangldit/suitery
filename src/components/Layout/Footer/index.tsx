import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SuiteryIcon from '@assets/svg/suitery_logo.svg';
import Telegram from '@assets/svg/telegram_icon.svg';
import Youtube from '@assets/svg/youtube_icon.svg';
import Twitter from '@assets/svg/twitter_icon.svg';
import { Divider } from 'antd';
type PropType = {};

const index = (props: PropType) => {
  //   const {} = props;
  const cols = [
    [
      {
        label: 'Home',
        path: '/',
      },
      {
        label: 'My Item',
        path: '/my-item',
      },
      {
        label: 'Draw',
        path: '/draw',
      },
    ],
    [
      {
        label: 'News',
        path: '/news',
      },
      {
        label: 'Help center',
        path: '/help-center',
      },
      {
        label: 'FAQ',
        path: '/faq',
      },
    ],
    [
      {
        label: 'White-paper',
        path: '/white-paper',
      },
      {
        label: 'Privacy Policy',
        path: '/privacy-policy',
      },
      {
        label: 'Term of Use',
        path: '/term-of-use',
      },
    ],
  ];

  //   useEffect(() => {}, []);

  //   const [visible, setVisible] = useState(false);

  // #### functions

  // #### render
  return (
    <div
      className="row pt-5 pb-3"
      style={{
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: 'var(--color-gray-24)',
      }}
    >
      <div className="col-3 d-flex flex-column justify-content-between ">
        <img
          className="mb-3"
          style={{ maxWidth: '200px' }}
          src={SuiteryIcon}
          alt=""
        />
        <div className="fs-18 fw-600 ">Join Suitery community</div>
        <div>
          <img className="me-3" src={Telegram} alt="" />
          <img className="me-3" src={Youtube} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
      {cols.map((col) => {
        return (
          <div className="col-3 align-items-center d-flex flex-column">
            {col.map((item, index) => {
              return (
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  className="normal"
                  to={item.path}
                >
                  <div
                    className={`${
                      index ? 'color-gray-13' : 'fw-bold'
                    } fs-16 mb-4`}
                  >
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </div>
        );
      })}
      <div
        className="fw-18 fw-400 color-gray-13 pt-2 mt-5 px-0"
        style={{
          borderTopColor: 'var(--color-gray-18)',
          borderWidth: '1px 0px 0px 0px',
          borderStyle: 'solid',
          flex: 1,
        }}
      >
        © Suitery. Inc. All rights reserved.
      </div>
    </div>
  );
};
export default index;
