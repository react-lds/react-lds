import React from 'react';

import {
  ButtonGroup,
  Button,
  Menu,
  MenuDropdownList,
  MenuDropdownListItem,
} from 'react-lds';

const button = { sprite: 'utility', icon: 'down' };

const ExampleMoreButton = () =>
  <ButtonGroup>
    <Button neutral title="Button One" />
    <Button neutral title="Button Two" />
    <Button neutral title="Button Three" />
    <Menu button={button} last position="top-right">
      <MenuDropdownList>
        <MenuDropdownListItem>Item 1</MenuDropdownListItem>
        <MenuDropdownListItem>Item 2</MenuDropdownListItem>
        <MenuDropdownListItem>Item 3</MenuDropdownListItem>
        <MenuDropdownListItem divider>Important last item</MenuDropdownListItem>
      </MenuDropdownList>
    </Menu>
  </ButtonGroup>;

export default ExampleMoreButton;
