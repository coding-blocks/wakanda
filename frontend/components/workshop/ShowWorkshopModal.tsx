import React from 'react';
import Button from '../common/Button';
import Form, { BaseFormField } from '../common/BaseForm';
import Modal from '../common/Modal';

export default (props) => {
  const fields: BaseFormField[] = [
    {
      name: 'collegeName',
      label: 'College Name',
      type: 'text',
      disabled: true,
    },
    {
      name: 'collegeAddress',
      label: 'College Address',
      type: 'text',
      disabled: true,
    },
    {
      name: 'topic',
      label: 'Topic',
      type: 'textarea',
      disabled: true,
    },
    {
      name: 'startDate',
      label: 'Start Date',
      type: 'datetime',
      disabled: true,
    },
    {
      name: 'endDate',
      label: 'End Date(If multiple dates)',
      type: 'datetime',
      disabled: true,
    },
    {
      name: 'monetary',
      label: 'Will College Pay? Share Details if Yes',
      type: 'textarea',
      disabled: true,
    },
    {
      name: 'accomodation',
      label: 'Will College Provide Accomodation? Share Details if Yes',
      type: 'textarea',
      disabled: true,
    },
    {
      name: 'request',
      label: 'Any Special Requests',
      type: 'textarea',
      disabled: true,
    },
    {
      name: 'mobile',
      label: 'Contact Info',
      type: 'text',
      disabled: true,
    },
  ];

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <div className="p-30">
        <div>
          <div className="heading-6">Workshop Details</div>
        </div>
        <div className="mt-4">
          <Form fields={fields} model={props.workshop} setModel={() => null} />
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center m-4 ">
        <Button
          className="button-primary button-primary--rejected mr-2"
          action={() => props.setShow(false)}
          activeText="Closing"
          text="Cancel"
        />
      </div>
    </Modal>
  );
};
