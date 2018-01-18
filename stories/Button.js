import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, object, array } from '@storybook/addon-knobs';
import {
  Button,
  ButtonIcon,
  ButtonGroup,
  StatefulButton,
  Menu,
  MenuDropdownList,
  MenuDropdownListItem
} from '../src';

const stories = storiesOf('Button', module);

stories
  .add('Default', () => (
    <Button
      disabled={boolean('Disabled', false)}
      flavor={array('Flavor', ['neutral'])}
      onClick={action()}
      selected={boolean('Selected', false)}
      size={select('Size', ['', 'x-small', 'small', 'large'], '') || undefined}
      title={text('Title', 'Title') || undefined}
      tooltip={text('Tooltip', 'I am a tooltip!')}
    />
  ))
  .add('With Icon', () => (
    <Button
      onClick={action()}
      title={text('Title', 'Title')}
      tooltip={text('Tooltip', 'I am a tooltip!')}
      disabled={boolean('Disabled', false)}
      selected={boolean('Selected', false)}
      flavor={array('Flavor', ['brand'])}
    >
      <ButtonIcon
        position={select('Position', ['left', 'right'], 'left')}
        sprite="utility"
        icon="download"
        size={select('Size', ['x-small', 'small', 'large', ''], '') || undefined}
      />
    </Button>
  ))
  .add('Button Group', () => (
    <ButtonGroup>
      <Button flavor={array('Button 1 flavor', ['neutral'])} onClick={action('foo')} title="foo" />
      <Button flavor={array('Button 2 flavor', ['neutral'])} onClick={action('bar')} title="bar" />
      <Button flavor={array('Button 3 flavor', ['brand'])} onClick={action('baz')} title="baz" />
    </ButtonGroup>
  ))
  .add('Stateful Button', () => (
    <StatefulButton
      onClick={action()}
      disabled={boolean('Disabled', false)}
      selected={boolean('Selected', false)}
      flavor={select('Flavor', [
        '',
        'neutral',
        'brand',
        'destructive',
        'inverse',
        'success',
      ], 'neutral') || undefined}
      stateNotSelected={object('StateNotSelected', {
        icon: 'add',
        sprite: 'utility',
        title: 'Follow',
      })}
      stateSelected={object('StateSelected', {
        icon: 'check',
        sprite: 'utility',
        title: 'Following',
      })}
      stateSelectedFocus={object('StateSelectedFocus', {
        icon: 'close',
        sprite: 'utility',
        title: 'Unfollow',
      })}
      tooltip={text('Tooltip', 'I\'m a tooltip, look at me!')}
    />
  ))
  .add('Button Group with Menu', () => (
    <ButtonGroup>
      <Button flavor={array('Button 1 flavor', ['neutral'])} onClick={action('foo')} title="foo" />
      <Button flavor={array('Button 2 flavor', ['neutral'])} onClick={action('bar')} title="bar" />
      <Button flavor={array('Button 3 flavor', ['neutral'])} onClick={action('baz')} title="baz" />
      <Menu
        button={object('Menu button', { sprite: 'utility', icon: 'down' })}
        last
        nubbin={boolean('Nubbin', true)}
        size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
        position={select('Position', [
          '', 'top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'
        ], 'top') || undefined}
      >
        <MenuDropdownList>
          <MenuDropdownListItem>Item 1</MenuDropdownListItem>
          <MenuDropdownListItem>Item 2</MenuDropdownListItem>
          <MenuDropdownListItem>Item 3</MenuDropdownListItem>
          <MenuDropdownListItem divider>Important last item</MenuDropdownListItem>
        </MenuDropdownList>
      </Menu>
    </ButtonGroup>
  ))
  .add('Button with a tag and href', () => (
    <Button
      a={boolean('a', true)}
      href={text('href', '#')}
      flavor={array('Flavor', ['brand'])}
      title={text('Title', 'hyperlink')}
    />
  ));
