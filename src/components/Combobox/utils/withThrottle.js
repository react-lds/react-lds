import React from 'react';

function rafThrottle(cb) {
  let currentExecution;

  const later = (context, args) => () => {
    currentExecution = null;
    cb.apply(context, args);
  };

  function throttled(...args) {
    if (currentExecution == null) {
      currentExecution = requestAnimationFrame(later(this, args));
    }
  }

  return throttled;
}

export const withThrottle = Cmp => props => <Cmp {...props} throttleFn={rafThrottle} />;
