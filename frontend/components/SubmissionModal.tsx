import React, { useState } from 'react';
import Modal from './common/Modal';
import {
  createSubmission,
  saveSubmission,
  patchAndSubmitForReview,
  createAndSubmitForReview,
} from '../store/userTasksSlice';
import { useDispatch } from 'react-redux';
import { SubmissionEditor } from './forms/SubmissionEditor';
import { dateFormater } from '../utils/datetime';

export const SubmissionModal: React.FC<any> = (props) => {
  const { task } = props;
  const [submission, setSubmission] = useState(
    props.task.userTask[0].submission ?? { description: '' },
  );
  const dispatch = useDispatch();

  const handleSave = async (e) => {
    if (task.userTask[0]?.submission?.id) {
      const saveSubmissionRequest = await dispatch(saveSubmission(submission));
      return saveSubmissionRequest;
    }

    const createSubmissionRequest = await dispatch(
      createSubmission({
        taskId: task.id,
        submission,
      }),
    );
    return createSubmissionRequest;
  };

  const handleSubmit = async () => {
    if (task.userTask[0]?.submission?.id) {
      const submitForReviewRequest = await dispatch(
        patchAndSubmitForReview({
          userTaskId: task.userTask[0].id,
          submission,
        }),
      );
      return submitForReviewRequest;
    }

    const createSubmissionRequest = await dispatch(
      createAndSubmitForReview({
        taskId: task.id,
        userTaskId: task.userTask[0].id,
        submission,
      }),
    );
    return createSubmissionRequest;
  };

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <div className="px-5 py-4">
        <div className="row">
          <div className="col-10">
            <div className="font-sm med-grey mb-2">Task</div>
            <h3 className="font-xl">{task.name}</h3>
          </div>

          <div className="col-2">
            <div className="d-flex justify-content-end">
              <h3>{task.points}</h3>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <div className="font-5">Duration</div>
            <div className="font-mds orange">{`${dateFormater(task.startDate)} - ${dateFormater(
              task.endDate,
            )}`}</div>
          </div>
        </div>
      </div>

      <div className="divider-h"></div>

      <SubmissionEditor taskId={task.id} submission={submission} setSubmission={setSubmission} />

      <div className="row mt-5 px-5 py-4">
        <div className="col d-flex justify-content-around">
          <button className="button-dashed button-green" onClick={handleSave}>
            Save
          </button>
          <button className="button-solid button-orange" onClick={handleSubmit}>
            Submit For Review
          </button>
        </div>
      </div>
    </Modal>
  );
};
