import React, { useState } from 'react';
import { dateFormater } from '../utils/datetime';
import { Link } from 'react-router-dom';

export const AdminSubmissionCard: React.FC<any> = ({ task }) => {
  return (
    <div className="card br-10 bg-white p-0">
      <div className="px-5 py-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="row">
            <img className="s-50X50 round my-auto mx-2" src={task.user.photo} />
            <div className="ml-4 my-auto">
              <h4 className="mx-auto extra-bold mb-2">{task.user.name}</h4>
              <span className="font-sm med-grey">{task.user.college}</span>
            </div>
          </div>
          <div>
            <div className="font-5">Last Updated</div>
            <div className="font-mds orange">{`${dateFormater(task.updatedAt)}`}</div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="font-5">Description</div>
            <div className="font-mds orange">{task.submission.description}</div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end">
              <Link
                className="button-solid button-orange"
                to={{ pathname: `/admin/tasks/${task.id}` }}
              >
                Open Submission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubmissionCard;
