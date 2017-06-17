import React from 'react';
import { Accordion } from 'react-lds';

const sections = [
  {
    summary: 'bilbili',
    id: 'section1',
    content: <p>othercontent</p>
  },
  {
    summary: 'bululu pocapica',
    id: 'section2',
    content: <p>content1</p>,
  }
];

const ExampleNormal = () => (
  <Accordion sections={sections} />
);

export default ExampleNormal;
