import React from 'react';
import { useTask } from '../../../hooks/task';
import api from '../../../services/api';
import { Link, useParams } from 'react-router-dom';
import AdminSubmissionCard from '../../../components/AdminSubmissionCard';

const AdminPanel: React.FC = () => {
  const { id } = useParams();
  const [userTasks, setUserTasks] = React.useState([]);
  const [query, setQuery] = React.useState('');

  const { isActive, trigger } = useTask(async () => {
    const resp: any = await api.get(`user-task`, {
      params: {
        taskId: id,
        status: 'review,accepted,rejected',
        q: query,
      },
    });
    setUserTasks(resp.data.data);
  }, true);

  React.useEffect(() => {
    trigger();
  }, [query]);

  return (
    <div>
      <div className="flex-1 bg-light-grey br-25">
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
      <div>
        {userTasks.map((userTask, i) => (
          <div key={i} className="mt-4">
            <AdminSubmissionCard key={userTask.id} userTask={userTask} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
