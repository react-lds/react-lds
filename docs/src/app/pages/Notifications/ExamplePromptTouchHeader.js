import React from 'react';
import { PromptForTouch, Button } from 'react-lds';

const ExamplePromptTouchHeader = () => (
  <PromptForTouch open title="Select a New Record Type">
    <Button neutral title="Simple" />
    <Button neutral title="Advanced" />
    <Button neutral title="Partner" />
    <Button neutral title="Partner" />
    <Button neutral title="Person Accounts" />
    <Button neutral title="Cancel" />
  </PromptForTouch>
);

export default ExamplePromptTouchHeader;
