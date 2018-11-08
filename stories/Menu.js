import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { IconButton, ControlledMenu, Menu, MenuItem, MenuSubHeader } from '../src';

const stories = storiesOf('Menu', module);

const customButton = (
  <IconButton
    icon="warning"
    sprite="utility"
    onClick={action('Menu Button clicked')}
    aria-haspopup="true"
    className="slds-button_icon-border-filled"
  />
);

const positions = [
  '',
  'top-left',
  'top-left-corner',
  'top',
  'top-right',
  'top-right-corner',
  'bottom-left',
  'bottom-left-corner',
  'bottom',
  'bottom-right',
  'bottom-right-corner',
];

stories
  .add('Controlled', () => (
    <ControlledMenu
      button={customButton}
      last={boolean('Last', false)}
      nubbin={boolean('Nubbin', true)}
      position={select('Position', positions, '') || undefined}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
      isOpen={boolean('isOpen', true)}
    >
      <MenuSubHeader>
        SubHeading 1
      </MenuSubHeader>
      <MenuItem
        onClick={action('clicked menu item 1')}
      >Item 1</MenuItem>
      <MenuItem
        onClick={action('clicked menu item 2')}
      >Item 2</MenuItem>
      <MenuSubHeader>
        SubHeading 2
      </MenuSubHeader>
      <MenuItem
        onClick={action('clicked menu item 3')}
        divider={boolean('Divider item 3', true)}
      >Important Item 3</MenuItem>
      <MenuItem
        onClick={action('clicked menu item 4')}
      >Important last item</MenuItem>
    </ControlledMenu>
  ))
  .add('Controlled with onSelect', () => (
    <ControlledMenu
      className="bruno"
      button={customButton}
      last={boolean('Last', false)}
      nubbin={boolean('Nubbin', true)}
      position={select('Position', positions, '') || undefined}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
      isOpen={boolean('isOpen', true)}
      onSelect={action()}
    >
      <MenuSubHeader>
        SubHeading 1
      </MenuSubHeader>
      <MenuItem data-value="item1">Item 1</MenuItem>
      <MenuItem data-value="item2">Item 2</MenuItem>
      <MenuSubHeader>
        SubHeading 2
      </MenuSubHeader>
      <MenuItem
        data-value="item3"
        divider={boolean('Divider item 3', true)}
      >Important Item 3</MenuItem>
      <MenuItem
        data-value="item4"
      >Important last item</MenuItem>
    </ControlledMenu>
  ))
  .add('Uncontrolled', () => (
    <Menu
      button={customButton}
      last={boolean('Last', false)}
      nubbin={boolean('Nubbin', true)}
      position={select('Position', positions, '') || undefined}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
      defaultOpen={boolean('defaultOpen', true)}
    >
      <MenuItem onClick={action('clicked menu item 1')}>Item 1</MenuItem>
      <MenuItem onClick={action('clicked menu item 2')}>Item 2</MenuItem>
      <MenuItem
        onClick={action('clicked menu item 3')}
        divider={boolean('Divider item 3', true)}
      >Important Item 3</MenuItem>
      <MenuItem onClick={action('clicked menu item 4')}>Important last item</MenuItem>
    </Menu>
  ))
  .add('Uncontrolled with onSelect', () => (
    <Menu
      button={customButton}
      last={boolean('Last', false)}
      nubbin={boolean('Nubbin', true)}
      position={select('Position', positions, '') || undefined}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
      defaultOpen={boolean('defaultOpen', true)}
      onSelect={action()}
    >
      <MenuItem data-value="item1">Item 1</MenuItem>
      <MenuItem data-value="item2">Item 2</MenuItem>
      <MenuItem data-value="item3">Item 3</MenuItem>
      <MenuItem
        divider={boolean('Divider item 4', true)}
        data-value="item4"
      >Important last item</MenuItem>
    </Menu>
  ));
