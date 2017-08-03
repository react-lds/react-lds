import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-lds';

const ExampleNormal = (props, { assetBasePath }) =>
  <Avatar
    alt="Normal Image"
    src={`${assetBasePath}assets/images/avatar2.jpg`}
    size="medium"
    title="Mr Nobody avatar"
  />;

ExampleNormal.contextTypes = {
  assetBasePath: PropTypes.string,
};

export default ExampleNormal;
