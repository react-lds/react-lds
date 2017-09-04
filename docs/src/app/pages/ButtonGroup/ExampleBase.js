import React from 'react';

import { ButtonGroup, Button } from 'react-lds';

const onClick = () => {};

const ExampleBase = () =>
  <ButtonGroup>
    <Button neutral title="Button One" onClick={onClick} />
    <Button neutral title="Button Two" onClick={onClick} />
    <Button neutral title="Button Three" onClick={onClick} />
  </ButtonGroup>;

export default ExampleBase;
