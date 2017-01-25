import React from 'react';
import { Popover, MediaObject, Icon } from 'react-lds';

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

const Example = () => (
  <Popover
    open
    closeable
    onClose={() => {}}
    header={header}
    body={body}
    nubbin="bottom-right"
    panels
  />
);

export default Example;
