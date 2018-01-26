import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import { Icon, ProgressRing } from '../src';

const stories = storiesOf('Progress Ring', module);

stories
  .add('Default', () => (
    <ProgressRing
      complete="auto"
      status={select('Status', ['', 'expired', 'warning'], '') || undefined}
      progress={number('Progress', 88, { range: true, min: 0, max: 100, step: 1, })}

    />
  ))
  .add('With Custom Icon & Manual Completion', () => (
    <ProgressRing
      complete={boolean('Complete?', false)}
      customIcon={<Icon className="slds-current-color" sprite="doctype" icon="attachment" />}
      status={select('Status', ['', 'expired', 'warning'], '') || undefined}
      progress={number('Progress', 88, { range: true, min: 50, max: 200, step: 1, })}
      min={50}
      max={200}
    />
  ))
