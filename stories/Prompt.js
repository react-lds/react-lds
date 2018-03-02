import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Prompt } from '../src';

import './utils/global.css';

import { ModalDecorator } from './utils/decorators';

const stories = storiesOf('Prompt', module);

stories
  .addDecorator(ModalDecorator)
  .add('Prompt', () => (
    <Prompt
      id="prompt"
      title={text('Title', 'Error')}
      labels={{ close: text('Label', 'Okay') }}
      open={boolean('Open', true)}
      onClose={action('clicked close')}
      theme={select('Theme', [
        '',
        'alt-inverse',
        'default',
        'error',
        'info',
        'inverse',
        'offline',
        'shade',
        'success',
        'warning',
      ], '') || undefined}
    >
      <p>
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
        deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      </p>
    </Prompt>
  ));
