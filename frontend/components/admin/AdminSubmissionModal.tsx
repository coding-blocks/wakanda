import React, { useState } from 'react';
import Modal from '../common/Modal';
import { SubmissionEditor } from '../forms/SubmissionEditor';
import client from '../../services/api';
import Button from '../common/Button';
import { useTask } from '../../hooks/task';

export const SubmissionModal: React.FC<any> = (props) => {
  const { id } = props;
  const { status } = props;
  const [submission, setSubmission] = useState();
  const [task, setTask] = useState();
  const { isActive, trigger } = useTask(async () => {
    const resp: any = await client.get(`submission/${id}`);
    setSubmission(resp.data.data);
    const { data: response } = await client.get(`/task/${id}`);
    const taskFetched = response.data;
    setTask(taskFetched);
  }, true);

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
