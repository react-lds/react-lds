import React from 'react';
import { Avatar } from 'react-lds';

const ExampleLarge = (props, { assetBasePath }) =>
  <Avatar alt="Large Image" src={`${assetBasePath}assets/images/avatar2.jpg`} size="large" />;

ExampleLarge.contextTypes = {
  assetBasePath: React.PropTypes.string,
};

export default ExampleLarge;
