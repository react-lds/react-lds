import React from 'react';

const MediaObjectBody = ({ children }) =>
  <div className="slds-media__body">{children}</div>;

MediaObjectBody.propTypes = {
  children: React.PropTypes.node,
};

export default MediaObjectBody;
