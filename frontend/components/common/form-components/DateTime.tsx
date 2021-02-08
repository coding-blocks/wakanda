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
        <Datetime
          className="underline-input pb-4 font-sm bold w-100"
          onChange={(e) => onChange(e)}
          value={value}
        />
      </div>
    </div>
  );
};
