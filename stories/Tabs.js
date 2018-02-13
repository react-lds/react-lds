import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { Tab } from '../src';

const stories = storiesOf('Tabs', module);

const tabs = [
  {
    title: 'Tab One',
    id: 'tab-1',
    content: <p>I am the first tab!</p>,
  },
  {
    title: 'Tab Two',
    id: 'tab-2',
    content: <p>I am the second tab!</p>,
  },
  {
    title: 'Tab Three',
    id: 'tab-3',
    content: <p>I am the third tab!</p>,
  },
];

stories
  .add('Default', () => (
    <Tab
      tabs={tabs}
      scoped={boolean('Scoped', false)}
      styled={boolean('Card-Look', false)}
    />
  ));
