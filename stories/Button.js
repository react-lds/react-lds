import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Button, ButtonIcon, ButtonGroup, StatefulButton } from '../src';

const stories = storiesOf('Button', module);

stories
  .add('Default', () => (
    <Button
      onClick={action()}
      title={text('Title', 'Title')}
      tooltip={text('Tooltip', 'I am a tooltip!')}
      disabled={boolean('Disabled', false)}
      selected={boolean('Selected', false)}
      neutral={boolean('Neutral', false)}
      brand={boolean('Brand', false)}
      destructive={boolean('Destructive', false)}
      inverse={boolean('Inverse', false)}
      success={boolean('Success', false)}
      iconSize={select('iconSize', ['xx-small', 'x-small', 'small', 'large', null], null)}
    />
  ))
  .add('With Icon', () => (
    <Button
      onClick={action()}
      title={text('Title', 'Title')}
      tooltip={text('Tooltip', 'I am a tooltip!')}
      disabled={boolean('Disabled', false)}
      selected={boolean('Selected', false)}
      neutral={boolean('Neutral', false)}
      brand={boolean('Brand', false)}
      destructive={boolean('Destructive', false)}
      inverse={boolean('Inverse', false)}
      success={boolean('Success', false)}
    >
      <ButtonIcon
        position={select('Position', ['left', 'right'], 'left')}
        sprite="standard"
        icon="account"
      />
    </Button>
  ))
  .add('Button Group', () => (
    <ButtonGroup>
      <Button neutral onClick={action('foo')} title="foo" />
      <Button neutral onClick={action('bar')} title="bar" />
      <Button neutral onClick={action('baz')} title="baz" />
    </ButtonGroup>
  ))
  .add('Stateful Button', () => (
    <StatefulButton
      onClick={action()}
      disabled={boolean('Disabled', false)}
      selected={boolean('Selected', false)}
      neutral={boolean('Neutral', false)}
      brand={boolean('Brand', false)}
      destructive={boolean('Destructive', false)}
      inverse={boolean('Inverse', false)}
      success={boolean('Success', false)}
      stateNotSelected={{
        icon: 'add',
        sprite: 'utility',
        title: 'Follow',
      }}
      stateSelected={{
        icon: 'check',
        sprite: 'utility',
        title: 'Following',
      }}
      stateSelectedFocus={{
        icon: 'close',
        sprite: 'utility',
        title: 'Unfollow',
      }}
      tooltip={text('Tooltip', 'I\'m a tooltip, look at me!')}
    />
  ));
