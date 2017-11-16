import React from 'react';
import { Lookup } from 'react-lds';
import exampleData from './exampleData';

const ExampleError = () => {
  const loadFunction = () => {
    // eslint-disable-next-line no-console
    console.log('load called');
    return exampleData;
  };

  return (
    <Lookup
      error="Look at me I'm an error"
      id="lookup"
      inputLabel="Accounts"
      listLabel="Recent Accounts"
      load={loadFunction}
      onChange={() => {}}
      placeholder="Search Accounts"
      required
    />
  );
};

export default ExampleError;
