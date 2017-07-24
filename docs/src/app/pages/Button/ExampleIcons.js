import React from 'react';

import { Button, ButtonIcon } from 'react-lds';

const ExampleIcons = () =>
  <div>
    <Button neutral title="Neutral with left Icon" tooltip="Im an icon button, look at me!">
      <ButtonIcon position="left" sprite="utility" icon="download" />
    </Button>
    <Button neutral title="Neutral with right Icon" tooltip="Im an icon button, look at me!">
      <ButtonIcon position="right" sprite="utility" icon="download" />
    </Button>
  </div>;

export default ExampleIcons;
