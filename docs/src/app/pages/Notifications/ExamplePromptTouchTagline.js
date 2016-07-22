import React from 'react';
import { PromptForTouch, Button } from 'react-lds';

const ExamplePromptTouchTagline = () => (
  <PromptForTouch open title="Delete Account" tagline="Are you sure you want to delete this account?">
    <Button variation="destructive" title="Delete" />
    <Button variation="neutral" title="Cancel" />
  </PromptForTouch>
);

export default ExamplePromptTouchTagline;
