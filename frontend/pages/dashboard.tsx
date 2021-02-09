import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActiveTasks, selectAllActiveTasks } from '../store/userTasksSlice';

import { Useroverview } from '../components/UserOverview';
import { TaskCard } from '../components/TaskCard';
import { UserStats } from '../components/UserStats';
import { LeaderBoard } from '../components/LeaderBoard';

const ArchivedTasksAccordian = (props) => {
  if (props.showContent) return <div className="">{props.children}</div>;
  return null;
};

const CAPortal: React.FC = () => {
  const dispatch = useDispatch();
  const activeTasksStatus = useSelector((state: any) => state.userTasks.status);
  const activeTasks = useSelector(selectAllActiveTasks);

  const [showArchivedTasks, setShowArchivedTasks] = useState(false);

  useEffect(() => {
    if (activeTasksStatus === 'idle') {
      dispatch(fetchActiveTasks());
    }
  }, [activeTasksStatus, dispatch]);

  let showActiveTasks;
  if (activeTasksStatus === 'succeeded') {
    showActiveTasks = activeTasks.map((task: any) => {
      return (
        <div className="mb-4" key={task.id}>
          <TaskCard task={task} />
        </div>
      );
    });
  }

  return (
    <div>
      <Useroverview />
      <div className="row">
        <div className="col-lg-8 my-4">
          <div className="">{showActiveTasks}</div>

          <div className="mt-4 bg-white" onClick={() => setShowArchivedTasks(!showArchivedTasks)}>
            <ArchivedTasksAccordian showContent={showArchivedTasks}>
              {/* ADD inactive Tasks */}
            </ArchivedTasksAccordian>
          </div>
        </div>
        <div className="col-lg-4 my-4">
          <div className="mb-4">
            <UserStats />
          </div>
          <LeaderBoard />
        </div>
      </div>
    </div>
  );
};

export default CAPortal;
