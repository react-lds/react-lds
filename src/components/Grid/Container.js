import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { applyDecorators, decoratorProp } from '../../utils';

const Container = (props) => {
  const { children, className, flavor, size, ...rest } = props;
  const sldsClasses = [
    className,
    applyDecorators(flavor, 'container'),
    { [`slds-container_${size}`]: !!size }
  ];
  return (<div {...rest} className={cx(sldsClasses)}>{children}</div>);
};

Container.defaultProps = {
  children: null,
  className: null,
  flavor: [],
  size: null,
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
   * flavor: array of flavors, you can also provide a single flavor as string.
   * Flavors: fluid, left, center, right
   */
  flavor: decoratorProp([
    'fluid',
    'left',
    'center',
    'right',
  ]),
  /*
   * sizes: small, medium, large, x-large
   */
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'x-large'
  ])
};

export default Container;
