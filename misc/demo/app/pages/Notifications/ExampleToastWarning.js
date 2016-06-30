import React from 'react';
import { Notification } from 'react-lds';

const ExampleToastWarning = () => (
  <Notification toast title="Warning" theme="warning">
    <div className="slds-notify__content">
      <h2 className="slds-text-heading--small">Oops, you&#x27;ve missed some required form inputs.</h2>
    </div>
  </Notification>
);

export default ExampleToastWarning;
