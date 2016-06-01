import React from 'react';

const MediaObject = ({ figure, children }) =>
  <div className="slds-media">
    <div className="slds-media__figure">{figure}</div>
    <div className="slds-media__body">{children}</div>
  </div>;

MediaObject.propTypes = {
  figure: React.PropTypes.element,
  children: React.PropTypes.node,
};

export default MediaObject;
