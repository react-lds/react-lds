import React from 'react';
import { PromptForTouch, Button } from 'react-lds';

const ExamplePromptTouchHeader = () => (
  <PromptForTouch open title="Select a New Record Type">
    <Button variation="neutral" title="Simple" />
    <Button variation="neutral" title="Advanced" />
    <Button variation="neutral" title="Partner" />
    <Button variation="neutral" title="Partner" />
    <Button variation="neutral" title="Person Accounts" />
    <Button variation="neutral" title="Cancel" />
  </PromptForTouch>
);

export default ExamplePromptTouchHeader;
