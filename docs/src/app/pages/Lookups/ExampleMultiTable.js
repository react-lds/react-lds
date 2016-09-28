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
    name: 'Something',
    email: 'something@nobody.com',
  },
  {
    id: '2',
    label: 'Really',
    objectType: 'contact',
    name: 'Really',
    email: 'really@nobody.com',
  },
  {
    id: '3',
    label: 'Not so',
    objectType: 'contact',
    name: 'Not so',
    email: 'notso@nobody.com',
  },
  {
    id: '4',
    label: 'Much useful',
    objectType: 'contact',
    name: 'Much useful',
    email: 'useful@nobody.com',
  },
  {
    id: '5',
    label: 'Of any type',
    objectType: 'contact',
    name: 'Of any type',
    email: 'any@nobody.com',
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

  const tableFields = [
    {
      name: 'name',
      label: 'Contact Name',
    },
    {
      name: 'email',
      label: 'Email',
    },
  ];

  return (
    <Lookup
      id="lookup-multi-table"
      initialSelection={initialSelection}
      inputLabel="Accounts"
      listLabel="Recent Accounts"
      load={loadFunction}
      multi
      onChange={onChange}
      placeholder="Search Accounts"
      table
      tableFields={tableFields}
    />
  );
};

export default ExampleMulti;
