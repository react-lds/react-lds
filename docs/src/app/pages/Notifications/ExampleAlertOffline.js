import React from 'react';
import { Notification, IconSVG } from 'react-lds';

const ExampleAlertOffline = () => (
  <Notification
    alert
    icon={<IconSVG sprite="utility" size="small" icon="offline" />}
    title="Offline"
    theme="offline texture"
  >
    Your browser is currently not supported. Your Salesforce may be degraded. <a href="#top">More Information</a>
  </Notification>
);

export default ExampleAlertOffline;
