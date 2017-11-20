import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Table = (props) => {
  const { children, className, flavor, variation, ...rest } = props;

  const flavorClasses = Array.isArray(flavor) ? flavor.map(f => `slds-table_${f}`) : `slds-table_${flavor}`;
  const variationClasses = Array.isArray(variation) ? variation.map(f => `slds-${f}`) : `slds-${variation}`;

  const sldsClasses = [
    'slds-table',
    'slds-table_cell-buffer',
    className,
    flavorClasses,
    variationClasses,
  ];

  return (<table {...rest} className={cx(sldsClasses)}>{children}</table>);
};

Table.defaultProps = {
  children: null,
  className: null,
  variation: [],
  flavor: [],
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
  /**
   * variation: string or array of strings. Variations: no-row-hover, max-medium-table_stacked,
   max-medium-table_stacked-horizontal
   */
  variation: PropTypes.oneOfType([PropTypes.oneOf([
    'no-row-hover',
    'max-medium-table_stacked',
    'max-medium-table_stacked-horizontal',
  ]), PropTypes.arrayOf(PropTypes.oneOf([
    'no-row-hover',
    'max-medium-table_stacked',
    'max-medium-table_stacked-horizontal',
  ]))]),
  /**
   * flavor: string or array of strings. Flavors: bordered, col-bordered, striped, fixed-layout
   */
  flavor: PropTypes.oneOfType([PropTypes.oneOf([
    'bordered',
    'col-bordered',
    'striped',
    'fixed-layout',
  ]), PropTypes.arrayOf(PropTypes.oneOf([
    'bordered',
    'col-bordered',
    'striped',
    'fixed-layout',
  ]))]),
};

export default Table;
