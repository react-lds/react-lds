import React from 'react';
import { PromptForTouch, Button, Icon } from 'react-lds';

const icon = (<Icon sldsClasses={['m-bottom--x-small', 'p-around--x-small']} sprite="action" icon="share_thanks" />);

const ExamplePromptTouchIcon = () => (
  <PromptForTouch
    open
    headerIcon={icon}
    title="Your Feedback is Valueable"
    tagline="We’re glad to hear you’re enjoying the app! Your input helps drive
    our products. Would you mind taking a moment to give us feedback through the
    App Store? We really appreciate your support."
  >
    <Button variation="brand" title="Rate Salesforce1" />
    <Button variation="neutral" title="No, Thanks" />
    <Button variation="neutral" title="Remind Me Later" />
  </PromptForTouch>
);

export default ExamplePromptTouchIcon;
