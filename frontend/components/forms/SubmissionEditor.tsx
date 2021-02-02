import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FileUploader } from '../common/FileUploader';
export const SubmissionEditor: React.FC<any> = (props) => {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  const onDescriptionChange = (e) => {
    props.setSubmission((submission) => {
      return { ...submission, description: e.target.value };
    });
  };

  const FilesUploader = () => {
    const currentFiles = files.map((file) => {
      return <FileUploader value={file} />;
    });
    return (
      <div className="">
        {currentFiles}
        <FileUploader setValue={setFiles} disabled={props.disabled} />
      </div>
    );
  };

  return (
    <div className="">
      <div className="px-5 py-4">
        <div className="row">
          <div className="col">
            <label>Describe what you did in the task</label>
            <textarea
              placeholder="Add a Note"
              className="underline-input w-100 mt-3 bg-light-grey br-5 p-4"
              value={props.submission.description}
              onChange={onDescriptionChange}
              disabled={props.disabled}
            ></textarea>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <FilesUploader />
          </div>
        </div>
      </div>
    </div>
  );
};
