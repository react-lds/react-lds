import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Popover, MediaObject, Icon } from '../src';
import { getThemesWithoutTexture } from './utils/helpers';

const stories = storiesOf('Popover', module);

const icon = <Icon sprite="standard" size="small" icon="account" />;
const sampleHeader = (<p className="slds-text-heading--medium slds-hyphenate"><a href="#anchor">Sample Account</a></p>);
const sampleText = (
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias
  reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.</p>
);
const header = (
  <div>
    <MediaObject figureLeft={icon} className="slds-m-bottom--small">{sampleHeader}</MediaObject>
    {sampleText}
  </div>
);
const icon2 = <Icon sprite="standard" size="small" icon="opportunity" />;
const sampleHeader2 = (<p className="slds-text-heading--small slds-hyphenate">Sample Opportunity</p>);
const sampleText2 = (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias
reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.</p>);
const body = (
  <div>
    <div className="slds-popover__body-list">
      <MediaObject figureLeft={icon2} className="slds-m-bottom--small">{sampleHeader2}</MediaObject>
      {sampleText2}
    </div>
    <div className="slds-popover__body-list">
      <MediaObject figureLeft={icon2} className="slds-m-bottom--small">{sampleHeader2}</MediaObject>
      {sampleText2}
    </div>
  </div>
);


stories
  .add('Default', () => (
    <Popover
      open={boolean('Open', true)}
      closeable={boolean('Closeable', true)}
      onClose={action('Clicked close!')}
      header={text('Header', 'Header can be element or string')}
      body={text('Body', 'Body can be element or string')}
      footer={text('Footer', '')}
      nubbin={select('Nubbin', [
        '',
        'left',
        'left-top',
        'left-bottom',
        'top-left',
        'top-right',
        'right-top',
        'right-bottom',
        'bottom-left',
        'bottom-right',
      ], '') || undefined}
      customHeaderTheme={select('CustomHeaderTheme', [
        '',
        'warning',
        'error',
        'success',
        'info'
      ], '') || undefined}
      theme={getThemesWithoutTexture()}
    />
  ))
  .add('Panels', () => (
    <Popover
      open
      closeable
      onClose={action('Clicked close!')}
      header={header}
      body={body}
      nubbin={select('Nubbin', [
        '',
        'left',
        'left-top',
        'left-bottom',
        'top-left',
        'top-right',
        'right-top',
        'right-bottom',
        'bottom-left',
        'bottom-right',
      ], '') || undefined}
      panels
    />
  ));
