import React from 'react';
import {
  DropdownMenu,
  DropdownMenuList,
  DropdownMenuListItem,
} from 'react-lds';

const ExampleNubbin = () => {
  const button = { sprite: 'utility', icon: 'settings', noBorder: true };

  return (
    <div>
      <DropdownMenu button={button} nubbin>
        <DropdownMenuList>
          <DropdownMenuListItem>Item 1</DropdownMenuListItem>
          <DropdownMenuListItem>Item 2</DropdownMenuListItem>
          <DropdownMenuListItem>Item 3</DropdownMenuListItem>
          <DropdownMenuListItem divider>Important last item</DropdownMenuListItem>
        </DropdownMenuList>
      </DropdownMenu>

      <DropdownMenu button={button} nubbin position="top-right">
        <DropdownMenuList>
          <DropdownMenuListItem>Item 1</DropdownMenuListItem>
          <DropdownMenuListItem>Item 2</DropdownMenuListItem>
          <DropdownMenuListItem>Item 3</DropdownMenuListItem>
        </DropdownMenuList>
      </DropdownMenu>

      <DropdownMenu button={button} nubbin position="bottom-right">
        <DropdownMenuList>
          <DropdownMenuListItem>Item 1</DropdownMenuListItem>
          <DropdownMenuListItem>Item 2</DropdownMenuListItem>
          <DropdownMenuListItem>Item 3</DropdownMenuListItem>
        </DropdownMenuList>
      </DropdownMenu>
    </div>
  );
};

export default ExampleNubbin;
