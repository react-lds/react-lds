import React from 'react';

import {
  ButtonGroup,
  Button,
  DropdownMenu,
  DropdownMenuList,
  DropdownMenuListItem,
} from 'react-lds';

const button = { sprite: 'utility', icon: 'down' };

const ExampleMoreButton = () =>
  <ButtonGroup>
    <Button variation="neutral" title="Button One" />
    <Button variation="neutral" title="Button Two" />
    <Button variation="neutral" title="Button Three" />
    <DropdownMenu button={button} last position="top-right">
      <DropdownMenuList>
        <DropdownMenuListItem>Item 1</DropdownMenuListItem>
        <DropdownMenuListItem>Item 2</DropdownMenuListItem>
        <DropdownMenuListItem>Item 3</DropdownMenuListItem>
        <DropdownMenuListItem divider>Important last item</DropdownMenuListItem>
      </DropdownMenuList>
    </DropdownMenu>
  </ButtonGroup>;

export default ExampleMoreButton;
