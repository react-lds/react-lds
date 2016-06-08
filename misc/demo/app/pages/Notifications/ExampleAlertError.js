import React from 'react';
import { Notification, IconSVG } from 'react-lds';

const ExampleAlertError = () => (
  <Notification alert title="Error" theme="error texture">
    <h2>
      <IconSVG sprite="utility" icon="ban" size="small" className="slds-m-right--x-small" />
      Your browser is currently not supported. Your Salesforce may be degraded. <a href="#">More Information</a>
    </h2>
  </Notification>
);

export default ExampleAlertError;
