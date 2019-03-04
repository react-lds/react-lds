import React from 'react';
import { storiesOf } from '@storybook/react';
import { ContextBar } from '../src';

const stories = storiesOf('ContextBar', module);

stories
  .add('Default', () => (
    <ContextBar />
  ));

