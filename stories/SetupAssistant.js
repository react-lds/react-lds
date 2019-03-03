import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, SetupAssistant, SetupAssistantItem } from '../src';
import './utils/global.css';

const stories = storiesOf('Setup Assistant', module);
const makeLorem = () => (
  <span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </span>
);

const buildAssistant = ({ isOpen, onOpen } = {}) => (
  <SetupAssistant>
    <SetupAssistantItem
      title="Add Users to Your Org"
      stepProgress={100}
      onOpen={onOpen}
      isOpen={isOpen}
    >
      {makeLorem()}
    </SetupAssistantItem>
    <SetupAssistantItem
      title="Create Profiles for Your Users"
      stepProgress={25}
      step={2}
      onOpen={onOpen}
      isOpen={isOpen}
      renderAddon={() => <div>4 min</div>}
      renderOpenContent={() => (
        <div>
          Hello
        </div>
      )}
    >
      {makeLorem()}
    </SetupAssistantItem>
    <SetupAssistantItem
      title="Turn on Tracking for Profiles"
      step={3}
      onOpen={onOpen}
      isOpen={isOpen}
    >
      {makeLorem()}
    </SetupAssistantItem>
  </SetupAssistant>
);

stories
  .add('Base', () => (
    <SetupAssistant>
      <SetupAssistantItem title="Add Users to Your Org">
        {makeLorem()}
      </SetupAssistantItem>
      <SetupAssistantItem
        title="Create Profiles for Your Users"
        renderAddon={() => <div>4 min</div>}
        renderOpenContent={() => (
          <div>
            Hello
          </div>
        )}
      >
        {makeLorem()}
      </SetupAssistantItem>
      <SetupAssistantItem title="Turn on Tracking for Profiles">
        {makeLorem()}
      </SetupAssistantItem>
    </SetupAssistant>
  ))
  .add('Hub with expanded steps', () => (
    <SetupAssistant>
      <SetupAssistantItem
        title="Add Users to Your Org"
        stepProgress={100}
        onOpen={action()}
      >
        {makeLorem()}
      </SetupAssistantItem>
      <SetupAssistantItem
        title="Create Profiles for Your Users"
        stepProgress={25}
        step={2}
        onOpen={action()}
        isOpen
        renderAddon={() => <div>4 min</div>}
        renderOpenContent={() => (
          <div>
            Hello
          </div>
        )}
      >
        {makeLorem()}
      </SetupAssistantItem>
      <SetupAssistantItem
        title="Turn on Tracking for Profiles"
        step={3}
      >
        {makeLorem()}
      </SetupAssistantItem>
    </SetupAssistant>
  ));
