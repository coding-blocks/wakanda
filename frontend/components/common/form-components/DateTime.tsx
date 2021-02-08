import React from 'react';
import Datetime from 'react-datetime';

export default (props) => {
  const { value, onChange, field } = props;

  return (
    <div className="row align-items-center p-4" style={{ background: 'transparent' }}>
      <div className="col-2">
        <label className="font-sm">{field.label}</label>
      </div>
      <div className="col-10">
        <Datetime onChange={(e) => onChange(e)} value={value} />
      </div>
    </div>
  );
};
