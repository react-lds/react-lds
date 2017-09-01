import React from 'react';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  Menu,
  MenuDropdownList,
  MenuDropdownListItem,
  File,
} from 'react-lds';

const sampleImage = {
  alt: 'Description',
  src: 'https://lightningdesignsystem.com/assets/images/placeholder-img@16x9.jpg',
};

const exampleActions = (
  <ButtonGroup>
    <Button icon icon-x-small icon-inverse>
      <ButtonIcon sprite="utility" icon="download" size="x-small" />
    </Button>
    <Menu
      customButton={<Button icon icon-x-small icon-inverse><ButtonIcon sprite="utility" icon="down" /></Button>}
      last
      position="top-right"
    >
      <MenuDropdownList>
        <MenuDropdownListItem>Item 1</MenuDropdownListItem>
        <MenuDropdownListItem>Item 2</MenuDropdownListItem>
      </MenuDropdownList>
    </Menu>
  </ButtonGroup>
);

const ExampleActionsNoTitle = () => (
  <div>
    <div className="slds-m-bottom--medium" style={{ width: '20rem' }}>
      <File
        actions={exampleActions}
        fileType="pdf"
        hideTitle
        title="Proposal.pdf"
        image={sampleImage}
      />
    </div>
  </div>
  );

export default ExampleActionsNoTitle;
