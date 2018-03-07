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

stories
  .add('Controlled', () => (
    <ControlledMenu
      className="bruno"
      button={customButton}
      last={boolean('Last', false)}
      nubbin={boolean('Nubbin', true)}
      position={select('Position', [
        '', 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'
      ], '') || undefined}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
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
  .add('Controlled with onSelect', () => (
    <ControlledMenu
      className="bruno"
      button={customButton}
      last={boolean('Last', false)}
      nubbin={boolean('Nubbin', true)}
      position={select('Position', [
        '', 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'
      ], '') || undefined}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
      isOpen={boolean('isOpen', true)}
      onSelect={action()}
    >
      <MenuSubHeader>
        SubHeading 1
      </MenuSubHeader>
      <MenuItem
        divider={boolean('Divider item 1', false)}
        dataValue="item1"
      >Item 1</MenuItem>
      <MenuItem
        divider={boolean('Divider item 2', false)}
        dataValue="item2"
      >Item 2</MenuItem>
      <MenuSubHeader>
        SubHeading 2
      </MenuSubHeader>
      <MenuItem
        divider={boolean('Divider item 3', false)}
        dataValue="item3"
      >Item 3</MenuItem>
      <MenuItem
        divider={boolean('Divider item 4', true)}
        dataValue="item4"
      >Important last item</MenuItem>
    </ControlledMenu>
  ))
  .add('Uncontrolled', () => (
    <Menu
      button={customButton}
      last={boolean('Last', false)}
      nubbin={boolean('Nubbin', true)}
      position={select('Position', [
        '', 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'
      ], '') || undefined}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
      defaultOpen={boolean('defaultOpen', true)}
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
  ))
  .add('Uncontrolled with onSelect', () => (
    <Menu
      button={customButton}
      last={boolean('Last', false)}
      nubbin={boolean('Nubbin', true)}
      position={select('Position', [
        '', 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'
      ], '') || undefined}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
      defaultOpen={boolean('defaultOpen', true)}
      onSelect={action()}
    >
      <MenuItem
        divider={boolean('Divider item 1', false)}
        dataValue="item1"
      >Item 1</MenuItem>
      <MenuItem
        divider={boolean('Divider item 2', false)}
        dataValue="item2"
      >Item 2</MenuItem>
      <MenuItem
        divider={boolean('Divider item 3', false)}
        dataValue="item3"
      >Item 3</MenuItem>
      <MenuItem
        divider={boolean('Divider item 4', true)}
        dataValue="item4"
      >Important last item</MenuItem>
    </Menu>
  ));
