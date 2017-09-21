import React from 'react';

import { CheckboxGroup, CheckboxRaw } from 'react-lds';

// eslint-disable-next-line no-console
const handleChange = (e => console.log(e));

const ExampleGroupInlineHelp = () =>
  <div>
    <CheckboxGroup
      id="fieldset-1"
      onChange={handleChange}
      label="Fieldset"
      inlineHelp="ex: Lorem wecidwicnsd"
    >
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

export default ExampleGroupInlineHelp;
