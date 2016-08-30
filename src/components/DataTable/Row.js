import React from 'react';
import { prefixClasses } from '../../utils';
import { variationable } from '../../decorators';

export const Row = (props, { cssPrefix }) => {
  const { children, className, head, ...rest } = props;
  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);

  const sldsClasses = head ? ['text-heading--label'] : [];

  return (<tr {...rest} className={prefix(sldsClasses, className)}>{children}</tr>);
};

Row.variations = [
  'is-selected',
  'hint-parent',
];

Row.contextTypes = { cssPrefix: React.PropTypes.string };

Row.propTypes = {
  /**
   * row content
   */
  children: React.PropTypes.node,
  /**
   * class name
   */
  className: React.PropTypes.string,
  /**
   * marks a header row
   */
  head: React.PropTypes.bool,
};

export default variationable(Row);
