import React from 'react';
import Button from './common/Button';
import Form, { BaseFormField } from '../components/common/BaseForm';
import Modal from './common/Modal';
import api from '../services/api';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/currentUserSlice';

export interface AddUserModalProps {
  show: boolean;
  setShow: (boolean) => void;
  onAfterAdd?: (time) => void;
}

export default (props: AddUserModalProps) => {
  const user = useSelector(selectUser());
  const [lastError, setLastError] = React.useState(null);
  const [lastMessage, setLastMessage] = React.useState(null);
  const [workshop, setWorkshop] = React.useState({
    collegeName: '',
    collegeAddress: '',
    topic: '',
    startDate: '',
    endDate: null,
    monetary: '',
    accomodation: '',
    caId: user.oneauth_id,
    request: '',
  });

  const fields: BaseFormField[] = [
    {
      name: 'collegeName',
      label: 'College Name',
      type: 'text',
    },
    {
      name: 'collegeAddress',
      label: 'College Address',
      type: 'text',
    },
    {
      name: 'topic',
      label: 'Topic',
      type: 'textarea',
    },
    {
      name: 'startDate',
      label: 'Start Date',
      type: 'datetime',
    },
    {
      name: 'endDate',
      label: 'End Date(If multiple dates)',
      type: 'datetime',
    },
    {
      name: 'monetary',
      label: 'Will College Pay? Share Details if Yes',
      type: 'textarea',
    },
    {
      name: 'accomodation',
      label: 'Will College Provide Accomodation? Share Details if Yes',
      type: 'textarea',
    },
    {
      name: 'request',
      label: 'Any Special Requests',
      type: 'textarea',
    },
  ];

  const requestWorkshop = async () => {
    try {
      await api.post('workshop', workshop);
      setLastError(null);
      setLastMessage(`Requstest Workshop`);

      if (props.onAfterAdd) {
        props.onAfterAdd(1000);
      }
    } catch (err) {
      setLastError(err.response.data.errors[0].detail);
      setLastMessage(null);
    }
  };

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <div className="p-4" style={{ minWidth: 600 }}>
        <div>
          <div className="font-md">Request Workshop</div>
        </div>
        <div className="mt-4">
          <Form fields={fields} model={workshop} setModel={setWorkshop} />
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
      </div>
      <div className="d-flex justify-content-end m-4 ">
        <Button
          className="button-solid button-orange mr-2"
          action={() => props.onAfterAdd(0)}
          activeText="Closing"
          text="Cancel"
        />
        <Button
          className="button-solid button-orange"
          action={requestWorkshop}
          text="Save"
          activeText="Saving"
        />
      </div>
    </Modal>
  );
};
