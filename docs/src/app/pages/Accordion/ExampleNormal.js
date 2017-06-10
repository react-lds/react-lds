import React from 'react';
import { Accordion } from 'react-lds';

const sections = [
  {
    summary: 'bilbili',
    id: 'section1',
    children: []
  }
];

const ExampleNormal = () => (
  <Accordion sections={sections} />
);

export default ExampleNormal;
