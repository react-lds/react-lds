import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Row = (props) => {
  const {
    children, className, head, variation, ...rest
  } = props;

  const variationClasses = Array.isArray(variation) ? variation.map(f => `slds-${f}`) : `slds-${variation}`;

  const sldsClasses = [
    variationClasses,
    className
  ];

  return (<tr {...rest} className={cx(sldsClasses)}>{children}</tr>);
};

Row.defaultProps = {
  children: null,
  className: null,
  head: false,
  variation: [],
};

Row.propTypes = {
  /**
   * row content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
  /**
   * marks a header row
   */
  head: PropTypes.bool,
  /**
   * variation: string or array of strings. Variations: is-selected, hint-parent
   */
  variation: PropTypes.oneOfType([PropTypes.oneOf([
    'is-selected',
    'hint-parent',
  ]), PropTypes.arrayOf(PropTypes.oneOf([
    'is-selected',
    'hint-parent',
  ]))]),
};

export default Row;
