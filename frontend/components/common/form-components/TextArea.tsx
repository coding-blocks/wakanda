import React from 'react';

export default (props) => {
  const { value, onChange, field, disabled = false } = props;

  return (
    <div className="col align-items-center p-2" style={{ background: 'transparent' }}>
      <div className="py-2">
        <label className="font-sm">{field.label}</label>
      </div>
      <div>
        <textarea
          disabled={disabled}
          style={{ border: 'solid 1px #f3f3f3' }}
          className="underline-input pb-4 font-sm bold w-100"
          rows={field.rows}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};
