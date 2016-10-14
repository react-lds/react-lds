import React from 'react';

import { Checkbox } from 'react-lds';

// eslint-disable-next-line no-console
const handleChange = (e => console.log(e));

const ExampleDefault = () =>
  <div>
    <Checkbox
      onChange={handleChange}
      id="checkbox-input-1"
      label="Checkbox Label"
    />
  </div>;

export default ExampleDefault;
