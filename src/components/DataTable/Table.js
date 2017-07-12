import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { flavorable, variationable } from '../../decorators';

export const Table = (props) => {
  const { children, className, ...rest } = props;

  const sldsClasses = [
    'slds-table',
    'slds-table_cell-buffer',
    className,
  ];

  return (<table {...rest} className={cx(sldsClasses)}>{children}</table>);
};

Table.flavors = [
  'bordered',
  'col-bordered',
  'striped',
  'fixed-layout',
];

Table.variations = [
  'no-row-hover',
  'max-medium-table_stacked',
  'max-medium-table_stacked-horizontal',
];

Table.defaultProps = {
  children: null,
  className: null,
};

Table.propTypes = {
  /**
   * table content
   */
  children: PropTypes.node,
  /**
   * class name
   */
  className: PropTypes.string,
};

export default variationable(
  flavorable(Table, 'table')
);
