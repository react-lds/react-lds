import React from 'react';

import { Checkbox } from 'react-lds';

const ExampleDefault = () =>
  <div>
    <Checkbox
      id="checkbox-input-1"
      label="Checkbox Label"
      error="Something is wrong"
      required
    />
  </div>;

export default ExampleDefault;
