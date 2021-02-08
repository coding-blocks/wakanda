import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { client } from '../services/api';

export default (props) => {
  const { value, onChange, field } = props;

  const [inputValue, setInputValue] = useState('');

  const loadOptions = (nameLike, callback) => {
    client
      .get('/user', {
        params: {
          name: nameLike,
        },
      })
      .then(({ data }) => callback(data.data));
  };

  return (
    <div className="row align-items-center p-4" style={{ background: 'transparent' }}>
      <div className="col-4">
        <label className="font-sm">{field.label}</label>
      </div>
      <div className="col-8">
        <AsyncSelect
          isMulti
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onChange={(e) => onChange(e)}
          onInputChange={setInputValue}
          getOptionLabel={(option) => `${option.name}: ${option.oneauth_id}`}
        />
      </div>
    </div>
  );
};
