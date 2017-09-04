import React from 'react';

import { Button, ButtonIcon } from 'react-lds';

const onClick = () => {};

const ExampleIconOnly = () =>
  <div>
    <Button icon onClick={onClick} title="Small icon button" tooltip="I'm a tooltip, look at me!">
      <ButtonIcon sprite="utility" icon="download" />
    </Button>
    <Button icon onClick={onClick} title="Large icon button" tooltip="I'm a tooltip, look at me!">
      <ButtonIcon size="large" sprite="utility" icon="download" />
    </Button>
  </div>;

export default ExampleIconOnly;
