import React from 'react';
import { useTask } from '../../hooks/task';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import AdminTaskCard from '../../components/AdminTaskCard';

const AdminPanel: React.FC = () => {
  const [tasks, setTasks] = React.useState([]);
  const { isActive } = useTask(async () => {
    const resp = await api.get('task/');
    setTasks(resp.data.data);
  }, true);

  return (
    <div>
      <div className="row justify-content-between align-items-center">
        <div>
          <input
            placeholder="What do you want to learn?"
            type="text"
            className="input-search bg-light-grey w-100 p-3"
          />
        </div>
        <div>
          <Link className="button-solid button-orange" to="/admin/tasks/add">
            Create New Task
          </Link>
        </div>
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
