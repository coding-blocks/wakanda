import React, { useState } from 'react';
import { dateFormater } from '../../utils/datetime';
import { SubmissionModal } from './AdminSubmissionModal';

export const AdminSubmissionCard: React.FC<any> = (props) => {
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const { userTask } = props;

  return (
    <div className="card br-10 bg-white p-0">
      <div className="p-20">
        <div className="row no-gutters justify-content-between align-items-center">
          <div className="row no-gutters align-items-center flex-1">
            <img className="s-50X50 round my-auto" src={userTask.user.photo} />
            <div className="pl-sm-20 pl-10 flex-1 my-auto">
              <h4 className="mx-auto extra-bold mb-2">{userTask.user.name}</h4>
              <span className="font-sm med-grey">{userTask.user.college}</span>
            </div>
          </div>
          <div className="pl-10">
            <div className="font-5">Last Updated</div>
            <div className="blue-text mt-1">{`${dateFormater(userTask.updatedAt)}`}</div>
          </div>
        </div>
        <div className="row no-gutters align-items-center mt-4">
          <div className="col">
            <div className="font-5">Description</div>
            <div className="blue-text mt-1">{userTask.submission.description}</div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end">
              <div className="my-auto mx-3">{userTask.status}</div>
              <button className="button-primary" onClick={() => setShowSubmitModal(true)}>
                Open Submission
              </button>
            </div>
          </div>
        </div>
      </div>
      <SubmissionModal
        task={userTask.task}
        submission={userTask.submission}
        setShow={setShowSubmitModal}
        show={showSubmitModal}
        status={userTask.status}
        disabled={userTask.status === 'accepted' || userTask.status === 'rejected'}
        id={userTask.submission.id}
        onAfterAdd={() => {
          setTimeout(() => {
            setShowSubmitModal(false);
            props.onAfterUpdate();
          }, 1000);
        }}
      />
    </div>
  );
};

export default AdminSubmissionCard;
