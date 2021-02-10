import React from 'react';

export default (props) => {
  const { value, onChange, field } = props;

  return (
    <div className="row align-items-center p-2" style={{ background: 'transparent' }}>
      <div className="col-4">
        <label className="font-sm">{field.label}</label>
      </div>
      <div className="col-8">
        <input
          style={{ border: 'none' }}
          className="underline-input pb-4 font-sm bold w-100"
          type={field.type}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};
