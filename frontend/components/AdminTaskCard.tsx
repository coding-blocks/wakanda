import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { dateFormater } from '../utils/datetime';
import { Link } from 'react-router-dom';

const TaskAccordian = (props) => {
  if (props.showContent) return <div>{props.children}</div>;
  return null;
};

export const AllTaskCard: React.FC<any> = ({ task }) => {
  const [showContent, setShowContent] = useState(false);
  const handleAccordianClick = () => setShowContent(!showContent);

  return (
    <div className="card br-10 bg-white p-0">
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
          <div className="col">
            <div className="d-flex justify-content-end">
              <Link className="button-primary" to={{ pathname: `/admin/tasks/${task.id}` }}>
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-h"></div>

      <div className="px-5 py-4">
        <div className="row" onClick={handleAccordianClick}>
          <div className="col bold dark-grey pointer">Details and Instruction</div>
        </div>

        <TaskAccordian showContent={showContent}>
          <ReactMarkdown>{task.description}</ReactMarkdown>
        </TaskAccordian>
      </div>
    </div>
  );
};

export default AllTaskCard;
