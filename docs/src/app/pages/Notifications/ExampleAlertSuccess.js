import React from 'react';
import { Notification, IconSVG } from 'react-lds';

const ExampleAlertSuccess = () => (
  <Notification
    alert
    icon={<IconSVG sprite="utility" size="small" icon="connected_apps" />}
    title="Success"
    theme="success texture"
  >
    Scheduled Maintenance Notification: Sunday March 15, 8:00 AM–10:00 PST <a href="#top">More Information</a>
  </Notification>
);

export default ExampleAlertSuccess;
