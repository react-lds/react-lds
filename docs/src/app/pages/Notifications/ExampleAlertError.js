import React from 'react';
import { Notification, IconSVG } from 'react-lds';

const ExampleAlertError = () => (
  <Notification
    alert
    icon={<IconSVG sprite="utility" size="small" icon="error" />}
    title="Error"
    theme="error texture"
  >
    <h2>
      Your browser is currently not supported. Your Salesforce may be degraded. <a href="#top">More Information</a>
    </h2>
  </Notification>
);

export default ExampleAlertError;
