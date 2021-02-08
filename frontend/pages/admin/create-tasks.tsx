import React from 'react';
import Form, { BaseFormField } from '../../components/common/BaseForm';
import { useTask } from '../../hooks/task';
import api from '../../services/api';

const CreateTask: React.FC = () => {
  const [task, setTask] = React.useState({
    name: '',
    description: '',
    points: '',
    startDate: '',
    endDate: '',
  });

  const { isActive, trigger } = useTask(async () => {
    const resp = await api.post('task/', task);
    setTask(resp.data.data);
  });

  const fields: BaseFormField[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'points',
      label: 'Points',
      type: 'number',
    },
    {
      name: 'startDate',
      label: 'Start Date',
      type: 'datetime',
    },
    {
      name: 'endDate',
      label: 'End Date',
      type: 'datetime',
    },
  ];

  return (
    <div>
      <Form fields={fields} model={task} setModel={setTask} />
      <div className="d-flex justify-content-end mt-4 ">
        <button className="button-solid button-orange" onClick={trigger} disabled={isActive}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
