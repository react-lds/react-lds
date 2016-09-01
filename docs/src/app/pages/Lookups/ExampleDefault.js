import React from 'react';
import { Lookup } from 'react-lds';

const exampleData = [
  {
    id: '1',
    label: 'Something',
    meta: 'Very meta',
    objectType: 'contact',
  },
  {
    id: '2',
    label: 'Really',
    objectType: 'contact',
  },
  {
    id: '3',
    label: 'Not so',
    objectType: 'contact',
  },
  {
    id: '4',
    label: 'Much useful',
    objectType: 'contact',
  },
  {
    id: '5',
    label: 'Of any type',
    objectType: 'contact',
  },
  {
    id: '6',
    label: 'Of some type',
    objectType: 'account',
  },
  {
    id: '7',
    label: 'Of some record type',
    objectType: 'record',
  },
];

const ExampleDefault = () => {
  const loadFunction = () => {
    // eslint-disable-next-line no-console
    console.log('load called');
    return exampleData;
  };

  return (
    <Lookup
      id="lookup"
      inputLabel="Accounts"
      listLabel="Recent Accounts"
      load={loadFunction}
      placeholder="Search Accounts"
    />
  );
};

export default ExampleDefault;
