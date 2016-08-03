import React from 'react';
import { Pill, Icon } from 'react-lds';

const Example = () => {
  const icon = (<Icon div sprite="standard" icon="account" title="description of icon" />);
  return (<Pill url="#" icon={icon} label="Pill Label" title="Full pill label verbiage mirrored here" />);
};

export default Example;
