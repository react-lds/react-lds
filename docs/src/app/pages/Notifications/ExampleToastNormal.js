import React from 'react';
import { Notification, IconSVG } from 'react-lds';

const ExampleToastNormal = () => (
  <Notification
    toast
    icon={<IconSVG sprite="utility" size="small" icon="info" />}
    title="Info"
    theme="info"
  >
    <div className="slds-notify__content">
      <h2 className="slds-text-heading--small">Base Toast</h2>
    </div>
  </Notification>
);

export default ExampleToastNormal;
