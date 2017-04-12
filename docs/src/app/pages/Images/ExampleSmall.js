import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-lds';

const ExampleSmall = (props, { assetBasePath }) =>
  <Avatar alt="Small Image" src={`${assetBasePath}assets/images/avatar2.jpg`} size="small" />;

ExampleSmall.contextTypes = {
  assetBasePath: PropTypes.string,
};

export default ExampleSmall;
