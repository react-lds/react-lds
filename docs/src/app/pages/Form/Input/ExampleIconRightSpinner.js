import React from 'react';

import { Input } from 'react-lds';

const ExampleIconRightSpinner = () =>
  <div>
    <Input
      iconRight="search"
      id="input-3"
      label="Input with Right Icon and Spinner"
      placeholder="Enter something..."
      showSpinner
      value=""
    />
  </div>;

export default ExampleIconRightSpinner;
