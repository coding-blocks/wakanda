import React from 'react';
import Button from '../common/Button';
import Form, { BaseFormField } from '../common/BaseForm';
import Modal from '../common/Modal';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/currentUserSlice';

export interface RequstWorkshopModalProps {
  show: boolean;
  setShow: (boolean) => void;
  onAfterAdd?: () => void;
}

export default (props: RequstWorkshopModalProps) => {
  const user = useSelector(selectUser());
  const [lastError, setLastError] = React.useState(null);
  const [lastMessage, setLastMessage] = React.useState(null);
  const [request, setRequest] = React.useState({
    name: '',
    number: '',
    email: '',
    college: '',
    city: '',
    branch: '',
    graduationYear: '',
    fbLink: '',
    profiles: '',
    criteria: '',
    uniqueIdea: '',
    additionalInfo: '',
    userId: user?.id,
  });

  const fields: BaseFormField[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'number',
      label: 'Phone Number',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
    },
    {
      name: 'college',
      label: 'College',
      type: 'text',
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
    },
    {
      name: 'branch',
      label: 'Branch',
      type: 'text',
    },
    {
      name: 'graduationYear',
      label: 'Graduation Year',
      type: 'text',
    },
    {
      name: 'fbLink',
      label: 'Link to your facebook profile',
      type: 'text',
    },
    {
      name: 'profiles',
      label: 'Any other profiles? (Github/LinkedIn/Twitter)',
      type: 'textarea',
    },
    {
      name: 'criteria',
      label:
        'Why do you think you will be a better fit for this opportunity, as compared to your college mates?',
      type: 'textarea',
    },
    {
      name: 'uniqueIdea',
      label:
        'Suggest one unique idea to spread the presence of Coding Blocks in your college, apart from the ones mentioned above.',
      type: 'textarea',
    },
    {
      name: 'additionalInfo',
      label: 'Any additonal information about yourself?',
      type: 'textarea',
    },
  ];

  const requestCA = async () => {
    try {
      await api.post('ca-request', request);
      setLastError(null);
      setLastMessage(`Application Submitted Successfully`);

      if (props.onAfterAdd) {
        props.onAfterAdd();
      }
    } catch (err) {
      setLastError(err.response.data.errors[0].detail);
      setLastMessage(null);
    }
  };

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <div className="p-30">
        <div>
          <div className="heading-6">Apply for Campus Ambassador</div>
        </div>
        <div className="mt-4">
          <Form fields={fields} model={request} setModel={setRequest} />
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
      <div className="d-flex justify-content-end align-items-center m-4 ">
        <Button
          className="button-primary button-primary--rejected mr-2"
          action={() => props.setShow(false)}
          activeText="Closing"
          text="Cancel"
        />
        <Button
          className="button-primary button-primary--accepted"
          action={requestCA}
          text="Apply"
          activeText="Saving"
        />
      </div>
    </Modal>
  );
};
