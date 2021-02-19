import React from 'react';
import PaginationPills from '../../components/common/Pagination';
import WorkshopRow from '../../components/workshop/WorkshopRow';
import { useTask } from '../../hooks/task';
import api from '../../services/api';

export default (archived) => {
  const [query, setQuery] = React.useState('');
  const [workshops, setWorkshops] = React.useState([]);

  const [activePage, setActivePage] = React.useState(1);
  const [paginationMeta, setPaginationMeta] = React.useState(null);

  const { isActive, trigger } = useTask(async () => {
    const limit = 10;
    const response = await api.get('workshop', {
      params: {
        q: query,
        limit,
        offset: (activePage - 1) * limit,
      },
    });
    setWorkshops(response.data.data);
    setPaginationMeta(response.data.meta.pagination);
  }, true);

  React.useEffect(() => {
    trigger();
  }, [query, activePage]);

  const handleOnChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  if (workshops === null || paginationMeta === null) {
    return <div className="">loading....</div>;
  }

  return (
    <div>
      <div className="row no-gutters justify-content-between align-items-center">
        <div className="flex-1 bg-light-grey br-25">
          <input
            placeholder="Search using college name"
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
        {workshops.map((workshop, i) => (
          <div key={i}>
            <WorkshopRow workshop={workshop} />
          </div>
        ))}
        <div className="d-flex justify-content-center mt-4">
          <PaginationPills meta={paginationMeta} onChange={handleOnChange} />
        </div>
      </div>
    </div>
  );
};
