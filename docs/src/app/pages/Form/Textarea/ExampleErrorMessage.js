import React from 'react';

import { Textarea } from 'react-lds';

const ExampleErrorMessage = () =>
  <div>
    <Textarea
      id="textarea-input-1"
      label="Textarea Label"
      placeholder="Placeholder Text"
      error="This field is required"
      errorMessage={false}
      required
    />
  </div>;

export default ExampleErrorMessage;
