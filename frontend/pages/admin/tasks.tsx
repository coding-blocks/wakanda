import React from 'react';
import { useTask } from '../../hooks/task';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import AdminTaskCard from '../../components/AdminTaskCard';
import PaginationPills from '../../components/common/Pagination';

const AdminPanel: React.FC = () => {
  const [tasks, setTasks] = React.useState([]);
  const [query, setQuery] = React.useState('');

  const [activePage, setActivePage] = React.useState(1);
  const [paginationMeta, setPaginationMeta] = React.useState(null);

  const { isActive, trigger } = useTask(async () => {
    const limit = 5;
    const resp: any = await api.get('task', {
      params: {
        q: query,
        limit,
        offset: (activePage - 1) * limit,
      },
    });
    setTasks(resp.data.data);
    setPaginationMeta(resp.data.meta.pagination);
  }, true);

  React.useEffect(() => {
    trigger();
  }, [query, activePage]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  if (tasks === null || paginationMeta === null) {
    return <div className="">loading....</div>;
  }

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
        <div className="ml-4">
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
      <div className="d-flex justify-content-center mt-3">
        <PaginationPills meta={paginationMeta} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default AdminPanel;
