import React from 'react';
import Modal from '../common/Modal';
import { SubmissionEditor } from '../forms/SubmissionEditor';
import client from '../../services/api';
import Button from '../common/Button';

export const SubmissionModal: React.FC<any> = (props) => {
  const { id, task, submission, status } = props;

  async function handleSubmission(value) {
    await client.post(`submission/${id}/status`, {
      status: value,
      points: (task as any).points,
    });

    if (props.onAfterAdd) {
      props.onAfterAdd();
    }
  }

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <SubmissionEditor submission={submission} disabled />

      <div className="row mt-5 px-5 py-4">
        <div className="col d-flex justify-content-around">
          <Button
            disabled={status !== 'review'}
            className="button-primary button-primary--accepted"
            action={() => handleSubmission('accepted')}
            activeText="Saving"
            text="Accept"
          />
          <Button
            disabled={status !== 'review'}
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
