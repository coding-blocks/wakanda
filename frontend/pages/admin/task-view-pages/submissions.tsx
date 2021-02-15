import React from 'react';
import { useTask } from '../../../hooks/task';
import api from '../../../services/api';
import { Link, useParams } from 'react-router-dom';
import AdminSubmissionCard from '../../../components/AdminSubmissionCard';
import { Pagination } from '../../../components/common/Pagination';

const AdminPanel: React.FC = () => {
  const { id } = useParams();
  const [userTasks, setUserTasks] = React.useState([]);
  const [paginationMeta, setPaginationMeta] = React.useState(null);
  const [activePage, setActivePage] = React.useState(1);
  const [query, setQuery] = React.useState('');

  const { isActive, trigger } = useTask(async () => {
    const limit = 10;
    const resp: any = await api.get(`user-task`, {
      params: {
        taskId: id,
        status: 'review,accepted,rejected',
        q: query,
        limit,
        offset: (activePage - 1) * limit,
      },
    });
    setUserTasks(resp.data.data);
    setPaginationMeta(resp.data.meta.pagination);
  }, true);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  React.useEffect(() => {
    trigger();
  }, [query, activePage]);

  if (paginationMeta === null) {
    return <div className="">loading....</div>;
  }

  return (
    <div>
      <div className="flex-1 bg-light-grey br-25">
        <input
          placeholder="Search for submissions!"
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
      <div className="d-flex justify-content-center">
        <Pagination meta={paginationMeta} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default AdminPanel;
