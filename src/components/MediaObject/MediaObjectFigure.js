import React from 'react';
import { getModifier } from './util';

const MediaObjectFigure = ({ children, reverse }) => {
  const baseClass = 'slds-media__figure';
  const classes = [baseClass];

  if (reverse) {
    const modifier = getModifier(baseClass, 'reverse');
    classes.push(modifier);
  }

  return <div className={classes.join(' ')}>{children}</div>;
};

MediaObjectFigure.propTypes = {
  children: React.PropTypes.node,
  reverse: React.PropTypes.bool,
};

export default MediaObjectFigure;
