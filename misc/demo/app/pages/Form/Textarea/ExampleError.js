import React from 'react';

import { Textarea } from 'react-lds';

const ExampleError = () =>
  <div>
    <Textarea
      id="textarea-input-1"
      label="Textarea Label"
      placeholder="Placeholder Text"
      error="This field is required"
      required
    />
  </div>;

export default ExampleError;
