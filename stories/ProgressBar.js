import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, boolean } from '@storybook/addon-knobs';
import { ProgressBar } from '../src';

const stories = storiesOf('Progress Bar', module);

stories
  .add('Default', () => (
    <ProgressBar
      circular={boolean('Circular', false)}
      size={select('Size', [null, 'x-small', 'small', 'medium', 'large'], null)}
      progress={number('Progress', 33, { range: true, min: 0, max: 100, step: 1, })}
    />
  ));
