import React from 'react';

import {
  ObjectHome,
  MenuDropdownList,
  MenuDropdownListItem,
  ButtonGroup,
  Button,
  ButtonIcon,
} from 'react-lds';

const titleMenu = (
  <MenuDropdownList>
    <MenuDropdownListItem>Item 1</MenuDropdownListItem>
    <MenuDropdownListItem>Item 2</MenuDropdownListItem>
    <MenuDropdownListItem>Item 3</MenuDropdownListItem>
    <MenuDropdownListItem divider>Important last item</MenuDropdownListItem>
  </MenuDropdownList>
);

const onClick = () => {};

const topButtons = (
  <ButtonGroup>
    <Button title="New Lead" neutral onClick={onClick} />
    <Button icon icon-border-filled onClick={onClick}>
      <ButtonIcon sprite="utility" icon="down" />
    </Button>
  </ButtonGroup>
);

const bottomButtons = (
  <ButtonGroup>
    <Button icon icon-border onClick={onClick}>
      <ButtonIcon sprite="utility" icon="chart" />
    </Button>
    <Button icon icon-border onClick={onClick}>
      <ButtonIcon sprite="utility" icon="filterList" />
    </Button>
    <Button icon icon-border onClick={onClick}>
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
