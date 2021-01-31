import React, { useState } from 'react';
import Modal from './common/Modal';
import { useDispatch } from 'react-redux';
import { saveSubmission } from '../store/userTasksSlice';

export const SubmissionModal: React.FC<any> = (props) => {
  const [files, setFiles] = useState(null);
  const [submissionDescription, setSubmissionDescription] = useState('');
  const [uploadState, setUploadState] = useState('');
  const dispatch = useDispatch();

  const fileChangeHandler = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saveSubmissionRequest = await dispatch(
      saveSubmission({
        userTaskId: 1,
        submission: { description: submissionDescription },
      }),
    );
  };

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <div className="row p-3">
        <div className="col-10">
          <div className="font-sm med-grey mb-2">Task</div>
          <h3 className="font-xl">hello</h3>
        </div>

        <div className="col-2">
          <div className="d-flex justify-content-end">
            <h3>20</h3>
          </div>
        </div>
      </div>

      <div className="row p-3">
        <div className="col">
          <div className="card-md">Duration</div>
          <div>{`21st - 31st`}</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Describe what you did in the task</label>
        <input
          type="textarea"
          className="mx-3"
          value={submissionDescription}
          onChange={(e) => setSubmissionDescription(e.target.value)}
        />
        <input type="file" className="mx-3" multiple onChange={fileChangeHandler} />
        <input type="submit" className="mx-3" value="Submit For Review" />
      </form>
    </Modal>
  );
};
