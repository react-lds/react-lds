import React from 'react';
import { Lookup } from 'react-lds';

const initialSelection = [
  {
    id: '1',
    label: 'Something',
    meta: 'Very meta',
    objectType: 'contact',
  },
];

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

const ExampleMulti = () => {
  const loadFunction = (searchTerm) => {
    // eslint-disable-next-line no-console
    console.log('load called');
    return exampleData.filter(data => data.label.startsWith(searchTerm));
  };

  const onChange = (selectedItems) => {
    // eslint-disable-next-line no-console
    console.log(selectedItems);
  };

  return (
    <Lookup
      id="lookup-multi"
      initialSelection={initialSelection}
      inputLabel="Accounts"
      listLabel="Recent Accounts"
      load={loadFunction}
      multi
      onChange={onChange}
      placeholder="Search Accounts"
      allowCreate
    />
  );
};

export default ExampleMulti;
