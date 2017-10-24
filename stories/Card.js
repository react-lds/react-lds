import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Card, Button } from '../src';

const stories = storiesOf('Card', module);

stories
  .add('Default', () => (
    <Card
      icon={text('Icon', 'contact')}
      sprite={text('Sprite', 'standard')}
      title={text('Title', 'Base Card')}
      headerRight={<Button title="New" neutral onClick={action('click')} />}
      body="Body would be here"
      footer="Footer"
    />
  ))
  .add('Without Icon', () => (
    <Card
      title={text('Title', 'Base Card')}
      headerRight={<Button title="New" neutral onClick={action('click')} />}
      body="Body would be here"
      footer="Footer"
    />
  ));
