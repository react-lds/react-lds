import React from 'react';

export const FileDecorator = storyFn => (
  <div>
    <div className="slds-m-bottom--medium" style={{ width: '20rem' }}>
      { storyFn() }
    </div>
  </div>
);

export const ModalDecorator = storyFn => (
  <div className="demo-modal">
    <button>Focusable</button>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br />
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit<br />
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.
    </p>
    { storyFn() }
  </div>
);

export const AlertDecorator = storyFn => (
  <div className="demo-notifications">
    { storyFn() }
  </div>
);

export const SpinnerDecorator = storyFn => (
  <div style={{ height: '5rem', position: 'relative', background: 'rgb(247, 247, 247)', }}>
    { storyFn() }
  </div>
);

export const VerticalNavigationDecorator = storyFn => (
  <div style={{ width: '15rem', }}>
    { storyFn() }
  </div>
);

export const TooltipsDecorator = storyFn => (
  <div className="demo-tooltips">
    { storyFn() }
  </div>
);
