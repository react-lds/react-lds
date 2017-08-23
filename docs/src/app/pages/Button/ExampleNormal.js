import React from 'react';

import { Button } from 'react-lds';

const ExampleNormal = () =>
  <div>
    <Button title="Button Reset" />
    <Button neutral title="Button Neutral" />
    <Button brand title="Button Brand" />
    <Button neutral title="Button Neutral Disabled" disabled />
    <Button title="Button Destructive" destructive />
    <Button title="Button Success" success />
  </div>;

export default ExampleNormal;
