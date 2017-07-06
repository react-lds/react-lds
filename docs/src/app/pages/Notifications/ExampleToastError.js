import React from 'react';
import { Notification } from 'react-lds';

const ExampleToastError = () => (
  <Notification toast icon="error" title="Error" theme="error">
    <h2 className="slds-text-heading--small">
      You encountered some errors when trying to save edits to Samuel Smith.
    </h2>
  </Notification>
);

export default ExampleToastError;
