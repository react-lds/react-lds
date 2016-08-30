import React from 'react';
import {
  DropdownMenu,
  DropdownMenuList,
  DropdownMenuListItem,
} from 'react-lds';

const ExampleIcons = () => {
  const button = { sprite: 'utility', icon: 'down' };

  const leftIcon = {
    icon: 'check',
    sprite: 'utility',
  };

  const iconTable = {
    icon: 'table',
    sprite: 'utility',
  };

  const iconKanban = {
    icon: 'kanban',
    sprite: 'utility',
  };
  const iconSideList = {
    icon: 'side_list',
    sprite: 'utility',
  };

  return (
    <div>
      <DropdownMenu button={button}>
        <DropdownMenuList>
          <DropdownMenuListItem leftIcon={leftIcon} selected>Item 1</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={leftIcon}>Item 2</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={leftIcon}>Item 3</DropdownMenuListItem>
          <DropdownMenuListItem divider>Important last item</DropdownMenuListItem>
        </DropdownMenuList>
      </DropdownMenu>

      <DropdownMenu button={button}>
        <DropdownMenuList>
          <DropdownMenuListItem
            leftIcon={leftIcon}
            rightIcon={iconTable}
            selected
          >Item 1</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={leftIcon} rightIcon={iconKanban}>Item 2</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={leftIcon} rightIcon={iconSideList}>Item 3</DropdownMenuListItem>
          <DropdownMenuListItem divider>Important last item</DropdownMenuListItem>
        </DropdownMenuList>
      </DropdownMenu>
    </div>
  );
};

export default ExampleIcons;
