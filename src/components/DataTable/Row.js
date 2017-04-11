import React from 'react';
import PropTypes from 'prop-types';

import { variationable } from '../../decorators';
import { prefixClasses } from '../../utils';

export const Row = (props, { cssPrefix }) => {
  const { children, className, head, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = head ? ['text-title--caps'] : [];

  return (<tr {...rest} className={prefix(sldsClasses, className)}>{children}</tr>);
};

Row.variations = [
  'is-selected',
  'hint-parent',
];

Row.contextTypes = { cssPrefix: PropTypes.string };

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
