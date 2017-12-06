import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { Spinner } from '../src';
import { getSizes } from './utils/helpers';
import { SpinnerDecorator } from './utils/decorators';

const stories = storiesOf('Spinner', module);

stories
  .addDecorator(SpinnerDecorator)
  .add('Default', () => (
    <Spinner
      brand={boolean('Brand', false)}
      inverse={boolean('Inverse', false)}
      size={getSizes()}
    />
  ));
