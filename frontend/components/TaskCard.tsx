import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { SubmissionModal } from './SubmissionModal';
// move this to utils
function ordinal_suffix_of(i) {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return i + 'st';
  }
  if (j === 2 && k !== 12) {
    return i + 'nd';
  }
  if (j === 3 && k !== 13) {
    return i + 'rd';
  }
  return i + 'th';
}

function dateFormater(date: string) {
  const d = new Date(date);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  return `${ordinal_suffix_of(d.getDate())} ${months[d.getMonth()]}`;
}

const TaskAccordian = (props) => {
  if (props.showContent) return <div>{props.children}</div>;
  return null;
};

export const TaskCard: React.FC<any> = ({ task }) => {
  const [showContent, setShowContent] = useState(false);
  const handleAccordianClick = () => setShowContent(!showContent);

  const [showSubmitModal, setShowSubmitModal] = useState(false);

  return (
    <div className="card br-10 bg-white my-4">
      <div className="row p-3">
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

      <div className="row p-3">
        <div className="col">
          <div className="card-md">Duration</div>
          <div>{`${dateFormater(task.startDate)} - ${dateFormater(task.endDate)}`}</div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" onClick={() => setShowSubmitModal(true)}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="row p-3" onClick={handleAccordianClick}>
        <div className="col">Details and Instruction {showContent ? 'hello' : 'no thankyou'}</div>
      </div>

      <TaskAccordian showContent={showContent}>
        <ReactMarkdown>{task.description}</ReactMarkdown>
      </TaskAccordian>

      <SubmissionModal setShow={setShowSubmitModal} show={showSubmitModal} />
    </div>
  );
};

export default TaskCard;
