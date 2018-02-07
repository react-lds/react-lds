import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import { ControlledTabs, Tabs, Tab } from '../src';

const stories = storiesOf('Tabs', module);

stories
  .add('Default', () => (
    <Tabs
      styled={boolean('Card Look?', true)}
      scoped={boolean('Scoped?', false)}
      onChangeTab={action('change-tab')}
      renderInactiveTabs={boolean('Render Inactive Tabs (Inspect to see change)', false)}
    >
      <Tab id="tab-1" title="Tab 1">Tab One</Tab>
      <Tab id="tab-2" title="Tab 2">
        <span>
          Tab Two with <button>a focusable element.</button>
        </span>
      </Tab>
      <Tab id="tab-3" title="Tab 3">Tab Three</Tab>
    </Tabs>
  ))
  .add('Controlled', () => (
    <ControlledTabs
      onChangeTab={action('change-tab')}
      activeIndex={number('Tab Open', 2, { range: false, min: 0, max: 2 })}
    >
      <Tab id="tab-1" title="Tab 1">Tab One</Tab>
      <Tab id="tab-2" title="Tab 2">
        <span>
          Tab Two with <button>a focusable element.</button>
        </span>
      </Tab>
      <Tab id="tab-3" title="Tab 3">Tab Three</Tab>
    </ControlledTabs>
  ));
