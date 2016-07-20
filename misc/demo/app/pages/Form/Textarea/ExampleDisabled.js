import React from 'react';

import { Textarea } from 'react-lds';

const ExampleDisabled = () =>
  <div>
    <Textarea
      id="textarea-input-1"
      label="Textarea Label"
      placeholder="Placeholder Text"
      disabled
    />
  </div>;

export default ExampleDisabled;
