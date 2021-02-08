import React from 'react';
import Button from '../common/Button';
import { useTask } from '../../hooks/task';
import Modal from '../common/Modal';
import api from '../../services/api';
import taskView from '~/pages/admin/task-view';

export interface AddUserModalProps {
  taskId: number;
  show: boolean;
  setShow: (boolean) => void;
  onAfterAdd?: () => void;
}

const UserRow = ({ user, onAdd }) => (
  <div className="d-flex justify-content-between align-items-center py-3 border-bottom">
    <div className="font-sm">
      {user.name} ({user.email})
    </div>
    <div>
      <Button
        className="button-solid button-orange"
        action={() => onAdd(user)}
        text="Add"
        activeText="Adding"
      />
    </div>
  </div>
);

export default (props: AddUserModalProps) => {
  const [query, setQuery] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [lastError, setLastError] = React.useState(null);
  const [lastMessage, setLastMessage] = React.useState(null);

  const addUser = async (user) => {
    try {
      const userTask = await api.post('user-task', {
        userId: user.id,
        taskId: props.taskId,
      });
      setLastError(null);
      setLastMessage(`Added user ${user.name}`);

      if (props.onAfterAdd) {
        props.onAfterAdd();
      }
    } catch (err) {
      setLastError(err.response.data.errors[0].detail);
      setLastMessage(null);
    }
  };

  const { isActive, trigger } = useTask(async () => {
    const response = await api.get('user', {
      params: {
        q: query,
      },
    });
    setUsers(response.data.data);
  }, true);

  React.useEffect(() => {
    trigger();
  }, [query]);

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <div className="p-4" style={{ minWidth: 600 }}>
        <div>
          <div className="font-md">Add User</div>
        </div>
        <div className="mt-4">
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
        </div>
        {lastError && (
          <div className="mt-3">
            <div className="red t-align-c">{lastError}</div>
          </div>
        )}
        {lastMessage && (
          <div className="mt-3">
            <div className="green t-align-c">{lastMessage}</div>
          </div>
        )}
        <div>
          {users.map((user, i) => (
            <div key={i}>
              <UserRow user={user} onAdd={addUser} />
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </Modal>
  );
};
