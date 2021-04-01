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
  caRequest: any;
}

export default (props: RequstWorkshopModalProps) => {
  const user = useSelector(selectUser());
  const [lastError, setLastError] = React.useState(null);
  const [lastMessage, setLastMessage] = React.useState(null);
  const [request, setRequest] = React.useState({
    id: '',
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
    caCode: '',
    manager: '',
  });

  const fields: BaseFormField[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      disabled: true,
    },
    {
      name: 'number',
      label: 'Phone Number',
      type: 'text',
      disabled: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      disabled: true,
    },
    {
      name: 'college',
      label: 'College',
      type: 'text',
      disabled: true,
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      disabled: true,
    },
    {
      name: 'branch',
      label: 'Branch',
      type: 'text',
      disabled: true,
    },
    {
      name: 'graduationYear',
      label: 'Graduation Year',
      type: 'text',
      disabled: true,
    },
    {
      name: 'fbLink',
      label: 'Link to your facebook profile',
      type: 'text',
      disabled: true,
    },
    {
      name: 'profiles',
      label: 'Any other profiles? (Github/LinkedIn/Twitter)',
      type: 'textarea',
      disabled: true,
    },
    {
      name: 'criteria',
      label:
        'Why do you think you will be a better fit for this opportunity, as compared to your college mates?',
      type: 'textarea',
      disabled: true,
    },
    {
      name: 'uniqueIdea',
      label:
        'Suggest one unique idea to spread the presence of Coding Blocks in your college, apart from the ones mentioned above.',
      type: 'textarea',
      disabled: true,
    },
    {
      name: 'additionalInfo',
      label: 'Any additonal information about yourself?',
      type: 'textarea',
      disabled: true,
    },
    {
      name: 'caCode',
      label: 'Enter Unique CA Code for Ambassador',
      type: 'text',
    },
    {
      name: 'manager',
      label: 'Enter Manager Info',
      type: 'text',
    },
  ];

  const requestCA = async () => {
    try {
      await api.patch(`ca-request/${props.caRequest.id}`, {
        data: { isApproved: true, caCode: request.caCode, manager: request.manager },
      });
      setLastError(null);
      setLastMessage(`Application Approved Successfully`);

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
          <div className="heading-6">Details of Campus Ambassador</div>
        </div>
        <div className="mt-4">
          <Form fields={fields} model={props.caRequest} setModel={setRequest} />
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
