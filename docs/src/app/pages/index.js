import React from 'react';
import MarkdownElement from '../components/MarkdownElement';
import Readme from '!raw!../../../../README.md';

const IndexPage = () =>
  <MarkdownElement text={Readme} />;

export default IndexPage;
