import React from 'react';
import {
  DropdownMenu,
  DropdownMenuList,
  DropdownMenuListItem,
} from 'react-lds';

const ExampleHeadings = () => {
  const button = { sprite: 'utility', icon: 'down', title: 'Click me', neutral: true };

  return (
    <DropdownMenu button={button} size="medium" position="top-left">
      <DropdownMenuList header="Very Important List 1">
        <DropdownMenuListItem>Item 1</DropdownMenuListItem>
        <DropdownMenuListItem>Item 2</DropdownMenuListItem>
        <DropdownMenuListItem>Item 3</DropdownMenuListItem>
      </DropdownMenuList>
      <DropdownMenuList header="Not so important List 2">
        <DropdownMenuListItem>Item 1</DropdownMenuListItem>
        <DropdownMenuListItem>Item 2</DropdownMenuListItem>
        <DropdownMenuListItem>Item 3</DropdownMenuListItem>
      </DropdownMenuList>
    </DropdownMenu>
  );
};

export default ExampleHeadings;
