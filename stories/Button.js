import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, object, array } from '@storybook/addon-knobs';
import { Button, ButtonIcon, ButtonGroup, StatefulButton } from '../src';

const stories = storiesOf('Button', module);

stories
  .add('Default', () => (
    <Button
      onClick={action()}
      title={text('Title', 'Title') || undefined}
      tooltip={text('Tooltip', 'I am a tooltip!')}
      disabled={boolean('Disabled', false)}
      selected={boolean('Selected', false)}
      flavor={array('Flavor', ['neutral'])}
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
  ));
