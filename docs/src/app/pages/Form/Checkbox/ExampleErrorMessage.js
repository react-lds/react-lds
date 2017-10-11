import React from 'react';

import { Checkbox } from 'react-lds';

const ExampleErrorMessage = () =>
  <div>
    <Checkbox
      id="checkbox-input-1"
      label="Checkbox Label"
      error="Something is wrong"
      errorMessage={false}
      required
    />
  </div>;

export default ExampleErrorMessage;
