import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { Button, Spinner, SpinnerContainer } from '../src';
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
      inline={boolean('Inline', false)}
    />
  ))
  .add('With Container', () => (
    <SpinnerContainer fixed={boolean('Fixed', false)}>
      <Spinner
        flavor={select('Flavor', ['', 'brand', 'inverse'], '') || undefined}
        size={getSizes()}
      />
    </SpinnerContainer>
  ))
  .add('With Container convenience prop', () => (
    <Spinner container />
  ))
  .add('Inline Spinner', () => (
    <div>
      <span>Lorem Ipsum</span>
      <Spinner
        size="x-small"
        inline
      />
      <Button>foo bar</Button>
    </div>
  ));
