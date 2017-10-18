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
