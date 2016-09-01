import React from 'react';

import Readme from '!raw!../../../../README.md';

import MarkdownElement from '../components/MarkdownElement';

const IndexPage = () =>
  <MarkdownElement text={Readme} />;

export default IndexPage;
