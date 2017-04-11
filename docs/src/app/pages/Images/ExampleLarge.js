import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-lds';

const ExampleLarge = (props, { assetBasePath }) =>
  <Avatar alt="Large Image" src={`${assetBasePath}assets/images/avatar2.jpg`} size="large" />;

ExampleLarge.contextTypes = {
  assetBasePath: PropTypes.string,
};

export default ExampleLarge;
