import React from 'react';

import { Input } from 'react-lds';

const ExampleIconRightSpinner = () =>
  <div>
    <Input
      iconRight="clear"
      id="input-3"
      label="Input with Right Icon and Spinner"
      placeholder="Enter something..."
      showSpinner
    />
  </div>;

export default ExampleIconRightSpinner;
