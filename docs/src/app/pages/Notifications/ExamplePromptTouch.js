import React from 'react';
import { PromptForTouch, Button } from 'react-lds';

const ExamplePromptTouch = () => (
  <PromptForTouch open >
    <Button neutral title="Upload from Device" />
    <Button neutral title="Select a Salesforce File" />
    <Button neutral title="Cancel" />
  </PromptForTouch>
);

export default ExamplePromptTouch;
