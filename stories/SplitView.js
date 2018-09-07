
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Column, SplitView } from '../src';

const stories = storiesOf('SplitView', module);

stories
  .add('Default', () => (
    <SplitView
      id="split-view-default"
      detail={(
        <Column className="slds-theme_default slds-grid_vertical-align-center">
          <Box theme="shade">Details view</Box>
        </Column>
      )}
      master={(
        <Column className="slds-theme_default">
        <Box theme="shade">Master view</Box>
        </Column>
      )}
    />
  ))
  .add('Opened on startup', () => (
    <SplitView
      id="split-view-opened"
      initialIsOpen
      detail={(
        <Column className="slds-theme_default slds-grid_vertical-align-center">
          <Box theme="shade">Details view</Box>
        </Column>
      )}
      master={(
        <Column className="slds-theme_default">
        <Box theme="shade">Master view</Box>
        </Column>
      )}
    />
  ));
