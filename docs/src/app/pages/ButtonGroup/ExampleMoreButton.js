import React from 'react';

import {
  ButtonGroup,
  Button,
  Menu,
  MenuDropdownList,
  MenuDropdownListItem,
} from 'react-lds';

const button = { sprite: 'utility', icon: 'down' };
const onClick = () => {};

const ExampleMoreButton = () =>
  <ButtonGroup>
    <Button neutral title="Button One" onClick={onClick} />
    <Button neutral title="Button Two" onClick={onClick} />
    <Button neutral title="Button Three" onClick={onClick} />
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
