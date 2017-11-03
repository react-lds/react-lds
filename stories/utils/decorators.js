import React from 'react';

const spinnerStyles = {
  height: '5rem',
  position: 'relative',
  background: 'rgb(247, 247, 247)',
};

export const SpinnerDecorator = storyFn => (
  <div style={spinnerStyles}>
    { storyFn() }
  </div>
);

export const PromptDecorator = storyFn => (
  <div className="demo-modal">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br />
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit<br />
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.
    { storyFn() }
  </div>
);

export const NotificationDecorator = storyFn => (
  <div className="demo-notifications">
    { storyFn() }
  </div>
);
