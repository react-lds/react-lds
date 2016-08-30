import React from 'react';
import { flavorable, variationable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Grid = (props, { cssPrefix }) => {
  const { children, className, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  return (<div {...rest} className={prefix('grid', className)}>{children}</div>);
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

Grid.contextTypes = { cssPrefix: React.PropTypes.string };

Grid.propTypes = {
  /**
   * grid content
   */
  children: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
};

export default variationable(
  flavorable(Grid, 'grid')
);
