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
    wrap,
    ...rest
  } = props;

  const baseClass = 'slds-grid';

  const sldsClasses = [
    { [`${baseClass}_align-${align}`]: !!align },
    applyDecorators(flavor, 'grid'),
    { 'slds-wrap': !!wrap }
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
  wrap: null
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
    'vertical-align-center',
    'certical-align-end',
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
   */
  wrap: PropTypes.bool,
};

export default Grid;
