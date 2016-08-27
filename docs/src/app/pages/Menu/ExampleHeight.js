import React from 'react';
import {
  DropdownMenu,
  DropdownMenuList,
  DropdownMenuListItem,
} from 'react-lds';

const ExampleNubbin = () => {
  const button = { sprite: 'utility', icon: 'settings', noBorder: true };
  const iconAccount = { sprite: 'standard', icon: 'account', background: 'standard-account', alwaysDisplay: true };
  const iconApproval = { sprite: 'standard', icon: 'approval', background: 'standard-approval', alwaysDisplay: true };
  const iconLead = { sprite: 'standard', icon: 'lead', background: 'standard-lead', alwaysDisplay: true };

  const iconOpportunity = {
    sprite: 'standard',
    icon: 'opportunity',
    background: 'standard-opportunity',
    alwaysDisplay: true,
  };

  const iconProduct = { sprite: 'standard', icon: 'product', background: 'standard-product', alwaysDisplay: true };

  return (
    <div>
      <DropdownMenu button={button} nubbin>
        <DropdownMenuList height={5}>
          <DropdownMenuListItem>Item 1</DropdownMenuListItem>
          <DropdownMenuListItem>Item 2</DropdownMenuListItem>
          <DropdownMenuListItem>Item 3</DropdownMenuListItem>
          <DropdownMenuListItem>Item 4</DropdownMenuListItem>
          <DropdownMenuListItem>Item 5</DropdownMenuListItem>
          <DropdownMenuListItem>Item 6</DropdownMenuListItem>
          <DropdownMenuListItem>Item 7</DropdownMenuListItem>
          <DropdownMenuListItem>Item 9</DropdownMenuListItem>
          <DropdownMenuListItem>Item 10</DropdownMenuListItem>
          <DropdownMenuListItem>Item 11</DropdownMenuListItem>
          <DropdownMenuListItem divider>Important last item</DropdownMenuListItem>
        </DropdownMenuList>
      </DropdownMenu>

      <DropdownMenu button={button} nubbin>
        <DropdownMenuList heightIcon={7}>
          <DropdownMenuListItem leftIcon={iconAccount}>Item 1</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={iconApproval}>Item 2</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={iconLead}>Item 3</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={iconOpportunity}>Item 4</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={iconProduct}>Item 5</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={iconAccount}>Item 6</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={iconApproval}>Item 7</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={iconLead}>Item 8</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={iconOpportunity}>Item 9</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={iconProduct}>Item 10</DropdownMenuListItem>
          <DropdownMenuListItem leftIcon={iconAccount}>Item 11</DropdownMenuListItem>
          <DropdownMenuListItem divider>Important last item</DropdownMenuListItem>
        </DropdownMenuList>
      </DropdownMenu>
    </div>
  );
};

export default ExampleNubbin;
