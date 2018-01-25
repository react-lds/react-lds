import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Alert, IconSVG } from '../src';

import './utils/global.css';

import { AlertDecorator } from './utils/decorators';

const stories = storiesOf('Alert', module);

stories
  .addDecorator(AlertDecorator)
  .add('Default', () => (
    <Alert
      title={text('Title', 'info')}
      theme={select('Theme', ['', 'warning', 'error', 'offline'], '') || undefined}
      icon={<IconSVG sprite="utility" size="x-small" icon="warning" />}
      onClickClose={action('clicked close')}
    >
      <h2>
        This is the Notification text. <a href="#top">More Information</a>
      </h2>
    </Alert>
  ))
  .add('Toast', () => (
    <Alert
      title={text('Title', 'info')}
      theme={select('Theme', ['', 'warning', 'error', 'offline'], '') || undefined}
      icon={<IconSVG sprite="utility" size="small" icon="warning" />}
      toast
      onClickClose={action('clicked close')}
    >
      <h2>
        This is the Notification text. <a href="#top">More Information</a>
      </h2>
    </Alert>
  ));
