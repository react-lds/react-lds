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
    verticalAlign,
    wrap,
    ...rest
  } = props;

  const baseClass = 'slds-grid';

  const sldsClasses = [
    baseClass,
    { [`${baseClass}_align-${align}`]: !!align },
    { [`${baseClass}_vertical-align-${verticalAlign}`]: !!verticalAlign },
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
   * Flavors: frame, vertical, reverse,
   * vertical-reverse, align-center, align-spread, align-space, align-end,
   * vertical-align-center, certical-align-end, vertical-stretch, pull-padded,
   * pull-padded-medium, pull-padded-large,
   */
  flavor: decoratorProp([
    'frame',
    'vertical',
    'reverse',
    'vertical-reverse',
    'vertical-stretch',
    'pull-padded',
    'pull-padded-medium',
    'pull-padded-large',
  ]),
  /*
   * wrap variation
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
   */
  wrap: PropTypes.bool,
};

export default Grid;
