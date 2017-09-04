import React from 'react';
import {
  Menu,
  MenuDropdownList,
  MenuDropdownListItem,
} from 'react-lds';

const ExampleNubbin = () => {
  const button = { sprite: 'utility', icon: 'settings', noBorder: true, tooltip: 'I\'m a tooltip, look at me!' };

  return (
    <div>
      <Menu button={button} nubbin>
        <MenuDropdownList>
          <MenuDropdownListItem>Item 1</MenuDropdownListItem>
          <MenuDropdownListItem>Item 2</MenuDropdownListItem>
          <MenuDropdownListItem>Item 3</MenuDropdownListItem>
          <MenuDropdownListItem divider>Important last item</MenuDropdownListItem>
        </MenuDropdownList>
      </Menu>

      <Menu button={button} nubbin position="top-right">
        <MenuDropdownList>
          <MenuDropdownListItem>Item 1</MenuDropdownListItem>
          <MenuDropdownListItem>Item 2</MenuDropdownListItem>
          <MenuDropdownListItem>Item 3</MenuDropdownListItem>
        </MenuDropdownList>
      </Menu>

      <Menu button={button} nubbin position="bottom-right">
        <MenuDropdownList>
          <MenuDropdownListItem>Item 1</MenuDropdownListItem>
          <MenuDropdownListItem>Item 2</MenuDropdownListItem>
          <MenuDropdownListItem>Item 3</MenuDropdownListItem>
        </MenuDropdownList>
      </Menu>
    </div>
  );
};

export default ExampleNubbin;
