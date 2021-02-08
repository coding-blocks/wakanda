import React from 'react';

import { useTask } from '../../hooks/task';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import AdminTaskCard from '../../components/AdminTaskCard';

const AdminPanel: React.FC = () => {
  const [tasks, setTasks] = React.useState([]);
  const { isActive } = useTask(async () => {
    const resp = await api.get('task/');
    setTasks(resp.data.data);
  }, true);

  const history = useHistory();

  const addTask = () => {
    const path = `tasks/add`;
    history.push(path);
  };

  return (
    <div>
      <div className="row justify-content-between">
        <div>
          <input
            placeholder="What do you want to learn?"
            type="text"
            value=""
            className="input-search bg-light-grey w-100 p-3"
          />
        </div>
        <button className="button-solid button-orange" onClick={addTask}>
          {' '}
          Create New Task
        </button>
      </div>
      <div>
        {tasks.map((task, i) => (
          <div key={i} className="mt-4">
            <AdminTaskCard key={task.id} task={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
