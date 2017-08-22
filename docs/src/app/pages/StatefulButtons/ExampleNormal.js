import React from 'react';

import { Button } from 'react-lds';

const ExampleNormal = () =>
  <div>
    <Button title="Button Reset" tooltip="I'm a tooltip, look at me!" />
    <Button neutral title="Button Neutral" tooltip="I'm a tooltip, look at me!" />
    <Button brand title="Button Brand" tooltip="I'm a tooltip, look at me!" />
    <Button neutral title="Button Neutral Disabled" tooltip="I'm a tooltip, look at me!" disabled />
  </div>;

export default ExampleNormal;
