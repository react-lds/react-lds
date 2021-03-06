import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, boolean, text } from '@storybook/addon-knobs';
import { ProgressBar, DescriptiveProgressBar } from '../src';

const stories = storiesOf('Progress Bar', module);

stories
  .add('Default', () => (
    <ProgressBar
      circular={boolean('Circular', false)}
      size={select('Size', ['', 'x-small', 'small', 'medium', 'large']) || undefined}
      progress={number('Progress', 33, { range: true, min: 0, max: 100, step: 1, })}
      success={boolean('Success Style', false)}
    />
  ))
  .add('Vertical', () => (
    <div style={{ height: '200px' }}>
      <ProgressBar
        circular={boolean('Circular', false)}
        size={select('Size', ['', 'x-small', 'small', 'medium', 'large']) || undefined}
        progress={number('Progress', 33, { range: true, min: 0, max: 100, step: 1, })}
        success={boolean('Success Style', false)}
        vertical
      />
    </div>
  ))
  .add('Descriptive Progressbar', () => (
    <DescriptiveProgressBar
      completeLabel={text('Complete Label', 'Completed')}
      label={text('Label', 'Setup Assistant')}
      progress={number('Progress', 33, { range: true, min: 0, max: 100, step: 1, })}
    />
  ));
