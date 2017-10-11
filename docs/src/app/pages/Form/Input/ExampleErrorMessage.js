import React from 'react';

import { Input } from 'react-lds';

const ExampleErrorMessage = () =>
  <div>
    <Input required id="input-9" label="This could go wrong" error="This field must be purple!" errorMessage={false} />
  </div>;

export default ExampleErrorMessage;
