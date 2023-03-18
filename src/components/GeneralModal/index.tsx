import './styles.scss';
import { Modal } from 'antd';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import Close from '@assets/svg/close_icon.svg';
type PropType = {
  title?: string;
  width?: number;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const GeneralModal = (props: PropType, ref) => {
  const { title, children, width, footer } = props;

  const [modalVisible, setVisible] = useState(false);

  //   useEffect(() => {}, []);
  useImperativeHandle(ref, () => ({ show, close }));
  // #### functions
  const show = () => {
    setVisible(true);
  };
  const close = () => {
    onCancel();
  };
  const onCancel = () => {
    setVisible(false);
  };
  // #### render
  return (
    <Modal
      onCancel={onCancel}
      width={width || 700}
      wrapClassName="general-modal-wrapper"
      className="general-modal"
      open={modalVisible}
      title={null}
      closable={null}
      footer={null}
    >
      <div className="header  mb-3">
        <div className="title fs-32 fw-bold lh-40">
          {title || 'Modal title'}
        </div>
        <div className="close clickable" onClick={() => onCancel()}>
          <img src={Close} alt="close_icon" />
        </div>
      </div>
      <div
        className="p-3 mb-3"
        style={{
          backgroundColor: 'var(--color-gray-23)',
          borderRadius: 1,
        }}
      >
        {children}
      </div>
      <div>{footer || null}</div>
    </Modal>
  );
};
export default forwardRef(GeneralModal);
