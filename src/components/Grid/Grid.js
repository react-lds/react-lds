import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable, variationable } from '../../decorators';

export const Grid = (props) => {
  const { children, className, ...rest } = props;

  const sldsClasses = [
    'slds-grid',
    className,
  ];

  return (<div {...rest} className={cx(sldsClasses)}>{children}</div>);
};

Grid.flavors = [
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
];

Grid.variations = [
  { wrap: ['small', 'medium', 'large'] },
  { nowrap: ['small', 'medium', 'large'] },
];

Grid.defaultProps = {
  children: null,
  className: null,
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
};

export default variationable(
  flavorable(Grid, 'grid')
);
