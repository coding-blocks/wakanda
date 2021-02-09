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
      {/* <Pagination 
        itemClass="d-inline-block"
        linkClass="m-2"
        activePage={activePage}
        itemsCountPerPage={1}
        totalItemsCount={paginationMeta?.totalPages * 1}
        pageRangeDisplayed={5}
        onChange={()=>console.log("heelo")}
        /> */}

      <Pagination meta={paginationMeta} onChange={handlePageChange} />
    </div>
  );
};

export default AdminPanel;
