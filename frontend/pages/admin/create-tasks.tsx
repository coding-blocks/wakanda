import React from 'react';
import Form, { BaseFormField } from '../../components/common/BaseForm';
import Button from '../../components/common/Button';
import { useTask } from '../../hooks/task';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const CreateTask: React.FC = () => {
  const [task, setTask] = React.useState({
    name: '',
    description: '',
    points: '',
    startDate: '',
    endDate: '',
  });

  const history = useHistory();

  const onSave = async () => {
    const resp = await api.post('task/', { data: task });
    setTask(resp.data.data);
    history.push(`/admin/tasks`);
  };

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
      <div className="">
        <h3>Create Task</h3>
      </div>
      <div className="mt-4">
        <Form fields={fields} model={task} setModel={setTask} />
      </div>
      <div className="d-flex justify-content-end mt-4 ">
        <Button className="button-primary" action={onSave} text="Save" activeText="Saving" />
      </div>
    </div>
  );
};

export default CreateTask;
