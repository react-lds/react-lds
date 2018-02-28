import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button, ButtonIcon, ControlledMenu, Menu, MenuItem, MenuSubHeader } from '../src';

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
      <MenuSubHeader>
        SubHeading 1
      </MenuSubHeader>
      <MenuItem
        divider={boolean('Divider item 1', false)}
        onClick={action('clicked menu item 1')}
      >Item 1</MenuItem>
      <MenuItem
        divider={boolean('Divider item 2', false)}
        onClick={action('clicked menu item 2')}
      >Item 2</MenuItem>
      <MenuSubHeader>
        SubHeading 2
      </MenuSubHeader>
      <MenuItem
        divider={boolean('Divider item 3', false)}
        onClick={action('clicked menu item 3')}
      >Item 3</MenuItem>
      <MenuItem
        divider={boolean('Divider item 4', true)}
        onClick={action('clicked menu item 4')}
      >Important last item</MenuItem>
    </ControlledMenu>
  ))
  .add('Uncontrolled', () => (
    <Menu
      button={object('Button', button)}
      disabled={boolean('Disabled', false)}
      last={boolean('Last', false)}
      nubbin={boolean('Nubbin', true)}
      position={select('Position', [
        '', 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'
      ], '') || undefined}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
      isOpen={boolean('isOpen', false) || undefined}
    >
      <MenuItem
        divider={boolean('Divider item 1', false)}
        onClick={action('clicked menu item 1')}
      >Item 1</MenuItem>
      <MenuItem
        divider={boolean('Divider item 2', false)}
        onClick={action('clicked menu item 2')}
      >Item 2</MenuItem>
      <MenuItem
        divider={boolean('Divider item 3', false)}
        onClick={action('clicked menu item 3')}
      >Item 3</MenuItem>
      <MenuItem
        divider={boolean('Divider item 4', true)}
        onClick={action('clicked menu item 4')}
      >Important last item</MenuItem>
    </Menu>
  ));
