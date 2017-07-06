import React from 'react';
import { Notification } from 'react-lds';

const ExampleToastErrorDetails = () => (
  <Notification toast icon="error" title="Error" theme="error">
    <h2 className="slds-text-heading--small">
      You&#x27;ve encountered some errors when trying to save edits to Samuel Smith.
    </h2>
    <p>Here&#x27;s some detail of what happened, being very descriptive and transparent.</p>
  </Notification>
);

export default ExampleToastErrorDetails;
