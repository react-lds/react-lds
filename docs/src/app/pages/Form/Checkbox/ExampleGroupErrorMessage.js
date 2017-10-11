import React from 'react';

import { CheckboxGroup, CheckboxRaw } from 'react-lds';

const ExampleGroupErrorMessage = () =>
  <div>
    <CheckboxGroup id="fieldset-1" label="Fieldset" error="Oops, an error" errorMessage={false}>
      <CheckboxRaw
        id="checkbox-input-1"
        label="Checkbox Label"
      />
      <CheckboxRaw
        id="checkbox-input-2"
        label="Checkbox Label"
      />
      <CheckboxRaw
        id="checkbox-input-3"
        label="Checkbox Label"
      />
      <CheckboxRaw
        id="checkbox-input-4"
        label="Checkbox Label"
      />
    </CheckboxGroup>
  </div>;

export default ExampleGroupErrorMessage;
