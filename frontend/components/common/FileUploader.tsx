import React, { useState } from 'react';
import { useTask } from '../../hooks/task';
import client from '../../services/api';

export const FileUploader: React.FC<any> = (props) => {
  const url = props.value;

  const [file, setFile] = useState();
  const [uploadStatus, setUploadStatus] = useState('');

  const { trigger, isActive } = useTask(async () => {
    const { data: response } = await client.post('/minio/presignedUrl');
    const presignedUrl = response.data.url;
    setUploadStatus('uploading');
    await fetch(presignedUrl, {
      method: 'PUT',
      body: file,
    });
    props.setValue(presignedUrl.split('?')[0]);
  });

  const onFileChange = (e) => {
    const files = e.target.files;
    setFile(files[0]);
  };

  if (url) {
    return (
      <div className="row">
        <a href={url}>{url}</a>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-between">
      {uploadStatus}
      {!props.disabled && <input type="file" className="" onChange={onFileChange} />}
      {!!file && (
        <button
          className="button-dashed button-orange p-2 mt-1"
          style={{ fontSize: '0.85rem' }}
          onClick={trigger}
          disabled={isActive}
        >
          {isActive ? 'Uploading' : 'Upload'}
        </button>
      )}
    </div>
  );
};

export default FileUploader;
