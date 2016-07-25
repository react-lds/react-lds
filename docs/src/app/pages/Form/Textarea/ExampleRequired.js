import React from 'react';

import { Textarea } from 'react-lds';

const ExampleRequired = () =>
  <div>
    <Textarea
      id="textarea-input-1"
      label="Textarea Label"
      placeholder="Placeholder Text"
      required
    />
  </div>;

export default ExampleRequired;
