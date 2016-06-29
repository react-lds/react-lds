import React from 'react';

import { Tab } from 'react-lds';

const nestedTabs = [
  {
    title: 'Nested One',
    id: 'nested-1',
    content: <p>I am the first tab!</p>,
  },
  {
    title: 'Nested Two',
    id: 'nested-2',
    content: <p>I am the second tab!</p>,
  },
  {
    title: 'Nested Three',
    id: 'nested-3',
    content: <p>I am the third tab!</p>,
  },
];

const tabs = [
  {
    title: 'Tab 1',
    id: 'tab-1',
    content: <Tab tabs={nestedTabs} variation="scoped" />,
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

const ExampleNested = () => <Tab tabs={tabs} />;

export default ExampleNested;
