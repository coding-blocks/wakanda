import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { dateFormater } from '../utils/datetime';
import { SubmissionModal } from './SubmissionModal';

const TaskAccordian = (props) => {
  if (props.showContent) return <div>{props.children}</div>;
  return null;
};

export const TaskCard: React.FC<any> = ({ task }) => {
  const [showContent, setShowContent] = useState(false);
  const handleAccordianClick = () => setShowContent(!showContent);

  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const status = task.userTask[0].status;

  return (
    <div className="card br-10 bg-white p-0">
      <div className="p-30">
        <div className="row">
          <div className="col-10">
            <div className="font-sm med-grey mb-2">Task</div>
            <h3 className="font-xl">{task.name}</h3>
          </div>

          <div className="col-2">
            <div className="d-flex justify-content-end mx-1">
              <img
                className="mx-3"
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_filled.svg"
                style={{ height: '30px' }}
              />
              <h3 style={{ fontSize: '2rem' }}>{task.points}</h3>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <div className="font-2 grey">Duration</div>
            <div className="blue-text mt-1">{`${dateFormater(task.startDate)} - ${dateFormater(
              task.endDate,
            )}`}</div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-end">
              <div className="my-auto mx-3">
                {task.userTask[0].status
                  ? task.userTask[0].status === 'review'
                    ? 'Under Review'
                    : null
                  : null}
              </div>
              <button
                className={`button-primary ${
                  status === 'draft' ? '' : `button-primary--${status}`
                }`}
                onClick={() => setShowSubmitModal(true)}
              >
                {status ? (status === 'draft' ? 'Submit' : status) : status}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-h"></div>

      <div className="p-30 med-grey">
        <div className="row" onClick={handleAccordianClick}>
          <div className="col pointer">Details and Instructions</div>
        </div>

        <TaskAccordian showContent={showContent}>
          <ReactMarkdown>{task.description}</ReactMarkdown>
        </TaskAccordian>
      </div>

      <SubmissionModal
        setShow={setShowSubmitModal}
        show={showSubmitModal}
        task={task}
        onAfterAdd={(time = 1000) => {
          setTimeout(() => {
            setShowSubmitModal(false);
          }, time);
        }}
      />
    </div>
  );
};

export default TaskCard;
