import React from 'react';
import {
  Menu,
  MenuDropdownList,
  MenuDropdownListItem,
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
      <Menu button={button} nubbin>
        <MenuDropdownList height={5}>
          <MenuDropdownListItem>Item 1</MenuDropdownListItem>
          <MenuDropdownListItem>Item 2</MenuDropdownListItem>
          <MenuDropdownListItem>Item 3</MenuDropdownListItem>
          <MenuDropdownListItem>Item 4</MenuDropdownListItem>
          <MenuDropdownListItem>Item 5</MenuDropdownListItem>
          <MenuDropdownListItem>Item 6</MenuDropdownListItem>
          <MenuDropdownListItem>Item 7</MenuDropdownListItem>
          <MenuDropdownListItem>Item 9</MenuDropdownListItem>
          <MenuDropdownListItem>Item 10</MenuDropdownListItem>
          <MenuDropdownListItem>Item 11</MenuDropdownListItem>
          <MenuDropdownListItem divider>Important last item</MenuDropdownListItem>
        </MenuDropdownList>
      </Menu>

      <Menu button={button} nubbin>
        <MenuDropdownList heightIcon={7}>
          <MenuDropdownListItem leftIcon={iconAccount}>Item 1</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={iconApproval}>Item 2</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={iconLead}>Item 3</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={iconOpportunity}>Item 4</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={iconProduct}>Item 5</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={iconAccount}>Item 6</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={iconApproval}>Item 7</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={iconLead}>Item 8</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={iconOpportunity}>Item 9</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={iconProduct}>Item 10</MenuDropdownListItem>
          <MenuDropdownListItem leftIcon={iconAccount}>Item 11</MenuDropdownListItem>
          <MenuDropdownListItem divider>Important last item</MenuDropdownListItem>
        </MenuDropdownList>
      </Menu>
    </div>
  );
};

export default ExampleNubbin;
