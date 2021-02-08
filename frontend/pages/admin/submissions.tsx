import React from 'react';
import { useTask } from '../../hooks/task';
import api from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import AdminTaskCard from '../../components/AdminTaskCard';

const AdminPanel: React.FC = () => {
  const { id } = useParams();
  const [tasks, setTasks] = React.useState([]);
  const [query, setQuery] = React.useState('');

  const { isActive, trigger } = useTask(async () => {
    const resp: any = await api.get(`user-task`, {
      params: {
        taskId: id,
        q: query,
      },
    });
    setTasks(resp.data.data);
  }, true);

  React.useEffect(() => {
    trigger();
  }, [query]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="flex-1 bg-white br-25">
          <input
            placeholder="What do you want to learn?"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="input-search w-100 p-3"
          />
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
