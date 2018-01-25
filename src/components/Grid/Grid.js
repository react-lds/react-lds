import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { applyDecorators, decoratorProp } from '../../utils';

const Grid = (props) => {
  const {
    align,
    children,
    className,
    flavor,
    pullPadding,
    verticalAlign,
    wrap,
    ...rest
  } = props;

  const baseClass = 'slds-grid';

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_align-${align}`]: !!align },
    { [`${baseClass}_vertical-align-${verticalAlign}`]: !!verticalAlign },
    { [`${baseClass}_pull-padded-${pullPadding}`]: !!pullPadding },
    applyDecorators(flavor, 'grid'),
    { 'slds-wrap': !!wrap },
    className,
  ];

  return (<div {...rest} className={cx(sldsClasses)}>{children}</div>);
};

Grid.defaultProps = {
  align: null,
  children: null,
  className: null,
  flavor: [],
  pullPadding: null,
  verticalAlign: null,
  wrap: false,
};

Grid.propTypes = {
  /**
   * grid content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * flavor: array of flavors, you can also provide a single flavor string.
   * Flavors: frame, vertical, reverse, vertical-reverse
   */
  flavor: decoratorProp([
    'frame',
    'vertical',
    'reverse',
    'vertical-reverse',
    'vertical-stretch',
  ]),
  /**
   * Controls how columns are aligned horizontally.
   * Can either either: center, end, space, spread
   */
  align: PropTypes.oneOf(['center', 'end', 'space', 'spread']),
  /**
   * Controls how columns are aligned vertically.
   * Can either either: center, end, space
   */
  verticalAlign: PropTypes.oneOf(['center', 'end', 'start']),
  /**
   * Normalizes the padding when nesting a grid in a region with .slds-p-horizontal_${size}
   * Note: Not needed when using gutters prop
   */
  pullPadding: PropTypes.oneOf(gutterSizes),
  /**
   * Allows columns to wrap when they exceed 100% of their parent’s width
   * Default Behavior is: Keeps columns on one line.
   */
  wrap: PropTypes.bool,
};

export default Grid;
