import React from 'react';
import { Notification } from 'react-lds';

const ExampleAlertSuccess = () => (
  <Notification alert icon="connected_apps" title="Success" theme="success texture">
    Scheduled Maintenance Notification: Sunday March 15, 8:00 AM–10:00 PST <a href="#top">More Information</a>
  </Notification>
);

export default ExampleAlertSuccess;
