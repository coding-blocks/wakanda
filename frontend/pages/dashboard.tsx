import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActiveTasks, selectAllActiveTasks } from '../store/userTasksSlice';

import { Useroverview } from '../components/UserOverview';
import { TaskCard } from '../components/TaskCard';
import { UserStats } from '../components/UserStats';
import { LeaderBoard } from '../components/LeaderBoard';
import InactiveTasks from '../components/InactiveTasks';
import MonthlyLeaderboard from '../components/LeaderBoard/MonthlyLeaderboard';

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

          <div
            className="mt-4 bg-white card br-10"
            onClick={() => setShowArchivedTasks(!showArchivedTasks)}
          >
            <div className="grey">View Task History</div>
          </div>
          <ArchivedTasksAccordian showContent={showArchivedTasks}>
            <div className="mt-2">
              <InactiveTasks />
            </div>
          </ArchivedTasksAccordian>
        </div>
        <div className="col-lg-4 my-4">
          <div className="mb-4">
            <UserStats />
          </div>
          <div className="mb-4">
            <MonthlyLeaderboard url="leaderboard/monthly"></MonthlyLeaderboard>
          </div>
          <LeaderBoard url="leaderboard" />
        </div>
      </div>
    </div>
  );
};

export default CAPortal;
