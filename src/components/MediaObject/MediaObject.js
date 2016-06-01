import React from 'react';
import { getModifier } from './util';

const MediaObject = ({ center, responsive, reverse, children }) => {
  const baseClass = 'slds-media';
  const classes = [baseClass];

  if (center) {
    const modifier = getModifier(baseClass, 'center');
    classes.push(modifier);
  }

  if (responsive) {
    const modifier = getModifier(baseClass, 'responsive');
    classes.push(modifier);
  }

  if (reverse) {
    const modifier = getModifier(baseClass, 'reverse');
    classes.push(modifier);
  }

  return <div className={classes.join(' ')}>{children}</div>;
};

MediaObject.propTypes = {
  children: React.PropTypes.node,
  center: React.PropTypes.bool,
  responsive: React.PropTypes.bool,
  reverse: React.PropTypes.bool,
};

export default MediaObject;
