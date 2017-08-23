import React from 'react';

import { StatefulButton } from 'react-lds';

const exampleProps = {
  onClick: window.alert,
  selected: true,
  stateNotSelected: {
    icon: 'add',
    sprite: 'utility',
    title: 'Follow',
  },
  stateSelected: {
    icon: 'check',
    sprite: 'utility',
    title: 'Following',
  },
  stateSelectedFocus: {
    icon: 'close',
    sprite: 'utility',
    title: 'Unfollow',
  },
  tooltip: "I'm a tooltip, look at me!",
};

const ExampleSelected = () =>
  <div>
    <div>
      <StatefulButton {...exampleProps} />
      <StatefulButton neutral {...exampleProps} />
      <StatefulButton brand {...exampleProps} />
      <StatefulButton destructive {...exampleProps} />
      <StatefulButton inverse {...exampleProps} />
      <StatefulButton success {...exampleProps} />
    </div>

    <hr />

    <div>
      <h3>Disabled</h3>
      <StatefulButton {...exampleProps} disabled />
      <StatefulButton neutral {...exampleProps} disabled />
      <StatefulButton brand {...exampleProps} disabled />
      <StatefulButton destructive {...exampleProps} disabled />
      <StatefulButton inverse {...exampleProps} disabled />
      <StatefulButton success {...exampleProps} disabled />
    </div>
  </div>;

export default ExampleSelected;
