import React, { useState } from 'react';
import Button from '../common/Button';
import api from '../../services/api';
import ShowWorkshopModal from './ShowWorkshopModal';
export interface Workshop {
  id: number;
  collegeName: number;
  collegeAddress: string;
  topic: string;
  startDate: Date;
  endDate: Date;
  monetary: string;
  accomodation: string;
  request: string;
  mobile: string;
}

export interface WorkshopRowProps {
  workshop: Workshop;
  hideDone: boolean;
}

export default ({ workshop, hideDone }: WorkshopRowProps) => {
  const [showWorkshopModal, setShowWorkshopModal] = useState(false);

  const markDone = async () => {
    await api.patch(`workshop/${workshop.id}`, { data: { isDone: true } });
  };
  return (
    <div className="py-4 border-bottom">
      <div className="row no-gutters justify-content-between align-items-center">
        <div className="font-sm">
          <span className="bold mr-2">{workshop.collegeName}</span>
        </div>
        <div className="font-sm">
          <span className="bold mr-2">{`Topic : ${workshop.collegeName}`}</span>
        </div>
        <div className="d-flex justify-content-end">
          <div className="my-auto mx-3">
            {!hideDone && (
              <Button
                className="button-primary"
                action={markDone}
                text="Mark Done"
                activeText="Doing"
              />
            )}
          </div>
          <button className="button-primary" onClick={() => setShowWorkshopModal(true)}>
            Open
          </button>
        </div>
      </div>
      <ShowWorkshopModal
        show={showWorkshopModal}
        setShow={setShowWorkshopModal}
        workshop={workshop}
        onAfterAdd={() => {
          setTimeout(() => {
            setShowWorkshopModal(false);
          }, 1000);
        }}
      />
    </div>
  );
};
