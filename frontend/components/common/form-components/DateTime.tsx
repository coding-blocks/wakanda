import React from 'react';
import Datetime from 'react-datetime';
import Moment from 'moment';

export default (props) => {
  const { value, onChange, field } = props;

  return (
    <div className="row align-items-center p-4" style={{ background: 'transparent' }}>
      <div className="col-4">
        <label className="font-sm">{field.label}</label>
      </div>
      <div className="col-8">
        <Datetime
          onChange={(e) => onChange(e)}
          value={Moment(value)}
          inputProps={{ className: 'underline-input pb-4 font-sm bold w-100' }}
        />
      </div>
    </div>
  );
};
