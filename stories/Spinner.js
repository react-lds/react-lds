import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Spinner } from '../src';
import { getSizes } from './utils/helpers';
import { SpinnerDecorator } from './utils/decorators';

const stories = storiesOf('Spinner', module);

stories
  .addDecorator(SpinnerDecorator)
  .add('Default', () => (
    <Spinner
      flavor={select('Flavor', ['', 'brand', 'inverse'], '') || undefined}
      size={getSizes()}
    />
  ));
