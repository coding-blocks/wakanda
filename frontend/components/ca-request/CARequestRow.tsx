import React, { useState } from 'react';
import ShowCARequestModal from './ShowCARequestModal';

export default ({ caRequest }) => {
  const [showCARequestModal, setShowCARequestModal] = useState(false);
  return (
    <div className="py-4 border-bottom">
      <div className="row no-gutters justify-content-between align-items-center">
        <div className="font-sm">
          <span className="bold mr-2">{caRequest.name}</span>
        </div>
        <div className="font-sm">
          <span className="bold mr-2">{`Email : ${caRequest.email}`}</span>
        </div>
        <div className="d-flex justify-content-end">
          <button className="button-primary" onClick={() => setShowCARequestModal(true)}>
            Open
          </button>
        </div>
      </div>
      <ShowCARequestModal
        show={showCARequestModal}
        setShow={setShowCARequestModal}
        caRequest={caRequest}
        onAfterAdd={() => {
          setTimeout(() => {
            setShowCARequestModal(false);
          }, 1000);
        }}
      />
    </div>
  );
};
