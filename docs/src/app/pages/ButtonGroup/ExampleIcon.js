import React from 'react';

import {
  ButtonGroup,
  Button,
  ButtonIcon,
} from 'react-lds';

const ExampleIcon = () =>
  <ButtonGroup>
    <Button icon selected variation="icon-border">
      <ButtonIcon sprite="utility" icon="chart" />
    </Button>
    <Button icon variation="icon-border">
      <ButtonIcon sprite="utility" icon="filterList" />
    </Button>
    <Button icon variation="icon-border">
      <ButtonIcon sprite="utility" icon="settings" />
    </Button>
  </ButtonGroup>;

export default ExampleIcon;
