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
   * row content
   */
  children: React.PropTypes.node,
  /**
   * marks a header row
   */
  head: React.PropTypes.bool,
  /**
   * prefix function from prefixable HOC
   */
  prefix: React.PropTypes.func.isRequired,
};

export default prefixable(
  variationable(Row)
);
