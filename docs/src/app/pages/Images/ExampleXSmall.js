import React from 'react';
import { Avatar } from 'react-lds';

const ExampleXSmall = (props, { assetBasePath }) =>
  <Avatar alt="X-Small Image" src={`${assetBasePath}assets/images/avatar2.jpg`} size="x-small" />;

ExampleXSmall.contextTypes = {
  assetBasePath: React.PropTypes.string,
};
export default ExampleXSmall;
