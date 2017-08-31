import React from 'react';
import {
  Menu,
  MenuDropdownList,
  MenuDropdownListItem,
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
      <Menu button={button}>
        <MenuDropdownList>
          <MenuDropdownListItem leftIcon={leftIcon} selected>Item 1</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={leftIcon}>Item 2</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={leftIcon}>Item 3</MenuDropdownListItem>
          <MenuDropdownListItem divider>Important last item</MenuDropdownListItem>
        </MenuDropdownList>
      </Menu>

      <Menu button={button}>
        <MenuDropdownList>
          <MenuDropdownListItem
            leftIcon={leftIcon}
            rightIcon={iconTable}
            selected
          >Item 1</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={leftIcon} rightIcon={iconKanban}>Item 2</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={leftIcon} rightIcon={iconSideList}>Item 3</MenuDropdownListItem>
          <MenuDropdownListItem divider>Important last item</MenuDropdownListItem>
        </MenuDropdownList>
      </Menu>
    </div>
  );
};

export default ExampleIcons;
