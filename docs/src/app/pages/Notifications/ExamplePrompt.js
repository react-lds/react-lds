import React from 'react';
import { Prompt } from 'react-lds';

const ExamplePrompt = () => (
  <Prompt
    title="Service Unavailable"
    label="prompt-heading-id"
    buttonText="Okay"
    description="prompt-message-wrapper"
    open
  >
    <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
    deserunt aute id consequat veniam incididunt duis in sint irure nisi.</p>
  </Prompt>
);

export default ExamplePrompt;
