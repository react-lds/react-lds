import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
import { Icon, ProgressRing } from '../src';

const stories = storiesOf('Progress Ring', module);

stories
  .add('Default', () => (
    <ProgressRing
      complete="auto"
      progress={number('Progress', 88, { range: true, min: 0, max: 100, step: 1, })}
      size={select('Size', ['', 'large'], '') || undefined}
      status={select('Status', ['', 'expired', 'warning', 'active-step'], '') || undefined}
      variant={select('Variant', ['fill', 'drain'], 'fill')}
    />
  ))
  .add('With Custom Icon & Manual Completion', () => (
    <ProgressRing
      complete={boolean('Complete?', false)}
      customIcon={<Icon className="slds-current-color" sprite="doctype" icon="attachment" />}
      max={200}
      min={50}
      progress={number('Progress', 88, { range: true, min: 50, max: 200, step: 1, })}
      size={select('Size', ['', 'large'], '') || undefined}
      status={select('Status', ['', 'expired', 'warning', 'active-step'], '') || undefined}
      variant={select('Variant', ['fill', 'drain'], 'fill')}
    />
  ));
