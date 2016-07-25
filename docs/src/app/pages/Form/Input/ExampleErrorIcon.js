import React from 'react';

import { Input } from 'react-lds';

const ExampleErrorIcon = () =>
  <div>
    <Input required errorIcon id="input-8" label="This could go wrong" error="This field must be purple!" />
  </div>;

export default ExampleErrorIcon;
