import React, { useState } from 'react';
import { dateFormater } from '../utils/datetime';
import { Link } from 'react-router-dom';
import { SubmissionModal } from './AdminSubmissionModal';

export interface AdminSubmissionCardProps {
  userTask: any;
}

export const AdminSubmissionCard: React.FC<any> = ({ userTask }: AdminSubmissionCardProps) => {
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  return (
    <div className="card br-10 bg-white p-0">
      <div className="px-5 py-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="row">
            <img className="s-50X50 round my-auto mx-2" src={userTask.user.photo} />
            <div className="ml-4 my-auto">
              <h4 className="mx-auto extra-bold mb-2">{userTask.user.name}</h4>
              <span className="font-sm med-grey">{userTask.user.college}</span>
            </div>
          </div>
          <div>
            <div className="font-5">Last Updated</div>
            <div className="font-mds orange">{`${dateFormater(userTask.updatedAt)}`}</div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="font-5">Description</div>
            <div className="font-mds orange">{userTask.submission.description}</div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end">
              <div className="my-auto mx-3">{userTask.status}</div>
              <button
                disabled={userTask.status === 'accepted' || userTask.status === 'rejected'}
                className="button-solid button-orange"
                onClick={() => setShowSubmitModal(true)}
              >
                Open Submission
              </button>
            </div>
          </div>
        </div>
      </div>
      <SubmissionModal
        setShow={setShowSubmitModal}
        show={showSubmitModal}
        id={userTask.submission.id}
        onAfterAdd={() => {
          setTimeout(() => {
            setShowSubmitModal(false);
          }, 1000);
        }}
      />
    </div>
  );
};

export default AdminSubmissionCard;
