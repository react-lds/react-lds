import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { applyDecorators, decoratorProp } from '../../utils';

const Table = (props) => {
  const { children, className, flavor, variation, ...rest } = props;

  const sldsClasses = [
    'slds-table',
    'slds-table_cell-buffer',
    className,
    applyDecorators(flavor, 'table'),
    applyDecorators(variation),
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
   * variation: array of variations, you can also provide a single variation string.
   * Variations: no-row-hover, max-medium-table_stacked,
   max-medium-table_stacked-horizontal
   */
  variation: decoratorProp([
    'no-row-hover',
    'max-medium-table_stacked',
    'max-medium-table_stacked-horizontal',
  ]),
  /**
   * flavor: array of flavors, you can also provide a single flavor string.
   * Flavors: bordered, col-bordered, striped, fixed-layout
   */
  flavor: decoratorProp([
    'bordered',
    'col-bordered',
    'striped',
    'fixed-layout',
  ]),
};

export default Table;
