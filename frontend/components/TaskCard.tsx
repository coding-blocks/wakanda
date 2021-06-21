import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { dateFormater } from '../utils/datetime';
import { SubmissionModal } from './SubmissionModal';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className="row no-gutters">
          <div className="flex-1">
            <div className="font-4 wakanda-grey mb-10">Task</div>
            <h3 className="heading-5">{task.name}</h3>
          </div>

          <div className="">
            <div className="row no-gutters align-items-center justify-content-end">
              <img
                className="mx-3"
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/wakanda-star.svg"
                style={{ height: '30px' }}
              />
              <div className="heading-5 wakanda-grey bold">
                {status === 'draft'
                  ? task.points
                  : `${task.userTask[0].assignedPoints}/${task.points}`}
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters mt-4">
          <div className="col">
            <div className="font-2 wakanda-grey">Duration</div>
            <div className="blue-text mt-1">{`${dateFormater(task.startDate)} - ${dateFormater(
              task.endDate,
            )}`}</div>
          </div>
          <div className="col">
            <div className="row no-gutters align-items-center justify-content-end">
              <button
                className={`button-primary ${
                  status === 'draft' ? '' : `button-primary--${status}`
                }`}
                onClick={() => setShowSubmitModal(true)}
              >
                {status !== 'draft' && (
                  <div className="mr-2">
                    <FontAwesomeIcon icon={status === 'rejected' ? faTimesCircle : faCheckCircle} />
                  </div>
                )}
                {getStatusText(status)}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-h"></div>

      <div className="p-30 wakanda-grey">
        <div className="row no-gutters" onClick={handleAccordianClick}>
          <div className="pointer bold v-align-ma">
            Details and Instructions
            <FontAwesomeIcon icon={faAngleDown} size="sm" className="ml-2" />
          </div>
        </div>

        <TaskAccordian showContent={showContent}>
          <ReactMarkdown className="mt-25">{task.description}</ReactMarkdown>
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

function getStatusText(string) {
  if (string === 'draft') {
    return 'Submit';
  } else if (string === 'review') {
    return 'Submitted for Review';
  } else return capitalizeFirstLetter(string);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default TaskCard;
