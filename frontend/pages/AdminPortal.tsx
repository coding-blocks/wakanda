import React from 'react';

import { useTask } from '../hooks/task';
import api from '../services/api';
import AllTaskCard from '../components/AllTaskCard';

const AdminPanel: React.FC = () => {
  const { value: tasks, isActive } = useTask(async () => {
    return api.get('task/');
  }, true);

  let showTasks;
  if (!isActive) {
    showTasks = tasks.data.data.map((task: any) => {
      return (
        <div className="mb-4">
          <AllTaskCard key={task.id} task={task} />
        </div>
      );
    });
  }

  return (
    <div>
      {isActive}
      <div>{showTasks}</div>
      <div className="d-flex justify-content-end">
        <button className="button-solid button-orange"> Create New Task</button>
      </div>
    </div>
  );
};

export default AdminPanel;
