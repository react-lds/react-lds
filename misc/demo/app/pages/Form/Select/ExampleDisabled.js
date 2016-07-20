import React from 'react';

import { Select } from 'react-lds';

const ExampleDisabled = () =>
  <div>
    <Select id="select-1" label="Select Label" disabled>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </div>;

export default ExampleDisabled;
