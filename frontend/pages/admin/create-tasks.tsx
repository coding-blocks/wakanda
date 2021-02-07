import React from 'react';
import Form, { BaseFormField } from '../../components/common/BaseForm';

export default () => {
  const [task, setTask] = React.useState({
    name: '',
    description: '',
    points: '',
    startDate: '',
    endDate: '',
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
      type: 'text',
    },
    {
      name: 'points',
      label: 'Points',
      type: 'text',
    },
    {
      name: 'startDate',
      label: 'Start Date',
      type: 'text',
    },
    {
      name: 'endDate',
      label: 'End Date',
      type: 'text',
    },
  ];

  return <Form fields={fields} model={task} setModel={setTask} />;
};
