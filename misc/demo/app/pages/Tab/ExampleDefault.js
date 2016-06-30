import React from 'react';

import { Tab } from 'react-lds';

const tabs = [
  {
    title: 'Tab 1',
    id: 'tab-1',
    content: <p>I am the first tab!</p>,
  },
  {
    title: 'Tab 2',
    id: 'tab-2',
    content: <p>I am the second tab!</p>,
  },
  {
    title: 'Tab 3',
    id: 'tab-3',
    content: <p>I am the third tab!</p>,
  },
];

const ExampleDefault = () => <Tab tabs={tabs} />;

export default ExampleDefault;
