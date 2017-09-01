import React from 'react';

import { Button, ButtonIcon } from 'react-lds';

const onClick = () => {};

const ExampleIcons = () =>
  <div>
    <Button neutral title="Neutral with left Icon" onClick={onClick}>
      <ButtonIcon position="left" sprite="utility" icon="download" />
    </Button>
    <Button neutral title="Neutral with right Icon" onClick={onClick}>
      <ButtonIcon position="right" sprite="utility" icon="download" />
    </Button>
  </div>;

export default ExampleIcons;
