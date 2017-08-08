import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-lds';

const ExampleMedium = (props, { assetBasePath }) =>
  <Avatar
    alt="Medium Image"
    src={`${assetBasePath}assets/images/avatar2.jpg`}
    size="medium"
    title="Mr Nobody avatar"
  />;

ExampleMedium.contextTypes = {
  assetBasePath: PropTypes.string,
};

export default ExampleMedium;
