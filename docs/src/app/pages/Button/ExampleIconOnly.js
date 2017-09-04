import React from 'react';

import { Button, ButtonIcon } from 'react-lds';

const onClick = () => {};

const ExampleIconOnly = () =>
  <div>
    <Button icon onClick={onClick}>
      <ButtonIcon sprite="utility" icon="download" />
    </Button>
    <Button icon onClick={onClick}>
      <ButtonIcon size="large" sprite="utility" icon="download" />
    </Button>
  </div>;

export default ExampleIconOnly;
