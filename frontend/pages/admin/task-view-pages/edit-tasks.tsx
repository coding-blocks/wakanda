import React, { useEffect, useState } from 'react';
import Form, { BaseFormField } from '../../../components/common/BaseForm';
import Button from '../../../components/common/Button';
import { useParams, Link } from 'react-router-dom';
import client from '../../../services/api';

export const EditTasks: React.FC<any> = () => {
  const { id } = useParams();
  const [task, setTask] = React.useState({
    name: '',
    description: '',
    points: '',
    startDate: '',
    endDate: '',
    userTask: [],
  });
  useEffect(() => {
    const getTask = async () => {
      const { data: response } = await client.get(`/task/${id}`);
      const taskFetched = response.data;
      setTask(taskFetched);
    };
    getTask();
  }, []);

  const onSave = async () => {
    const resp = await client.patch(`task/${id}`, { data: task });
    setTask(resp.data.data);
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
    <div className="card">
      <Form fields={fields} model={task} setModel={setTask} />

      <div className="d-flex justify-content-end mt-4 ">
        <Button className="button-primary" action={onSave} text="Save" activeText="Saving" />
      </div>
    </div>
  );
};

export default EditTasks;
