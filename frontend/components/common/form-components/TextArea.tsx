import React from 'react';

export default (props) => {
  const { value, onChange, field } = props;

  return (
    <div className="row align-items-center p-4 " style={{ background: 'transparent' }}>
      <div className="col-4">
        <label className="font-sm">{field.label}</label>
      </div>
      <div className="col-8">
        <textarea
          className=" underline-input pb-4 font-sm bold w-100"
          rows={field.rows}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};
