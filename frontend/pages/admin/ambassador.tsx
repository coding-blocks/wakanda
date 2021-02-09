import React from 'react';
import PaginationPills from '../../components/common/Pagination';
import { useTask } from '../../hooks/task';
import api from '../../services/api';
import Button from '../../components/common/Button';

export default () => {
  const [query, setQuery] = React.useState('');
  const [users, setUsers] = React.useState([]);

  const [activePage, setActivePage] = React.useState(1);
  const [paginationMeta, setPaginationMeta] = React.useState(null);

  const { isActive, trigger } = useTask(async () => {
    const limit = 10;
    const response = await api.get('user', {
      params: {
        q: query,
        limit,
        offset: (activePage - 1) * limit,
      },
    });
    setUsers(response.data.data);
    setPaginationMeta(response.data.meta.pagination);
  }, true);

  React.useEffect(() => {
    trigger();
  }, [query, activePage]);

  const handleOnChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  if (users === null || paginationMeta === null) {
    return <div className="">loading....</div>;
  }

  async function onSave(role, userId) {
    const resp = await api.patch(`user/${userId}`, {
      role: role === 'default' ? 'ambassador' : 'default',
    });
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="flex-1 bg-white br-25 mb-3">
          <input
            placeholder="Search using user email or name"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="input-search w-100 p-3"
          />
        </div>
      </div>
      <div className="card br-10 bg-white py-2">
        {users.map((user, i) => (
          <div key={i}>
            <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
              <div className="font-sm">
                {user.name} ({user.email})
              </div>
              <Button
                action={() => onSave(user.role, user.id)}
                className="button-solid button-orange"
                text={user.role === 'ambassador' ? 'Remove CA' : 'Make CA'}
                activeText="Updating"
              />
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-center mt-4">
          <PaginationPills meta={paginationMeta} onChange={handleOnChange} />
        </div>
      </div>
    </div>
  );
};
