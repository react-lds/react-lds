import React from 'react';
import { Notification, IconSVG } from 'react-lds';

const ExampleAlertOffline = () => (
  <Notification alert title="Offline" theme="offline texture">
    <IconSVG sprite="utility" icon="offline" size="small" className="slds-m-right--x-small" />
    Your browser is currently not supported. Your Salesforce may be degraded. <a href="#">More Information</a>
  </Notification>
);

export default ExampleAlertOffline;
