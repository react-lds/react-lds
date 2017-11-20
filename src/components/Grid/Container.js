import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Container = (props) => {
  const { children, className, flavor, ...rest } = props;
  const flavorClasses = Array.isArray(flavor) ? flavor.map(f => `slds-container_${f}`) : `slds-container_${flavor}`;
  return (<div {...rest} className={cx([className, flavorClasses])}>{children}</div>);
};

Container.defaultProps = {
  children: null,
  className: null,
  flavor: ['left', 'small']
};

Container.propTypes = {
  /**
   * container content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * flavor: string or array of strings. Flavors: small, medium, large, x-large,
   * fluid, left, center, right
   */
  flavor: PropTypes.oneOfType([PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'x-large',
    'fluid',
    'left',
    'center',
    'right',
  ]), PropTypes.arrayOf(PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'x-large',
    'fluid',
    'left',
    'center',
    'right',
  ]))]),
};

export default Container;
