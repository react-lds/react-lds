import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, SetupAssistant, SetupAssistantItem } from '../src';
import './utils/global.css';

const stories = storiesOf('Setup Assistant', module);

stories
  .add('Base', () => (
    <SetupAssistant>
      <SetupAssistantItem
        title="Add Users to Your Org"
        renderAddon={() => (
          <div>
            <Button>Add Users</Button>
          </div>
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </SetupAssistantItem>
      <SetupAssistantItem
        title="Create Profiles for Your Users"
        renderAddon={() => (
          <div>
            <Button>Go to Profiles</Button>
          </div>
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </SetupAssistantItem>
    </SetupAssistant>
  ))
  .add('Hub with expanded steps', () => (
    <SetupAssistant>
      <SetupAssistantItem
        title="Add Users to Your Org"
        stepProgress={100}
        onExpand={action()}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </SetupAssistantItem>
      <SetupAssistantItem
        title="Create Profiles for Your Users"
        stepProgress={25}
        step={2}
        onExpand={action()}
        isExpanded
        renderAddon={() => <div>4 min</div>}
        renderExpanded={() => (
          <div>
            Hello
          </div>
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </SetupAssistantItem>
      <SetupAssistantItem
        title="Turn on Tracking for Profiles"
        step={3}
        onExpand={action()}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </SetupAssistantItem>
    </SetupAssistant>
  ));
