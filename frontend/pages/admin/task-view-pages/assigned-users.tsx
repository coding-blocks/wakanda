import React from 'react';
import { useParams } from 'react-router-dom';
import PaginationPills from '../../../components/common/Pagination';
import AddUserModal from '../../../components/user-task/AddUserModal';
import UserTaskUserRow from '../../../components/user-task/UserTaskUserRow';
import { useTask } from '../../../hooks/task';
import api from '../../../services/api';

export default () => {
  const { id } = useParams();
  const [query, setQuery] = React.useState('');
  const [userTasks, setUserTasks] = React.useState([]);
  const [showAddUserModal, setShowAddUserModal] = React.useState(false);

  const [activePage, setActivePage] = React.useState(1);
  const [paginationMeta, setPaginationMeta] = React.useState(null);

  const { isActive, trigger } = useTask(async () => {
    const limit = 10;
    const response = await api.get('user-task', {
      params: {
        taskId: id,
        q: query,
        limit,
        offset: (activePage - 1) * limit,
      },
    });
    setUserTasks(response.data.data);
    setPaginationMeta(response.data.meta.pagination);
  }, true);

  const addAllUsers = async () => {
    try {
      const userTask = await api.post('user-task/all', {
        taskId: id,
      });
      trigger();
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    trigger();
  }, [query, activePage]);

  const handleOnChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  if (userTasks === null || paginationMeta === null) {
    return <div className="">loading....</div>;
  }

  return (
    <div>
      <div className="row no-gutters justify-content-between align-items-center">
        <div className="flex-1 bg-light-grey br-25">
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
        <div className="ml-3">
          <button className="button-primary" onClick={() => setShowAddUserModal(true)}>
            Add User
          </button>
        </div>

        <div className="ml-3">
          <button className="button-primary" onClick={() => addAllUsers()}>
            Add All User
          </button>
        </div>
      </div>
      <div>
        {userTasks.map((userTask, i) => (
          <div key={i}>
            <UserTaskUserRow userTask={userTask} onAfterDelete={() => trigger()} />
          </div>
        ))}
        <div className="d-flex justify-content-center mt-4">
          <PaginationPills meta={paginationMeta} onChange={handleOnChange} />
        </div>
      </div>

      <AddUserModal
        show={showAddUserModal}
        setShow={setShowAddUserModal}
        taskId={id}
        onAfterAdd={() => {
          trigger();
          setTimeout(() => {
            setShowAddUserModal(false);
          }, 1000);
        }}
      />
    </div>
  );
};
