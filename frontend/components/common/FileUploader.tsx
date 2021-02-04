import React, { useEffect, useState } from 'react';
import axios from 'axios';
import client from '../../services/api';

export const FileUploader: React.FC<any> = (props) => {
  const [file, setFile] = useState();
  const [uploadStatus, setUploadStatus] = useState('');
  const url = props.value;
  const onFileChange = (e) => {
    const files = e.target.files;
    setFile(files[0]);
  };

  const handleUpload = async (e) => {
    const { data: response } = await client.post('/minio/presignedUrl');
    const presignedUrl = response.data.url;
    setUploadStatus('uploading');
    await fetch(presignedUrl, {
      method: 'PUT',
      body: file,
    });
    props.setValue(presignedUrl.split('?')[0]);
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
          onClick={handleUpload}
        >
          Upload
        </button>
      )}
    </div>
  );
};

export default FileUploader;
