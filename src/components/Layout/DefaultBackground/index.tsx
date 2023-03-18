import React from 'react';
import Bg from '@assets/svg/container_bg_gradient.svg';

const DefaultBackground = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: '250%',
        backgroundPositionY: -700,
      }}
    >
      {children}
    </div>
  );
};
export default DefaultBackground;
