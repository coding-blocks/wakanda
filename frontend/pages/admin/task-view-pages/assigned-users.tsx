import React from 'react';
import { useParams } from 'react-router-dom';
import AddUserModal from '../../../components/user-task/AddUserModal';
import UserTaskUserRow from '../../../components/user-task/UserTaskUserRow';
import { useTask } from '../../../hooks/task';
import api from '../../../services/api';

export default () => {
  const { id } = useParams();
  const [query, setQuery] = React.useState('');
  const [userTasks, setUserTasks] = React.useState([]);
  const [showAddUserModal, setShowAddUserModal] = React.useState(false);

  const { isActive, trigger } = useTask(async () => {
    const response = await api.get('user-task', {
      params: {
        taskId: id,
        q: query,
      },
    });
    setUserTasks(response.data.data);
  }, true);

  React.useEffect(() => {
    trigger();
  }, [query]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
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
          <button className="button-solid button-orange" onClick={() => setShowAddUserModal(true)}>
            Add User
          </button>
        </div>
      </div>
      <div>
        {userTasks.map((userTask, i) => (
          <div key={i}>
            <UserTaskUserRow userTask={userTask} onAfterDelete={() => trigger()} />
          </div>
        ))}
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
