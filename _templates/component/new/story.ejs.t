---
to: stories/<%= name %>.js
unless_exists: true
---
import React from 'react';
import { storiesOf } from '@storybook/react';
import { <%= name %> } from '../src';

const stories = storiesOf('<%= name %>', module);

stories
  .add('Default', () => (
    <<%= name %> />
  ));

