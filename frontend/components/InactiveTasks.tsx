import React, { useEffect, useState } from 'react';
import { useTask } from '../hooks/task';
import client from '../services/api';
import TaskCard from './TaskCard';
import { Pagination } from '../types/pagination';
import PaginationPills from './common/Pagination';

export const InactiveTasks: React.FC = () => {
  const [tasks, setTasks] = useState(null);
  const [pagination, setPagination] = React.useState<Pagination>(null);
  const [activePage, setActivePage] = React.useState(1);

  // TODO : change this to incative when endpoint is created
  const { trigger, isActive } = useTask(async () => {
    const limit = 10;
    const request = {
      params: {
        status: ['rejected', 'accepted'],
        offset: (activePage - 1) * limit,
      },
    };
    const response = await client.get('/task/active', request);
    setPagination(response.data.meta.pagination);
    setTasks(response.data.data);
  }, true);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

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

  return (
    <div>
      {renderTasks}
      <div className="d-flex justify-content-center">
        <PaginationPills meta={pagination} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default InactiveTasks;
