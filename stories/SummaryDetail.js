import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SummaryDetail } from '../src';
import './utils/global.css';

const stories = storiesOf('Summary Detail', module);

stories
  .add('Base', () => (
    <div>
      <SummaryDetail
        renderOpenContent={() => <div>Summary Content</div>}
        onOpen={action()}
      >
        <h3 className="slds-text-heading_small slds-m-top_x-small">Summary Title (closed)</h3>
      </SummaryDetail>
      <SummaryDetail
        renderOpenContent={() => <div>Summary Content</div>}
        onOpen={action()}
        isOpen
      >
        <h3 className="slds-text-heading_small slds-m-top_x-small">Summary Title (open)</h3>
      </SummaryDetail>
    </div>
  ));
