import React from 'react';
import ProgressIndicator, { propTypes } from './ProgressIndicator';

const VerticalProgressIndicator = props => <ProgressIndicator {...props} isVertical />;

VerticalProgressIndicator.propTypes = propTypes;

export default VerticalProgressIndicator;
