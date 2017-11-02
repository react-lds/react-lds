import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Notification, IconSVG, Prompt } from '../src';

const stories = storiesOf('Notification', module);

stories
  .add('Default', () => (
    <Notification
      title={text('Title', 'info')}
      theme={select('Theme', ['', 'warning', 'error', 'offline'], '') || undefined}
      icon={<IconSVG sprite="utility" size="x-small" icon="warning" />}
      onClickClose={action('clicked close')}
    >
      <h2>
        This is the Notification text. <a href="#top">More Information</a>
      </h2>
    </Notification>
  ))
  .add('Toast', () => (
    <Notification
      title={text('Title', 'info')}
      theme={select('Theme', ['', 'warning', 'error', 'offline'], '') || undefined}
      icon={<IconSVG sprite="utility" size="small" icon="warning" />}
      toast
      onClickClose={action('clicked close')}
    >
      <h2>
        This is the Notification text. <a href="#top">More Information</a>
      </h2>
    </Notification>
  ))
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
