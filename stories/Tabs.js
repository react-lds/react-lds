/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { array, boolean, select } from '@storybook/addon-knobs';
import { ControlledTabs, Tabs, Tab } from '../src';

const stories = storiesOf('Tabs', module);

stories
  .add('Default', () => (
    <Tabs
      defaultActiveTab="tab-1"
      styled={boolean('Card Look?', true)}
      scoped={boolean('Scoped?', false)}
      onChangeTab={action('change-tab')}
      renderInactiveTabs={boolean('Render Inactive Tabs (Inspect to see change)', false)}
      size={select('Size', [null, 'medium', 'large'], null)}
    >
      {array('Tabs', ['tab-1', 'tab-2', 'tab-3']).map(s => (
        <Tab id={s} title={s} key={s}>{`${s} content`}</Tab>
      ))}
    </Tabs>
  ))
  .add('Controlled', () => (
    <ControlledTabs
      onChangeTab={action('change-tab')}
      activeTab={select('Tab Open', ['tab-1', 'tab-2', 'tab-3'], 'tab-2')}
    >
      <Tab id="tab-1" title="Tab 1">Tab One</Tab>
      <Tab id="tab-2" title="Tab 2">
        <span>
          Tab Two with <button>a focusable element.</button>
        </span>
      </Tab>
      <Tab id="tab-3" title="Tab 3">Tab Three</Tab>
    </ControlledTabs>
  ), {
    info: {
      text: `**ControlledTabs** are the underlying implementation of **Tabs**.
      They receive the active tab id via the prop _activeTab_ and hand off changes via _onChangeTab_.
      Note that this demo does not implement any event handling
      and focus styles will appear off because of this.`
    }
  });
