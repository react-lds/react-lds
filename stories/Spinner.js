import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { Spinner, SpinnerContainer } from '../src';
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
  ))
  .add('With Container', () => (
    <SpinnerContainer fixed={boolean('Fixed', false)}>
      <Spinner
        flavor={select('Flavor', ['', 'brand', 'inverse'], '') || undefined}
        size={getSizes()}
      />
    </SpinnerContainer>
  ));
