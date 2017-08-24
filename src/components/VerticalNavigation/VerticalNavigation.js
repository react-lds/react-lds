import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { flavorable } from '../../decorators';

export const VerticalNavigation = (props) => {
  const {
    children,
    className,
    prependElement,
    ...rest,
  } = props;

  const sldsClasses = ['slds-nav-vertical', className];

  return (
    <nav {...rest} className={cx(sldsClasses)}>
      {prependElement}
      {children}
    </nav>
  );
};

VerticalNavigation.flavors = [
  'compact',
  'shade',
];

VerticalNavigation.defaultProps = {
  className: null,
  prependElement: null,
};

VerticalNavigation.propTypes = {
  /**
   * One or more VerticalNavigationSection or VerticalNavigationOverflow elements
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname to be applied to the parent
   */
  className: PropTypes.string,
  /**
   * Element that will be rendered above the navigation
   */
  prependElement: PropTypes.element,
};

export default flavorable(VerticalNavigation, 'nav-vertical');
