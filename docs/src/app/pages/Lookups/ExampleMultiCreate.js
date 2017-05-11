import React from 'react';
import { Lookup } from 'react-lds';
import exampleData from './exampleData';

const initialSelection = [
  {
    id: '1',
    label: 'Something',
    meta: 'Very meta',
    objectType: 'contact',
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
