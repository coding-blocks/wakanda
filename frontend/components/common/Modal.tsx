import React from 'react';
import Modal from 'react-modal';

export interface ModalProps {
  show: boolean;
  setShow: (boolean) => void;
  children: React.ReactNode[];
}

export default (props: ModalProps) => {
  return (
    <Modal
      isOpen={props.show}
      onRequestClose={() => {
        props.setShow(false);
      }}
      className="d-flex flex-col justify-content-center"
      overlayClassName="d-flex justify-content-center"
      style={{
        overlay: {
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(171, 171, 171, 0.75)',
        },
      }}
    >
      <div className="card br-10 bg-white container">{...props.children}</div>
    </Modal>
  );
};
