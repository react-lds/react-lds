import React from 'react';

import { Button } from 'react-lds';

const ExampleNormal = () =>
  <div>
    <Button title="Button Reset" />
    <Button variation="neutral" title="Button Neutral" />
    <Button variation="brand" title="Button Brand" />
    <Button variation="neutral" title="Button Neutral Disabled" disabled />
  </div>;

export default ExampleNormal;
