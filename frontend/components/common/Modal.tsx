import React from 'react';
import Modal from 'react-modal';

export default (props) => {
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
      <div className="card br-10 bg-white p-4 container">{...props.children}</div>
    </Modal>
  );
};
