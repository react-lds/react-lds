import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Prompt } from '../src';

import './utils/global.css';

import { ModalDecorator } from './utils/decorators';

const stories = storiesOf('Prompt', module);

stories
  .addDecorator(ModalDecorator)
  .add('Prompt', () => (
    <Prompt
      title={text('Title', 'Tis a title')}
      label={text('Label', 'prompt-heading-id')}
      buttonText={text('ButtonText', 'Okay')}
      description={text('Description', 'description text')}
      open={boolean('Open', true)}
      onClickClose={action('clicked close')}
    >
      <p>
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
        deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      </p>
    </Prompt>
  ));
