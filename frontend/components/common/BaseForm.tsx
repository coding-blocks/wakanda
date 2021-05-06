import React from 'react';

import Text from './form-components/Text';
import Datetime from './form-components/DateTime';
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
  disabled?: boolean;
}

export interface BaseFormProps {
  fields: BaseFormField[];
  model: object;
  setModel: (model: object) => void;
}

export default ({ fields, model, setModel }: BaseFormProps) => {
  return (
    <div className="">
      {fields.map((field, i) => {
        const FormField = FieldMap[field.type];
        return (
          <FormField
            key={i}
            name={field.name}
            value={model[field.name]}
            field={field}
            disabled={field.disabled}
            type={field.type}
            onChange={(value) =>
              setModel((prev) => ({
                ...prev,
                [field.name]: value,
              }))
            }
          />
        );
      })}
    </div>
  );
};
