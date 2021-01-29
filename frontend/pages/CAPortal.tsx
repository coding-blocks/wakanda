import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActiveTasks, selectAllActiveTasks } from '../store/userTasksSlice';

import { Useroverview } from '../components/UserOverview';
import { TaskCard } from '../components/TaskCard';
import { UserStats } from '../components/UserStats';
import { LeaderBoard } from '../components/LeaderBoard';

const CAPortal: React.FC = () => {
  const dispatch = useDispatch();
  const activeTasksStatus = useSelector((state: any) => state.userTasks.status);
  const activeTasks = useSelector(selectAllActiveTasks);

  useEffect(() => {
    if (activeTasksStatus === 'idle') {
      dispatch(fetchActiveTasks());
    }
  }, [activeTasksStatus, dispatch]);

  let showActiveTasks;
  if (activeTasksStatus === 'succeeded') {
    showActiveTasks = activeTasks.map((task: any) => {
      return <TaskCard key={task.id} task={task} />;
    });
  }

  return (
    <div>
      <Useroverview />
      <div className="row">
        <div className="col-8">{showActiveTasks}</div>
        <div className="col-4">
          <UserStats />
          <LeaderBoard />
        </div>
      </div>
    </div>
  );
};

export default CAPortal;
