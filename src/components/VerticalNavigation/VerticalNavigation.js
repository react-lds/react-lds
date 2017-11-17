import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const VerticalNavigation = (props) => {
  const {
    children,
    className,
    flavor,
    prependElement,
    ...rest
  } = props;

  const flavorClasses =
    Array.isArray(flavor) ? flavor.map(f => `slds-nav-vertical_${f}`) : `slds-nav-vertical_${flavor}`;

  const sldsClasses = ['slds-nav-vertical', className, flavorClasses];

  return (
    <nav {...rest} className={cx(sldsClasses)}>
      {prependElement}
      {children}
    </nav>
  );
};

VerticalNavigation.defaultProps = {
  className: null,
  flavor: [],
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
   * flavor
   */
  flavor: PropTypes.oneOfType([PropTypes.oneOf([
    'compact',
    'shade',
  ]), PropTypes.arrayOf(PropTypes.oneOf([
    'compact',
    'shade',
  ]))]),
  /**
   * Element that will be rendered above the navigation
   */
  prependElement: PropTypes.element,
};

export default VerticalNavigation;
