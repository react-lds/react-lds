import React from 'react';
import {
  Menu,
  MenuDropdownList,
  MenuDropdownListItem,
} from 'react-lds';

const ExampleHeadings = () => {
  const button = { sprite: 'utility', icon: 'down', title: 'Click me', neutral: true };

  return (
    <Menu button={button} size="medium" position="top-left">
      <MenuDropdownList header="Very Important List 1">
        <MenuDropdownListItem>Item 1</MenuDropdownListItem>
        <MenuDropdownListItem>Item 2</MenuDropdownListItem>
        <MenuDropdownListItem>Item 3</MenuDropdownListItem>
      </MenuDropdownList>
      <MenuDropdownList header="Not so important List 2">
        <MenuDropdownListItem>Item 1</MenuDropdownListItem>
        <MenuDropdownListItem>Item 2</MenuDropdownListItem>
        <MenuDropdownListItem>Item 3</MenuDropdownListItem>
      </MenuDropdownList>
    </Menu>
  );
};

export default ExampleHeadings;
