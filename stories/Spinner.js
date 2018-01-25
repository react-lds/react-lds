import React from 'react';
import { storiesOf } from '@storybook/react';
import { Spinner } from '../src';
import { boolean, select } from '@storybook/addon-knobs';
import { getSizes } from './utils/helpers';
import { SpinnerDecorator } from './utils/decorators';

const stories = storiesOf('Spinner', module);

stories
  .addDecorator(SpinnerDecorator)
  .add('Default', () => (
    <Spinner
      delayed={boolean('Delayed', true)}
      flavor={select('Flavor', ['', 'brand', 'inverse'], '') || undefined}
      size={getSizes()}
    />
  ));
