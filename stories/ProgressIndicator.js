import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  ProgressIndicator,
  ProgressIndicatorItem,
  VerticalProgressIndicator,
  VerticalProgressIndicatorItem,
} from '../src';

const stories = storiesOf('Progress Indicator', module);

stories
  .add('Default', () => (
    <ProgressIndicator>
      <ProgressIndicatorItem assistiveText="Step 1 - Active" isActive />
      <ProgressIndicatorItem assistiveText="Step 2" />
      <ProgressIndicatorItem assistiveText="Step 3" />
      <ProgressIndicatorItem assistiveText="Step 4" />
      <ProgressIndicatorItem assistiveText="Step 5" />
    </ProgressIndicator>
  ))
  .add('Completed Step', () => (
    <ProgressIndicator progress={2}>
      <ProgressIndicatorItem assistiveText="Step 1 - Completed" isCompleted />
      <ProgressIndicatorItem assistiveText="Step 2 - Completed" isCompleted isSuccess />
      <ProgressIndicatorItem assistiveText="Step 3 - Active" isActive />
      <ProgressIndicatorItem assistiveText="Step 4" />
      <ProgressIndicatorItem assistiveText="Step 5" />
    </ProgressIndicator>
  ))
  .add('Error in a Step', () => (
    <ProgressIndicator progress={2}>
      <ProgressIndicatorItem assistiveText="Step 1 - Completed" isCompleted />
      <ProgressIndicatorItem assistiveText="Step 2 - Completed" isCompleted />
      <ProgressIndicatorItem assistiveText="Step 3 - Error" isError />
      <ProgressIndicatorItem assistiveText="Step 4" />
      <ProgressIndicatorItem assistiveText="Step 5" />
    </ProgressIndicator>
  ))
  .add('On a Gray Background', () => (
    <div style={{ background: 'rgb(243, 242, 242)', padding: '1rem' }}>
      <ProgressIndicator progress={2} flavor="shade">
        <ProgressIndicatorItem assistiveText="Step 1 - Completed" isCompleted />
        <ProgressIndicatorItem assistiveText="Step 2 - Active" isActive />
        <ProgressIndicatorItem assistiveText="Step 3" />
        <ProgressIndicatorItem assistiveText="Step 4" />
        <ProgressIndicatorItem assistiveText="Step 5" />
      </ProgressIndicator>
    </div>
  ))
  .add('Vertical', () => (
    <VerticalProgressIndicator progress={2}>
      <VerticalProgressIndicatorItem assistiveText="Step 1 - Completed" isCompleted />
      <VerticalProgressIndicatorItem assistiveText="Step 2 - Active" isActive />
      <VerticalProgressIndicatorItem assistiveText="Step 3" />
      <VerticalProgressIndicatorItem assistiveText="Step 4" />
      <VerticalProgressIndicatorItem assistiveText="Step 5" />
    </VerticalProgressIndicator>
  ))
  .add('Vertical: Green Success', () => (
    <VerticalProgressIndicator progress={2}>
      <VerticalProgressIndicatorItem assistiveText="Step 1 - Success" isSuccess />
      <VerticalProgressIndicatorItem assistiveText="Step 2 - Active" isActive />
      <VerticalProgressIndicatorItem assistiveText="Step 3" />
      <VerticalProgressIndicatorItem assistiveText="Step 4" />
      <VerticalProgressIndicatorItem assistiveText="Step 5" />
    </VerticalProgressIndicator>
  ))
  .add('Vertical: Error in a Step', () => (
    <VerticalProgressIndicator progress={2}>
      <VerticalProgressIndicatorItem assistiveText="Step 1 - Success" isCompleted />
      <VerticalProgressIndicatorItem assistiveText="Step 2 - Error" isError />
      <VerticalProgressIndicatorItem assistiveText="Step 3" />
      <VerticalProgressIndicatorItem assistiveText="Step 4" />
      <VerticalProgressIndicatorItem assistiveText="Step 5" />
    </VerticalProgressIndicator>
  ))
  .add('Vertical: With arbitrary step content', () => (
    <VerticalProgressIndicator progress={2}>
      <VerticalProgressIndicatorItem assistiveText="Step 1 - Success" isCompleted />
      <VerticalProgressIndicatorItem assistiveText="Step 2 - Error" isError />
      <VerticalProgressIndicatorItem assistiveText="Step 3">
        <div>
          <ul>
            <li>Step 3.1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Step 3.2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          </ul>
          <p>
            <strong>Step 3 is the greatest step!</strong>
          </p>
        </div>
      </VerticalProgressIndicatorItem>
      <VerticalProgressIndicatorItem assistiveText="Step 4" />
      <VerticalProgressIndicatorItem assistiveText="Step 5" />
    </VerticalProgressIndicator>
  ));
