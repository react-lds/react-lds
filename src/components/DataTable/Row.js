import React from 'react';
import { prefixable, variationable } from '../../decorators';

export const Row = (props) => {
  const { head, prefix, children } = props;
  const sldsClasses = head ? ['text-heading--label'] : [];

  return (
    <tr className={prefix(sldsClasses, props)}>
      {children}
    </tr>
  );
};

Row.variations = [
  'is-selected',
  'hint-parent',
];

Row.propTypes = {
  /**
   * the prefix function from the prefixable HOC
   */
  prefix: React.PropTypes.func,
  /**
   * main content
   */
  children: React.PropTypes.node,
  /**
   * adds classes for header rows
   */
  head: React.PropTypes.bool,
};

export default prefixable(
  variationable(Row)
);
