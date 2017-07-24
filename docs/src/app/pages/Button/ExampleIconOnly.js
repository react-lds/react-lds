import React from 'react';

import { Button, ButtonIcon } from 'react-lds';

const ExampleIconOnly = () =>
  <div>
    <Button icon title="Small icon button" tooltip="I'm a tooltip, look at me!">
      <ButtonIcon sprite="utility" icon="download" />
    </Button>
    <Button icon title="Large icon button" tooltip="I'm a tooltip, look at me!">
      <ButtonIcon size="large" sprite="utility" icon="download" />
    </Button>
  </div>;

export default ExampleIconOnly;
