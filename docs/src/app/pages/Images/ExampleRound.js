import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-lds';

const ExampleRound = (props, { assetBasePath }) =>
  <Avatar
    alt="Round Image"
    src={`${assetBasePath}assets/images/avatar2.jpg`}
    circle size="medium"
    title="Mr Nobody avatar"
  />;

ExampleRound.contextTypes = {
  assetBasePath: PropTypes.string,
};

export default ExampleRound;
