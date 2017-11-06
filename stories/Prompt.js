import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Prompt } from '../src';

import './utils/global.css';

import { PromptDecorator } from './utils/decorators';

const stories = storiesOf('Prompt', module);

stories
  .addDecorator(PromptDecorator)
  .add('Prompt', () => (
    <Prompt
      title="Service Unavailable"
      label="prompt-heading-id"
      buttonText="Okay"
      description="prompt-message-wrapper"
      open={boolean('Open', true)}
      onClickClose={action('clicked close')}
    >
      <p>
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
        deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      </p>
    </Prompt>
  ));