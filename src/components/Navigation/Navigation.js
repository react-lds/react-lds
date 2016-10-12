import React from 'react';

import { Grid } from 'react-lds';
import { flavorable } from '../../decorators';

export const Navigation = ({ children, className }) =>
  <Grid vertical className={className}>
    {children}
  </Grid>;

Navigation.flavors = [
  'vertical',
  'vertical-inverse',
];

Navigation.propTypes = {
  /**
   * NavigationHeadline or NavigationList components
   */
  children: React.PropTypes.node.isRequired,
  /**
   * className
   */
  className: React.PropTypes.string,
};

export default flavorable(Navigation, 'navigation-list');
