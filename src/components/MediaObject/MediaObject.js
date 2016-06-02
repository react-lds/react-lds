import React from 'react';
import classNames from 'classnames';
import { prefix, getClassesWithFlavors, CustomPropTypes } from '../../util';

/**
 * Renders a figure with an optional className
 */
const renderFigure = (figure, className) => {
  if (!figure) {
    return null;
  }
  const classes = classNames('media__figure', className);

  return (
    <div className={prefix(classes)}>
      {figure}
    </div>
  );
};

/**
 * Renders a figure with an optional className
 */
const Component = (props) => {
  const { flavor, figureLeft, figureRight, children } = props;
  const baseClass = 'media';
  const classes = getClassesWithFlavors(flavor, baseClass);

  return (
    <div className={prefix(classes)}>
      {renderFigure(figureLeft)}
      <div className={prefix('media__body')}>{children}</div>
      {renderFigure(figureRight, 'media__figure--reverse')}
    </div>
  );
};

Component.propTypes = {
  children: React.PropTypes.node,
  figureLeft: React.PropTypes.node,
  figureRight: React.PropTypes.node,
  flavor: CustomPropTypes.flavor(
    'center', 'responsive'
  ),
};

export default Component;
