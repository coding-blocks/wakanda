import React from 'react';

import Text from './form-components/Text';

const FieldMap = {
  text: Text,
};

export interface BaseFormField {
  label: string;
  name: string;
  type: 'text';
}

export interface BaseFormProps {
  fields: BaseFormField[];
  model: object;
  setModel: (model: object) => void;
}

export default ({ fields, model, setModel }: BaseFormProps) => {
  return (
    <div>
      {fields.map((field) => {
        const FormField = FieldMap[field.type];
        return (
          <FormField
            name={field.name}
            value={model[field.name]}
            field={field}
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
