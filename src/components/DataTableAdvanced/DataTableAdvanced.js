import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import without from 'lodash.without';

import DataRow from './DataRow';
import TableHead from './TableHead';
import DataTableColumn from './DataTableColumn';

export class DataTableAdvanced extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // When `props.isResizable` is true, the field name and sort order is
      // stored in `state.sortBy`.
      sortBy: '',

      // Used when `props.isResizable` is true.
      sortDirection: 'asc',

      // A list containing the IDs of all currently selected rows.
      selectedRows: [],
    };

    this.initcolumnsConf();
  }

  setSorting(newSortBy = '') {
    const { sortBy, sortDirection } = this.state;
    let newSortDirection = 'desc';

    if (sortBy === newSortBy) {
      newSortDirection = (sortDirection === 'asc') ? 'desc' : 'asc';
    }

    this.setState({
      sortBy: newSortBy,
      sortDirection: newSortDirection,
    });

    this.props.onSorting(newSortBy, newSortDirection);
  }


  // Loops over the `DataTableColumn` children and extracts their props as
  // config objects into `this.columnsConf`.
  //
  initcolumnsConf() {
    this.columnsConf = [].concat(this.props.children)
      .filter(child => child && child.type === DataTableColumn)
      .map(child => child.props);
  }


  toggleRow(rowId = '') {
    const selectedRows = this.state.selectedRows.includes(rowId)
      ? without(this.state.selectedRows, rowId)
      : [...this.state.selectedRows, rowId];

    this.setState({ selectedRows });
    this.props.onSelection(selectedRows);
  }


  toggleAllRows() {
    const selectedRows = this.areAllRowsSelected()
      ? []
      : this.props.data.map(d => d.id);

    this.setState({ selectedRows });
    this.props.onSelection(selectedRows);
  }


  areAllRowsSelected() {
    return this.state.selectedRows.length === this.props.data.length;
  }


  renderBody() {
    const rows = this.props.data.map((rowData) => {
      const { isActionable, hasSelectableRows } = this.props;
      const { id } = rowData;

      return (
        <DataRow
          columnsConf={this.columnsConf}
          isActionable={isActionable}
          isSelectable={hasSelectableRows}
          isSelected={this.state.selectedRows.includes(id)}
          key={id}
          onAction={rowId => this.props.onAction(rowId)}
          onToggle={rowId => this.toggleRow(rowId)}
          rowData={rowData}
        />
      );
    });

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }


  render() {
    const { className, flavor, variation } = this.props;
    const rest = omit(this.props, [
      'className',
      'currentPage',
      'data',
      'flavor',
      'hasSelectableRows',
      'isActionable',
      'height',
      'isLoading',
      'onAction',
      'onSelection',
      'onSorting',
      'rowsPerPage',
      'selectedRows',
      'totalPages',
      'variation',
    ]);

    const flavorClasses = Array.isArray(flavor) ? flavor.map(f => `slds-table_${f}`) : `slds-table_${flavor}`;
    const variationClasses = Array.isArray(variation) ? variation.map(f => `slds-${f}`) : `slds-${variation}`;
    const classNames = cx(
      'slds-table',
      className,
      flavorClasses,
      variationClasses,
    );

    return (
      <table {...rest} className={classNames}>
        <TableHead
          columnsConf={this.columnsConf}
          isActionable={this.props.isActionable}
          isAllSelected={this.areAllRowsSelected()}
          isSelectable={this.props.hasSelectableRows}
          onChangeSorting={sortBy => this.setSorting(sortBy)}
          onToggle={() => this.toggleAllRows()}
          sortBy={this.state.sortBy}
          sortDirection={this.state.sortDirection}
        />

        {this.renderBody()}
      </table>
    );
  }
}

DataTableAdvanced.defaultProps = {
  children: null,
  className: null,
  height: null,
  hasSelectableRows: false,
  isActionable: false,
  isLoading: false,
  selectedRows: null,
  totalPages: null,
  currentPage: null,
  rowsPerPage: null,
  onAction: null,
  variation: [],
  flavor: [],
};

const flavors = [
  'bordered',
  'col-bordered',
  'fixed-layout',
  'striped',
];

const variations = [
  'max-medium-table--stacked-horizontal',
  'max-medium-table--stacked',
  'no-row-hover',
];

DataTableAdvanced.propTypes = {
  /**
   * Table rows
   */
  children: PropTypes.node,

  /**
   * Table content, an array of objects
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,

  /**
   * class name
   */
  className: PropTypes.string,

  /**
   * Height of table. Optional.
   */
  height: PropTypes.number,

  /**
   * Can rows be selected, i.e. should there be a leading checkbox in every row?
   * Optional, defaults to `false`.
   */
  hasSelectableRows: PropTypes.bool,

  /**
   * Does each row have a trailing "Show more" element?
   */
  isActionable: PropTypes.bool,

  /**
   * Set to `true` while the upstream component fetches new data. Optional,
   * defaults to `false`.
   */
  isLoading: PropTypes.bool,

  /**
   * Array of preselected row IDs. Only used when `props.hasSelectableRows` is
   * active.
   */
  selectedRows: PropTypes.arrayOf(PropTypes.string),

  /**
   * Number of available table pages. Optional.
   */
  totalPages: PropTypes.number,

  /**
   * Number of currently visible table page. Optional.
   */
  currentPage: PropTypes.number,

  /**
   * Number of rows per table page. Optional.
   */
  rowsPerPage: PropTypes.number,

  /**
   * Callback triggered by clicking on the trailing "Show more" element in a
   * row. Will receive the row ID as argument.
   */
  onAction: PropTypes.func,

  /**
   * Callback, triggered by clicks on sortable column headers.  Will receive
   * two arguments: a string denoting which data key to sort by and a string
   * specifying the sort order ('asc' or 'desc').
   */
  onSorting: PropTypes.func.isRequired,

  /**
   * Callback, triggered whenever one or more rows have been selected. Returns
   * an array containing all selected row IDs.
   */
  onSelection: PropTypes.func.isRequired,
  /**
   * variation: string or array of strings. Variations: no-row-hover, max-medium-table_stacked,
   max-medium-table_stacked-horizontal
   */
  variation: PropTypes.oneOfType([
    PropTypes.oneOf(variations),
    PropTypes.arrayOf(PropTypes.oneOf(variations))
  ]),
  /**
   * flavor: string or array of strings. Flavors: bordered, col-bordered, striped, fixed-layout
   */
  flavor: PropTypes.oneOfType([
    PropTypes.oneOf(flavors),
    PropTypes.arrayOf(PropTypes.oneOf(flavors)),
  ]),
};

export default DataTableAdvanced;
