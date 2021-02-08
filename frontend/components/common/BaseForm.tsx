import React from 'react';

import Text from './form-components/Text';
import Datetime from './form-components/Datetime';
import TextArea from './form-components/TextArea';

const FieldMap = {
  text: Text,
  datetime: Datetime,
  number: Text,
  textarea: TextArea,
};

export interface BaseFormField {
  label: string;
  name: string;
  type: 'text' | 'datetime' | 'number' | 'textarea';
}

export interface BaseFormProps {
  fields: BaseFormField[];
  model: object;
  setModel: (model: object) => void;
}

export default ({ fields, model, setModel }: BaseFormProps) => {
  return (
    <div className="card br-10 bg-white p-0">
      {fields.map((field, i) => {
        const FormField = FieldMap[field.type];
        return (
          <FormField
            key={i}
            name={field.name}
            value={model[field.name]}
            field={field}
            type={field.type}
            onChange={(value) =>
              setModel({
                ...model,
                [field.name]: value,
              })
            }
          />
        );
      })}
    </div>
  );
};
