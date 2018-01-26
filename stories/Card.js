import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Card, Icon, Button } from '../src';

const stories = storiesOf('Card', module);

stories
  .add('Default', () => (
    <Card
      icon={<Icon sprite="standard" icon="contact" />}
      title={text('Title', 'Base Card')}
      headerRight={<Button flavor="neutral" title="New" onClick={action('click')} />}
      footer="Footer"
    >
      Body would be here
    </Card>
  ))
  .add('Without Icon', () => (
    <Card
      title={text('Title', 'Base Card')}
      headerRight={<Button flavor="neutral" title="New" onClick={action('click')} />}
      footer="Footer"
    >
      Body would be here
    </Card>
  ));
