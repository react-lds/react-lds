import React from 'react';
import { Lookup } from 'react-lds';
import exampleData from './exampleData';

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
      onChange={() => {}}
      placeholder="Search Accounts"
    />
  );
};

export default ExampleDefault;
