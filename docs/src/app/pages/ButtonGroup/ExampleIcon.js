import React from 'react';

import {
  ButtonGroup,
  Button,
  ButtonIcon,
} from 'react-lds';

const onClick = () => {};

const ExampleIcon = () =>
  <ButtonGroup>
    <Button icon icon-border selected onClick={onClick}>
      <ButtonIcon sprite="utility" icon="chart" />
    </Button>
    <Button icon icon-border onClick={onClick}>
      <ButtonIcon sprite="utility" icon="filterList" />
    </Button>
    <Button icon icon-border onClick={onClick}>
      <ButtonIcon sprite="utility" icon="settings" />
    </Button>
  </ButtonGroup>;

export default ExampleIcon;
