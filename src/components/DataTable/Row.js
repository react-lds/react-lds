import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { variationable } from '../../decorators';

export const Row = (props) => {
  const { children, className, head, ...rest } = props;

  const sldsClasses = [
    { 'slds-text-title--caps': !!head },
    className
  ];

  return (<tr {...rest} className={cx(sldsClasses)}>{children}</tr>);
};

Row.variations = [
  'is-selected',
  'hint-parent',
];

Row.defaultProps = {
  children: null,
  className: null,
  head: false,
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
};

export default variationable(Row);
