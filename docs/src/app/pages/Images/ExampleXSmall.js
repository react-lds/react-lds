import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-lds';

const ExampleXSmall = (props, { assetBasePath }) =>
  <Avatar alt="X-Small Image" src={`${assetBasePath}assets/images/avatar2.jpg`} size="x-small" />;

ExampleXSmall.contextTypes = {
  assetBasePath: PropTypes.string,
};
export default ExampleXSmall;
