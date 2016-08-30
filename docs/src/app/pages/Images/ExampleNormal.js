import React from 'react';
import { Avatar } from 'react-lds';

const ExampleNormal = (props, { assetBasePath }) =>
  <Avatar alt="Normal Image" src={`${assetBasePath}assets/images/avatar2.jpg`} size="medium" />;

ExampleNormal.contextTypes = {
  assetBasePath: React.PropTypes.string,
};

export default ExampleNormal;
