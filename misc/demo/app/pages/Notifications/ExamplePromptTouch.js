import React from 'react';
import { PromptForTouch, Button } from 'react-lds';

const ExamplePromptTouch = () => (
  <PromptForTouch open >
    <Button variation="neutral" title="Upload from Device" />
    <Button variation="neutral" title="Select a Salesforce File" />
    <Button variation="neutral" title="Cancel" />
  </PromptForTouch>
);

export default ExamplePromptTouch;
