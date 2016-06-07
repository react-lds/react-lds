import React from 'react';

import { Button, ButtonIcon } from 'react-lds';

const ExampleIcons = () =>
  <div>
    <Button variation="neutral" title="Neutral with left Icon">
      <ButtonIcon position="left" sprite="utility" icon="download" />
    </Button>
    <Button variation="neutral" title="Neutral with right Icon">
      <ButtonIcon position="right" sprite="utility" icon="download" />
    </Button>
  </div>;

export default ExampleIcons;
