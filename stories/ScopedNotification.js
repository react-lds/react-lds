import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { ScopedNotification } from '../src';

const stories = storiesOf('ScopedNotification', module);

stories
  .add('Default', () => (
    <ScopedNotification
      theme={select('Theme', {
        base: null,
        light: 'light',
        dark: 'dark',
      }, 'base')}
    >
      <p>
        It looks as if duplicates exist for this lead.&nbsp;
        {/* eslint-disable-next-line no-script-url */}
        <a href="javascript:void(0);">View Duplicates.</a>
      </p>
    </ScopedNotification>
  ));
