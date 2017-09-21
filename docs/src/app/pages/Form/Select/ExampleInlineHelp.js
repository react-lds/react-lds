import React from 'react';

import { Select } from 'react-lds';

const ExampleInlineHelp = () =>
  <div>
    <Select id="select-1" label="Select Label" inlineHelp="ex: Lorem Ipsum">
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </div>;

export default ExampleInlineHelp;
