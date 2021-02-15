import React from 'react';
import { FileUploader } from '../common/FileUploader';

export const SubmissionEditor: React.FC<any> = (props) => {
  const { submission } = props;
  const files = (submission.submissionAssets || []).map((asset) => asset.url);

  const setSubmissionFiles = (newFile) => {
    props.setSubmission((state) => {
      return {
        ...state,
        submissionAssets: state.submissionAssets
          ? state.submissionAssets.concat({ url: newFile })
          : [newFile],
      };
    });
  };

  const onDescriptionChange = (e) => {
    props.setSubmission((state) => {
      return {
        ...state,
        description: e.target.value,
      };
    });
  };

  const FilesUploader = () => {
    const currentFiles = files.map((file, i) => {
      return <FileUploader value={file} key={i} />;
    });
    return (
      <div className="">
        {currentFiles}
        <FileUploader setValue={setSubmissionFiles} disabled={props.disabled} />
      </div>
    );
  };

  return (
    <div className="">
      <div className="p-30">
        <div className="row">
          <div className="col">
            <label className="font-4">Describe what you did in the task</label>
            <textarea
              placeholder="Add a Note"
              className="underline-input w-100 mt-20 bg-light-grey br-10 p-30"
              value={props.submission.description}
              onChange={onDescriptionChange}
              disabled={props.disabled}
            ></textarea>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col">
            <FilesUploader />
          </div>
        </div>
      </div>
    </div>
  );
};
