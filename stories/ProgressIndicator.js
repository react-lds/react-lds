import React from 'react';
import { storiesOf } from '@storybook/react';
import { Progress, ProgressItem } from '../src';

const stories = storiesOf('Progress Indicator', module);

stories
  .add('Default', () => (
    <Progress>
      <ProgressItem assistiveText="Step 1 - Active" isActive />
      <ProgressItem assistiveText="Step 2" />
      <ProgressItem assistiveText="Step 3" />
      <ProgressItem assistiveText="Step 4" />
      <ProgressItem assistiveText="Step 5" />
    </Progress>
  ))
  .add('Completed Step', () => (
    <Progress progress={2}>
      <ProgressItem assistiveText="Step 1 - Completed" isCompleted />
      <ProgressItem assistiveText="Step 2 - Completed" isCompleted isSuccess />
      <ProgressItem assistiveText="Step 3 - Active" isActive />
      <ProgressItem assistiveText="Step 4" />
      <ProgressItem assistiveText="Step 5" />
    </Progress>
  ))
  .add('Error in a Step', () => (
    <Progress progress={2}>
      <ProgressItem assistiveText="Step 1 - Completed" isCompleted />
      <ProgressItem assistiveText="Step 2 - Completed" isCompleted />
      <ProgressItem assistiveText="Step 3 - Error" isError />
      <ProgressItem assistiveText="Step 4" />
      <ProgressItem assistiveText="Step 5" />
    </Progress>
  ))
  .add('On a Gray Background', () => (
    <div style={{ background: 'rgb(243, 242, 242)', padding: '1rem' }}>
      <Progress progress={2} flavor="shade">
        <ProgressItem assistiveText="Step 1 - Completed" isCompleted />
        <ProgressItem assistiveText="Step 2 - Active" isActive />
        <ProgressItem assistiveText="Step 3" />
        <ProgressItem assistiveText="Step 4" />
        <ProgressItem assistiveText="Step 5" />
      </Progress>
    </div>
  ))
  .add('Vertical', () => (
    <Progress progress={2} isVertical>
      <ProgressItem assistiveText="Step 1 - Completed" isCompleted />
      <ProgressItem assistiveText="Step 2 - Active" isActive />
      <ProgressItem assistiveText="Step 3" />
      <ProgressItem assistiveText="Step 4" />
      <ProgressItem assistiveText="Step 5" />
    </Progress>
  ))
  .add('Vertical: Green Success', () => (
    <Progress progress={2} isVertical>
      <ProgressItem assistiveText="Step 1 - Success" isSuccess />
      <ProgressItem assistiveText="Step 2 - Active" isActive />
      <ProgressItem assistiveText="Step 3" />
      <ProgressItem assistiveText="Step 4" />
      <ProgressItem assistiveText="Step 5" />
    </Progress>
  ))
  .add('Vertical: Error in a Step', () => (
    <Progress progress={2} isVertical>
      <ProgressItem assistiveText="Step 1 - Success" isCompleted />
      <ProgressItem assistiveText="Step 2 - Error" isError />
      <ProgressItem assistiveText="Step 3" />
      <ProgressItem assistiveText="Step 4" />
      <ProgressItem assistiveText="Step 5" />
    </Progress>
  ))
  .add('Vertical: With arbitrary step content', () => (
    <Progress progress={2} isVertical>
      <ProgressItem assistiveText="Step 1 - Success" isCompleted />
      <ProgressItem assistiveText="Step 2 - Error" isError />
      <ProgressItem assistiveText="Step 3">
        <div>
          <ul>
            <li>Step 3.1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Step 3.2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          </ul>
          <p>
            <strong>Step 3 is the greatest step!</strong>
          </p>
        </div>
      </ProgressItem>
      <ProgressItem assistiveText="Step 4" />
      <ProgressItem assistiveText="Step 5" />
    </Progress>
  ));
