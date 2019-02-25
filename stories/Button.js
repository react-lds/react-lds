import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import {
  Button,
  ButtonIcon,
  CheckboxButton,
  IconButton,
  StatefulButton,
  StatefulIconButton,
  StatefulButtonState,
} from '../src';

const buttonFlavors = [
  'none',
  'brand',
  'destructive',
  'inverse',
  'neutral',
  'none',
  'outline-brand',
  'success',
  'text-destructive',
  'stretch',
  'reset',
];

const buttonStories = storiesOf('Button', module);

buttonStories
  .add('Default', () => (
    <Button
      onClick={action()}
      disabled={boolean('Disabled', false)}
      flavor={select('Flavor', buttonFlavors, 'neutral') || undefined}
      title={text('Title', 'Hover me')}
    >
      {text('Button Text', 'Click Me')}
    </Button>
  ))
  .add('Shortcut: Infer Button content from title', () => (
    <Button title={text('Title', 'Hover me')} />
  ))
  .add('Shortcut: Button with left icon', () => (
    <Button
      icon="download"
      sprite="utility"
      title={text('Title', 'Hover Me')}
    >
      {text('Button Text', 'Click Me')}
    </Button>
  ))
  .add('Shortcut: With right icon', () => (
    <Button
      icon="download"
      sprite="utility"
      iconPosition="right"
      title={text('Title', 'Hover Me')}
    >
      {text('Button Text', 'Click Me')}
    </Button>
  ))
  .add('Button: Advanced usage', () => (
    <Button title="Advanced Button">
      <span className="slds-text-color_weak">Advanced Button API</span>
      <ButtonIcon
        className="slds-icon-text-default"
        position="right"
        sprite="utility"
        icon="download"
        size="x-small"
      />
    </Button>
  ))
  .add('Stateful Button', () => (
    <StatefulButton
      disabled={boolean('Disabled?', false)}
      onClick={action()}
      selected={boolean('Selected?', false)}
      flavor={select('Flavor', buttonFlavors, 'neutral') || undefined}
    >
      <StatefulButtonState
        state="selected"
        icon="check"
        sprite="utility"
        title="Following"
      />
      <StatefulButtonState
        state="not-selected"
        icon="add"
        sprite="utility"
        title="Follow"
      />
      <StatefulButtonState
        state="focus"
        icon="close"
        sprite="utility"
        title="Unfollow"
      />
    </StatefulButton>
  ))
  .add('As a link', () => (
    <Button
      href="https://google.com"
      target="_blank"
      flavor="brand"
      title={text('Title', 'Google.com')}
    >
      Link to Google
    </Button>
  ));

const iconButtonStories = storiesOf('IconButton', module);

iconButtonStories
  .add('Default', () => (
    <IconButton
      sprite="utility"
      icon="settings"
      disabled={boolean('Disabled?', false)}
      flavor={select('Flavor', ['brand', 'error'], '') || undefined}
      onClick={action()}
      size={select('Size', ['', 'small', 'x-small', 'xx-small'], '') || undefined}
      title={text('Title', 'Hover Me')}
    />
  ))
  .add('Border filled with container', () => (
    <IconButton
      sprite="utility"
      icon="search"
      onClick={action()}
      border="filled"
    />
  ))
  .add('Transparent Container', () => (
    <IconButton
      sprite="utility"
      icon="search"
      onClick={action()}
      container
    />
  ))
  .add('Bordered Transparent Container', () => (
    <IconButton
      sprite="utility"
      icon="search"
      onClick={action()}
      border
    />
  ))
  .add('Inverse', () => (
    <div style={{ padding: '0.5rem', backgroundColor: 'rgb(22, 50, 92)' }}>
      <IconButton
        sprite="utility"
        icon="search"
        onClick={action()}
        flavor="inverse"
      />
    </div>
  ))
  .add('Bordered Inverse', () => (
    <div style={{ padding: '0.5rem', backgroundColor: 'rgb(22, 50, 92)' }}>
      <IconButton
        sprite="utility"
        icon="search"
        onClick={action()}
        border
        flavor="inverse"
      />
    </div>
  ))
  .add('Stateful', () => (
    <StatefulIconButton
      disabled={boolean('Disabled?', false)}
      selected={boolean('Selected?', false)}
      sprite="utility"
      icon="download"
    />
  ))
  .add('With Custom ButtonIcon', () => (
    <IconButton
      sprite="utility"
      icon="search"
      onClick={action()}
      border
    >
      <ButtonIcon
        className="some-class"
        icon="settings"
        sprite="utility"
      />
    </IconButton>
  ));

const checkboxButtonStories = storiesOf('Checkbox Button', module);

checkboxButtonStories
  .add('Default', () => (
    <CheckboxButton
      checked={boolean('Selected', false)}
      onChange={action()}
      label={text('Label', 'Label')}
      id="checkbox-toggle-1"
    />
  ));
