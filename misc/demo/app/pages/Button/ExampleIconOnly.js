import React from 'react';

import { Button, ButtonIcon } from 'react-lds';

const ExampleIconOnly = () =>
  <div>
    <Button icon>
      <ButtonIcon sprite="utility" icon="download" />
    </Button>
    <Button icon>
      <ButtonIcon size="large" sprite="utility" icon="download" />
    </Button>
  </div>;

export default ExampleIconOnly;
