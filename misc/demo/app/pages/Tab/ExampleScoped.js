import React from 'react';

import { Tab } from 'react-lds';

const tabs = [
  {
    title: 'Tab One',
    id: 'tab-1',
    content: <p>I am the first tab!</p>,
  },
  {
    title: 'Tab Two',
    id: 'tab-2',
    content: <p>I am the second tab!</p>,
  },
  {
    title: 'Tab Three',
    id: 'tab-3',
    content: <p>I am the third tab!</p>,
  },
];

const ExampleScoped = () => <Tab tabs={tabs} variation="scoped" />;

export default ExampleScoped;
