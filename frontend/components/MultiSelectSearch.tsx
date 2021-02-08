import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { client } from '../services/api';

export const MultiSelecctSearch: React.FC = () => {
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

  const handleChange = (selectedOptions) => {
    console.log(selectedOptions);
    // send change props
  };

  return (
    <div>
      <pre>inputValue: "{inputValue}"</pre>
      <AsyncSelect
        isMulti
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onChange={handleChange}
        onInputChange={setInputValue}
        getOptionLabel={(option) => `${option.name}: ${option.oneauth_id}`}
      />
    </div>
  );
};
