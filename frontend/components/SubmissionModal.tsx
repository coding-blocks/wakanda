import React, { useState } from 'react';
import Modal from './common/Modal';
import { FileUploader } from './common/FileUploader';
import { useDispatch } from 'react-redux';
import { saveSubmission } from '../store/userTasksSlice';
import { dateFormater } from '../utils/datetime';

export const SubmissionModal: React.FC<any> = (props) => {
  const { task } = props;
  const [files, setFiles] = useState([]);
  const [submissionDescription, setSubmissionDescription] = useState('');
  const [uploadState, setUploadState] = useState('');
  const dispatch = useDispatch();

  const fileChangeHandler = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    const saveSubmissionRequest = await dispatch(
      saveSubmission({
        userTaskId: task.userTask.id,
        submission: {
          description: submissionDescription,
          assets: files,
        },
      }),
    );
  };

  const FilesUploader = () => {
    const currentFiles = files.map((file) => {
      return <FileUploader value={file} />;
    });
    return (
      <div className="">
        {currentFiles}
        <FileUploader setValue={setFiles} />
      </div>
    );
  };

  return (
    <Modal show={props.show} setShow={props.setShow}>
      <div className="px-5 py-4">
        <div className="row">
          <div className="col-10">
            <div className="font-sm med-grey mb-2">Task</div>
            <h3 className="font-xl">{task.name}</h3>
          </div>

          <div className="col-2">
            <div className="d-flex justify-content-end">
              <h3>{task.points}</h3>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <div className="font-5">Duration</div>
            <div className="font-mds orange">{`${dateFormater(task.startDate)} - ${dateFormater(
              task.endDate,
            )}`}</div>
          </div>
        </div>
      </div>

      <div className="divider-h"></div>

      <div className="px-5 py-4">
        <div className="row">
          <div className="col">
            <label>Describe what you did in the task</label>
            <textarea
              placeholder="Add a Note"
              className="underline-input w-100 mt-3 bg-light-grey br-5 p-4"
              value={submissionDescription}
              onChange={(e) => setSubmissionDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <FilesUploader />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex justify-content-end">
            <button className="button-solid button-orange" onClick={handleSubmit}>
              Submit For Review
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
