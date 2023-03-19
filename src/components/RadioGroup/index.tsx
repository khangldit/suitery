import './styles.scss';
import React, { useEffect, useState } from 'react';

type OptionType = {
  key: string;
  label: string;
};
type PropType = {
  options: OptionType[];
};

const RadioGroup = (props: PropType) => {
  const { options } = props;

  const [selected, setSelected] = useState<OptionType>();

  useEffect(() => {
    if (options && options.length) {
      setSelected(options[0]);
    }
  }, [options]);

  // #### functions

  // #### render
  return (
    <div className="custom-radio-group">
      {options.map((option, index) => {
        return (
          <div
            onClick={() => {
              setSelected(option);
            }}
            className={`option-cell clickable ${
              index ? (index === options.length - 1 ? 'last' : '') : 'fist'
            } ${selected && selected.key === option.key ? 'selected' : ''}`}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};
export default RadioGroup;
