import React from 'react';

import { Select } from 'react-lds';

const ExampleError = () =>
  <div>
    <Select id="select-1" label="Select Label" error="This field is required" required>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </div>;

export default ExampleError;
