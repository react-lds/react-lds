import React from 'react';
import { Notification, IconSVG } from 'react-lds';

const ExampleToastSuccess = () => (
  <Notification
    toast
    icon={<IconSVG sprite="utility" size="small" icon="success" />}
    title="Success"
    theme="success"
  >
    <h2 className="slds-text-heading--small">
      Your new contact <a href="#top">Sara Smith</a> was successfully created.
    </h2>
  </Notification>
);

export default ExampleToastSuccess;
