import React from 'react';

import { CheckboxGroup, CheckboxRaw } from 'react-lds';

const ExampleGroupDisabled = () =>
  <div>
    <CheckboxGroup id="fieldset-1" label="Fieldset">
      <CheckboxRaw
        disabled
        id="checkbox-input-1"
        label="Checkbox Label"
      />
      <CheckboxRaw
        disabled
        id="checkbox-input-2"
        label="Checkbox Label"
      />
      <CheckboxRaw
        disabled
        id="checkbox-input-2"
        label="Checkbox Label"
      />
    </CheckboxGroup>
  </div>;

export default ExampleGroupDisabled;
