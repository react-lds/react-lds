import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SummaryDetail } from '../src';
import './utils/global.css';

const stories = storiesOf('Summary Detail', module);

stories
  .add('Closed', () => (
    <SummaryDetail onOpen={action()} title="Summary Title">
      {() => <div>Summary Content</div>}
    </SummaryDetail>
  ))
  .add('Open', () => (
    <SummaryDetail isOpen onOpen={action()} title="Summary Title">
      {() => <div>Summary Content</div>}
    </SummaryDetail>
  ))
  .add('With Custom Title', () => (
    <SummaryDetail onOpen={action()} isOpen renderTitle={() => <h5>Custom Title </h5>}>
      {() => <div>Summary Content</div>}
    </SummaryDetail>
  ));
