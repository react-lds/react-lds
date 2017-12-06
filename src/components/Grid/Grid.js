import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { applyDecorators, decoratorProp } from '../../utils';

const Grid = (props) => {
  const { children, className, flavor, wrap, ...rest } = props;

  const sldsClasses = [
    'slds-grid',
    className,
    applyDecorators(flavor, 'grid'),
    { 'slds-wrap': !!wrap }
  ];

  return (<div {...rest} className={cx(sldsClasses)}>{children}</div>);
};

Grid.defaultProps = {
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
    'align-center',
    'align-spread',
    'align-space',
    'align-end',
    'vertical-align-center',
    'certical-align-end',
    'vertical-stretch',
    'pull-padded',
    'pull-padded-medium',
    'pull-padded-large',
  ]),
  /*
   * wrap variation
   */
  wrap: PropTypes.bool,
};

export default Grid;
