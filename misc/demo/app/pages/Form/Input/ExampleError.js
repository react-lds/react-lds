import React from 'react';

import { Input } from 'react-lds';

const ExampleError = () =>
  <div>
    <Input required id="input-8" label="This could go wrong" error="This field must be purple!" />
  </div>;

export default ExampleError;
