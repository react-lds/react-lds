import React from 'react';

import { StatefulButton } from 'react-lds';

const exampleProps = {
  onClick: window.alert,
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

const ExampleUnselected = () =>
  <div>
    <StatefulButton {...exampleProps} />
    <StatefulButton neutral {...exampleProps} />
    <StatefulButton brand {...exampleProps} />
    <StatefulButton destructive {...exampleProps} />
    <StatefulButton inverse {...exampleProps} />
    <StatefulButton success {...exampleProps} />
  </div>;

export default ExampleUnselected;
