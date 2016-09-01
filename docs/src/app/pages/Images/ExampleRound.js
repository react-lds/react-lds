import React from 'react';
import { Avatar } from 'react-lds';

const ExampleRound = (props, { assetBasePath }) =>
  <Avatar alt="Round Image" src={`${assetBasePath}assets/images/avatar2.jpg`} circle size="medium" />;

ExampleRound.contextTypes = {
  assetBasePath: React.PropTypes.string,
};

export default ExampleRound;
