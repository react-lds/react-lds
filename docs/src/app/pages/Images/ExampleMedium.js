import React from 'react';
import { Avatar } from 'react-lds';

const ExampleMedium = (props, { assetBasePath }) =>
  <Avatar alt="Medium Image" src={`${assetBasePath}assets/images/avatar2.jpg`} size="medium" />;

ExampleMedium.contextTypes = {
  assetBasePath: React.PropTypes.string,
};

export default ExampleMedium;
