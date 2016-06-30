import React from 'react';
import { Notification, IconSVG } from 'react-lds';

const ExampleAlertSuccess = () => (
  <Notification alert title="Success" theme="success texture">
    <IconSVG sprite="utility" icon="connected_apps" size="small" className="slds-m-right--x-small" />
    Scheduled Maintenance Notification: Sunday March 15, 8:00 AM–10:00 PST <a href="#">More Information</a>
  </Notification>
);

export default ExampleAlertSuccess;
