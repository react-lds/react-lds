import React from 'react';
import { Avatar } from 'react-lds';

const ExampleSmall = (props, { assetBasePath }) =>
  <Avatar alt="Small Image" src={`${assetBasePath}assets/images/avatar2.jpg`} size="small" />;

ExampleSmall.contextTypes = {
  assetBasePath: React.PropTypes.string,
};

export default ExampleSmall;
