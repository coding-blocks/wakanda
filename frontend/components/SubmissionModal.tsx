import React, { useState } from 'react';
import Modal from './common/Modal';
import { fetchTask, saveSubmission, submitForReview } from '../store/userTasksSlice';
import { useDispatch } from 'react-redux';
import { SubmissionEditor } from './forms/SubmissionEditor';
import { dateFormater } from '../utils/datetime';
import Button from './common/Button';

export interface SubmissionModalProps {
  task: any;
  show: boolean;
  setShow: (boolean) => void;
  onAfterAdd?: (time) => void;
}

export const SubmissionModal: React.FC<any> = (props: SubmissionModalProps) => {
  const [submission, setSubmission] = useState(
    props.task.userTask[0].submission ?? { description: '', submissionAssets: [] },
  );
  const dispatch = useDispatch();

  const handleSave = async () => {
    const saveSubmissionRequest = await dispatch(
      saveSubmission({ taskId: props.task.id, submission }),
    );
    setSubmission(saveSubmissionRequest.payload);
    return saveSubmissionRequest;
  };

  const handleSubmitForReview = async () => {
    const submitForReviewRequest = await dispatch(
      submitForReview({ taskId: props.task.id, submission }),
    );
    setSubmission(submitForReviewRequest.payload);
    await dispatch(fetchTask({ taskId: props.task.id }));
    if (props.onAfterAdd) {
      props.onAfterAdd(1000);
    }
    return submitForReviewRequest;
  };

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <div className="p-30">
        <div className="row no-gutters">
          <div className="flex-1">
            <div className="font-4 wakanda-grey mb-2">Task</div>
            <h3 className="heading-5">{props.task.name}</h3>
          </div>

          <div className="">
            <div className="row no-gutters align-items-center justify-content-end">
              <img
                className="mx-3"
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/wakanda-star.svg"
                style={{ height: '30px' }}
              />
              <div className="heading-5 wakanda-grey bold">{props.task.points}</div>
            </div>
          </div>
        </div>

        <div className="row no-gutters align-items-center mt-4">
          <div className="col">
            <div className="font-5">Duration</div>
            <div className="blue-text mt-1">{`${dateFormater(
              props.task.startDate,
            )} - ${dateFormater(props.task.endDate)}`}</div>
          </div>
        </div>
      </div>

      <div className="divider-h"></div>

      <SubmissionEditor
        taskId={props.task.id}
        submission={submission}
        setSubmission={setSubmission}
        disabled={props.task.userTask[0].status !== 'draft'}
      />

      <div className="row no-gutters align-items-center mt-30 p-30">
        <div className="col d-flex justify-content-between">
          <Button
            className="button-primary button-primary--rejected"
            action={() => props.onAfterAdd(0)}
            activeText="Closing"
            text="Cancel"
          />
          <Button
            className="button-primary"
            action={handleSave}
            disabled={props.task.userTask[0].status !== 'draft'}
            activeText="Saving"
            text="Save"
          />
          <Button
            className="button-primary button-primary--accepted"
            action={handleSubmitForReview}
            disabled={props.task.userTask[0].status !== 'draft'}
            activeText="Submitting"
            text="Submit For Review"
          />
        </div>
      </div>
    </Modal>
  );
};
