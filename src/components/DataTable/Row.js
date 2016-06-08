import React from 'react';
import { prefixable, variationable } from '../../decorators';

const Row = (props) => {
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
  prefix: React.PropTypes.func,
  children: React.PropTypes.node,
  head: React.PropTypes.bool,
};

export default prefixable(
  variationable(Row)
);
