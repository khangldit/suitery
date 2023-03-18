import React, { useEffect, useState } from 'react';
import Uncheck from '@assets/svg/uncheck.svg';
import Checked from '@assets/svg/checked.svg';
type PropType = {
  checked: boolean;
  onChange?: (e: boolean) => {} | void;
};

const CheckBox = (props: PropType) => {
  const { checked, onChange } = props;

  //   useEffect(() => {}, []);

  //   const [visible, setVisible] = useState(false);

  // #### functions

  // #### render
  return (
    <div className="cursor-pointer" onClick={() => onChange(checked)}>
      <img src={checked ? Checked : Uncheck} alt="checkbox" />
    </div>
  );
};
export default CheckBox;
