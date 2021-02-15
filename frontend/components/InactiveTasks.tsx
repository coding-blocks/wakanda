import React, { useEffect, useState } from 'react';
import { useTask } from '../hooks/task';
import client from '../services/api';
import TaskCard from './TaskCard';

export const InactiveTasks: React.FC = () => {
  const [tasks, setTasks] = useState(null);

  // TODO : change this to incative when endpoint is created
  const { trigger, isActive } = useTask(async () => {
    const request = {
      params: {
        status: ['rejected', 'accepted'],
      },
    };
    const response = await client.get('/task/active', request);
    setTasks(response.data.data);
  }, true);

  useEffect(() => {
    trigger();
  }, []);

  if (tasks === null) return null;

  const renderTasks = tasks.map((task) => {
    return (
      <div className="my-2 grey">
        <TaskCard task={task} />
      </div>
    );
  });

  return <div className="">{renderTasks}</div>;
};

export default InactiveTasks;
