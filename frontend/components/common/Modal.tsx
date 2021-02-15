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
      className="d-flex flex-col justify-content-center wakanda"
      overlayClassName="d-flex justify-content-center align-items-center a-cbm"
      style={{
        overlay: {
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(171, 171, 171, 0.75)',
          top: '70px',
        },
      }}
    >
      <div
        className="card br-10 bg-white p-0 overflow-auto"
        style={{ maxHeight: 'calc(100vh - 120px)' }}
      >
        {...props.children}
      </div>
    </Modal>
  );
};
