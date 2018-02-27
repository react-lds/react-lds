import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button, ButtonIcon, ControlledMenu, MenuDropdownList, MenuDropdownListItem } from '../src';

const stories = storiesOf('Menu', module);

const button = {
  sprite: 'utility',
  icon: 'settings',
  brand: false,
  neutral: false,
  noBorder: true,
  title: '',
  tooltip: 'heyahehyhy'
};

const customButton = (
  <Button
    onClick={action('custom Button clicked')}
    aria-haspopup="true"
    className="slds-button_icon-border-filled"
  >
    <ButtonIcon
      icon="warning"
      sprite="utility"
    />
  </Button>
);

stories
  .add('Controlled', () => (
    <ControlledMenu
      button={object('Button', button)}
      disabled={boolean('Disabled', false)}
      last={boolean('Last', false)}
      nubbin={boolean('Nubbin', true)}
      position={select('Position', [
        '', 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'
      ], '') || undefined}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
      onMenuClick={action()}
      isOpen={boolean('isOpen', true)}
    >
      <MenuDropdownList>
        <MenuDropdownListItem
          divider={boolean('Divider item 1', false)}
        >Item 1</MenuDropdownListItem>
        <MenuDropdownListItem
          divider={boolean('Divider item 2', false)}
        >Item 2</MenuDropdownListItem>
        <MenuDropdownListItem
          divider={boolean('Divider item 3', false)}
        >Item 3</MenuDropdownListItem>
        <MenuDropdownListItem
          divider={boolean('Divider item 4', true)}
        >Important last item</MenuDropdownListItem>
      </MenuDropdownList>
    </ControlledMenu>
  ));
