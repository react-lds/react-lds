import React from 'react';
import { Accordion } from 'react-lds';

const sections = [
  {
    summary: 'summary1',
    id: 'section1',
    content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
  },
  {
    summary: 'summary2',
    id: 'section2',
    content: <p>content1</p>,
  },
];

const ExampleNormal = () => (
  <Accordion sections={sections} defaultOpen="section2" />
);

export default ExampleNormal;
