import React from 'react';

const MediaObject = ({figure, children}) =>
  <div className="slds-media">
    <div className="slds-media__figure">{figure}</div>
    <div className="slds-media__body">{children}</div>
  </div>

export default MediaObject;
