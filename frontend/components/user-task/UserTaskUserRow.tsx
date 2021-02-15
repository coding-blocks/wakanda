import React from 'react';
import Button from '../common/Button';
import api from '../../services/api';

export interface UserTask {
  userId: number;
  taskId: number;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'review' | 'accepted' | 'rejected';
  assignedPoints: number;
  submission: any;
  user: any;
}

export interface UserTaskUserRowProps {
  userTask: UserTask;
  onAfterDelete?: () => any;
}

export default ({ userTask, onAfterDelete }: UserTaskUserRowProps) => {
  const deleteUserTask = async () => {
    await api.delete('user-task', {
      data: {
        taskId: userTask.taskId,
        userId: userTask.userId,
      },
    });

    if (onAfterDelete) {
      onAfterDelete();
    }
  };

  return (
    <div className="py-4 px-3 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <div className="font-sm">
          <span className="bold mr-2">{userTask.user.name}</span>({userTask.user.email})
        </div>
        <div>
          <Button
            className="button-primary"
            action={deleteUserTask}
            text="Remove"
            activeText="Removing"
          />
        </div>
      </div>
    </div>
  );
};
