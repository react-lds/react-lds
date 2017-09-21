import React from 'react';

import { Checkbox } from 'react-lds';

// eslint-disable-next-line no-console
const handleChange = (e => console.log(e));

const ExampleInlineHelp = () =>
  <div>
    <Checkbox
      onChange={handleChange}
      id="checkbox-input-1"
      label="Checkbox Label"
      inlineHelp="ex: Lorem Ipsum"
    />
  </div>;

export default ExampleInlineHelp;
