import React from 'react';

import {
  ObjectHome,
  DropdownMenuList,
  DropdownMenuListItem,
  ButtonGroup,
  Button,
  ButtonIcon,
} from 'react-lds';

const titleMenu = (
  <DropdownMenuList>
    <DropdownMenuListItem>Item 1</DropdownMenuListItem>
    <DropdownMenuListItem>Item 2</DropdownMenuListItem>
    <DropdownMenuListItem>Item 3</DropdownMenuListItem>
    <DropdownMenuListItem divider>Important last item</DropdownMenuListItem>
  </DropdownMenuList>
);

const topButtons = (
  <ButtonGroup>
    <Button title="New Lead" variation="neutral" />
    <Button icon variation="icon-border-filled">
      <ButtonIcon sprite="utility" icon="down" />
    </Button>
  </ButtonGroup>
);

const bottomButtons = (
  <ButtonGroup>
    <Button icon variation="icon-border">
      <ButtonIcon sprite="utility" icon="chart" />
    </Button>
    <Button icon variation="icon-border">
      <ButtonIcon sprite="utility" icon="filterList" />
    </Button>
    <Button icon variation="icon-border">
      <ButtonIcon sprite="utility" icon="settings" />
    </Button>
  </ButtonGroup>
);

const ExampleObjectHome = () =>
  <ObjectHome
    title="My Leads"
    recordType="Leads"
    titleMenu={titleMenu}
    topButtons={topButtons}
    info="10 items • sorted by name"
    bottomButtons={bottomButtons}
  />;

export default ExampleObjectHome;
