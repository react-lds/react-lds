import React from 'react';

import { CheckboxGroup, CheckboxRaw } from 'react-lds';

const ExampleGroupRequired = () =>
  <div>
    <CheckboxGroup id="fieldset-1" label="Fieldset" required>
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
    </CheckboxGroup>
  </div>;

export default ExampleGroupRequired;
