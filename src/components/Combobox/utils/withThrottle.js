import React from 'react';

const rafThrottle = (cb) => {
  let currentExecution;

  const later = (context, args) => () => {
    currentExecution = null;
    cb.apply(context, args);
  };

  const throttled = (...args) => {
    if (currentExecution == null) {
      currentExecution = requestAnimationFrame(later(this, args));
    }
  };

  return throttled;
};

export const withThrottle = Cmp => props => <Cmp {...props} throttleFn={rafThrottle} />;
