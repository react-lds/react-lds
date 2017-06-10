import React from 'react';
import { Accordion } from 'react-lds';

const sections = [
  {
    summary: 'summary1',
    id: 'section1',
    content: <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>,
    summaryOnClick: function example() {},
  },
  {
    summary: 'summary2',
    id: 'section2',
    content: <p>content1</p>,
  },
  {
    summary: 'summary3',
    id: 'ertzuio',
    content: <p>othercontent</p>,
  }
];

const ExampleNormal = () => (
  <Accordion sections={sections} />
);

export default ExampleNormal;
