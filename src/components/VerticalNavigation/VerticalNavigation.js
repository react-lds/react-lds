import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { applyDecorators, decoratorProp } from '../../utils';

const VerticalNavigation = (props) => {
  const {
    children,
    className,
    flavor,
    prependElement,
    ...rest
  } = props;

  const sldsClasses = ['slds-nav-vertical', className, applyDecorators(flavor, 'nav-vertical')];

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
   * flavor: array of flavors, you can also provide a single flavor as a string.
   * Flavors: compact, shade
   */
  flavor: decoratorProp([
    'compact',
    'shade',
  ]),
  /**
   * Element that will be rendered above the navigation
   */
  prependElement: PropTypes.element,
};

export default VerticalNavigation;
