import React from 'react';
import {
  Menu,
  MenuDropdownList,
  MenuDropdownListItem,
} from 'react-lds';

const ExampleDefault = () => {
  const button = { sprite: 'utility', icon: 'down' };

  return (
    <div>
      <Menu button={button}>
        <MenuDropdownList>
          <MenuDropdownListItem>Item 1</MenuDropdownListItem>
          <MenuDropdownListItem>Item 2</MenuDropdownListItem>
          <MenuDropdownListItem>Item 3</MenuDropdownListItem>
          <MenuDropdownListItem divider>Important last item</MenuDropdownListItem>
        </MenuDropdownList>
      </Menu>

      <Menu button={button} size="medium" position="top-right">
        <MenuDropdownList>
          <MenuDropdownListItem>Item 1</MenuDropdownListItem>
          <MenuDropdownListItem>Item 2</MenuDropdownListItem>
          <MenuDropdownListItem>Item 3</MenuDropdownListItem>
        </MenuDropdownList>
      </Menu>
    </div>
  );
};

export default ExampleDefault;
