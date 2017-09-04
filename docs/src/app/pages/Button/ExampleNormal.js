import React from 'react';

import { Button } from 'react-lds';

const onClick = () => {};

const ExampleNormal = () =>
  <div>
    <Button title="Button Reset" onClick={onClick} />
    <Button neutral title="Button Neutral" onClick={onClick} />
    <Button brand title="Button Brand" onClick={onClick} />
    <Button neutral title="Button Neutral Disabled" disabled onClick={onClick} />
    <Button title="Button Destructive" destructive onClick={onClick} />
    <Button title="Button Success" success onClick={onClick} />
  </div>;

export default ExampleNormal;
