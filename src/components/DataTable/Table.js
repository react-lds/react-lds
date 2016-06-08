import React from 'react';
import { prefixable, flavorable, variationable } from '../../decorators';

const Table = (props) => {
  const { prefix, children } = props;

  return (
    <table className={prefix(['table'], props)}>
      {children}
    </table>
  );
};

Table.flavors = [
  'bordered',
  'striped',
  'fixed-layout',
];

Table.variations = [
  'no-row-hover',
  'max-medium-table--stacked',
  'max-medium-table--stacked-horizontal',
];

Table.propTypes = {
  prefix: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default prefixable(
  variationable(
    flavorable(Table, 'table')
  )
);
