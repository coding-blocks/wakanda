import React from 'react';
import Datetime from 'react-datetime';
import Moment from 'moment';

export default (props) => {
  const { value, onChange, field, disabled = false } = props;

  return (
    <div className="row align-items-center p-2" style={{ background: 'transparent' }}>
      <div className="col-4">
        <label className="font-sm">{field.label}</label>
      </div>
      <div className="col-8">
        <Datetime
          dateFormat="DD/MM/YYYY"
          onChange={(e) => onChange(e)}
          value={Moment(value)}
          inputProps={{ className: 'underline-input pb-4 font-sm bold w-100', disabled }}
        />
      </div>
    </div>
  );
};
