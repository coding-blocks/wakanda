import React from 'react';
import Modal from '../common/Modal';
import { SubmissionEditor } from '../forms/SubmissionEditor';
import client from '../../services/api';
import Button from '../common/Button';

export const SubmissionModal: React.FC<any> = (props) => {
  const { id, task, submission, status } = props;
  const [points, setPoints] = React.useState(0);

  function buttonStatus() {
    if (status === 'review' && points <= task.points) {
      return false;
    }
    return true;
  }

  async function handleSubmission(value) {
    if (value === 'rejected') {
      setPoints(0);
    }
    await client.post(`submission/${id}/status`, {
      status: value,
      points,
    });

    if (props.onAfterAdd) {
      props.onAfterAdd();
    }
  }

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <SubmissionEditor submission={submission} disabled />

      <div className="p-30">
        <div className="row">
          <div className="col">
            {/* <label className="font-4">Describe what you did in the task</label> */}
            <input
              // style={"outline:none"}
              min={'0'}
              max={task.points}
              disabled={status !== 'review'}
              type="number"
              placeholder="Assign the points"
              className="input-number w-100 mt-10 bg-light-grey br-5 p-10"
              onChange={(e) => setPoints(Number(e.target.value))}
            ></input>
            {points > task.points ? `Max score for the task is ${task.points}` : ''}
          </div>
        </div>
      </div>

      <div className="row mt-5 px-5 py-4">
        <div className="col d-flex justify-content-around">
          <Button
            disabled={buttonStatus()}
            className="button-primary button-primary--accepted"
            action={() => handleSubmission('accepted')}
            activeText="Saving"
            text="Accept"
          />
          <Button
            disabled={buttonStatus()}
            className="button-primary button-primary--rejected"
            action={() => handleSubmission('rejected')}
            activeText="Submitting"
            text="Reject"
          />
        </div>
      </div>
    </Modal>
  );
};
