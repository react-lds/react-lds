import React from 'react';
import {
  DropdownMenu,
  DropdownMenuList,
  DropdownMenuListItem,
} from 'react-lds';

const ExampleDefault = () => {
  const button = { sprite: 'utility', icon: 'down' };

  return (
    <div>
      <DropdownMenu button={button}>
        <DropdownMenuList>
          <DropdownMenuListItem>Item 1</DropdownMenuListItem>
          <DropdownMenuListItem>Item 2</DropdownMenuListItem>
          <DropdownMenuListItem>Item 3</DropdownMenuListItem>
          <DropdownMenuListItem divider>Important last item</DropdownMenuListItem>
        </DropdownMenuList>
      </DropdownMenu>

      <DropdownMenu button={button} size="medium" position="top-right">
        <DropdownMenuList>
          <DropdownMenuListItem>Item 1</DropdownMenuListItem>
          <DropdownMenuListItem>Item 2</DropdownMenuListItem>
          <DropdownMenuListItem>Item 3</DropdownMenuListItem>
        </DropdownMenuList>
      </DropdownMenu>
    </div>
  );
};

export default ExampleDefault;
