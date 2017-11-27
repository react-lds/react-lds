import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import without from 'lodash.without';

import { Table } from '../DataTable';

import DataRow from './DataRow';
import TableHead from './TableHead';
import DataTableColumn from './DataTableColumn';

export class DataTableAdvanced extends Component {
  state = {
    columns: [],
    data: this.props.data,
    sortBy: '',
    sortDirection: 'asc',
    selectedRows: [],
  }

  componentWillMount() {
    this.updateColumns();
  }

  componentWillReceiveProps(nextProps) {
    const { children, data } = this.props;

    if (nextProps.children !== children) {
      this.updateColumns();
    }

    if (nextProps.data !== data) {
      this.setState({ data: nextProps.data });
    }
  }

  onSort = (nextSortBy = '') => {
    const { onSort } = this.props;
    const { data, sortBy, sortDirection } = this.state;

    let nextSortDirection = 'asc';

    // Same column as before => toggle sort order
    if (sortBy === nextSortBy) {
      nextSortDirection = (sortDirection === 'asc') ? 'desc' : 'asc';
    }

    const nextState = {
      sortBy: nextSortBy,
      sortDirection: nextSortDirection,
    };

    if (onSort) {
      onSort({ dataKey: nextSortBy, sortDirection: nextSortDirection });
      this.setState(nextState);
    } else {
      this.setState({
        ...nextState,
        data: [...data].sort(
          (a, b) => (
            nextSortDirection === 'asc'
              ? String(a[nextSortBy]).localeCompare(b[nextSortBy])
              : String(b[nextSortBy]).localeCompare(a[nextSortBy])
          )
        ),
      });
    }
  }

  // Loops over the `DataTableColumn` children and extracts their props as
  // config objects into `this.state.columns`.
  updateColumns() {
    const { children } = this.props;

    this.setState({
      columns: children
        ? children
          .filter(child => child && child.type === DataTableColumn)
          .map(child => child.props)
        : []
    });
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
    const { columns, data } = this.state;

    const rows = data.map((rowData, i) => {
      const { isActionable, hasSelectableRows } = this.props;
      const { id } = rowData;

      return (
        <DataRow
          columns={columns}
          isActionable={isActionable}
          isSelectable={hasSelectableRows}
          isSelected={this.state.selectedRows.includes(id)}
          key={id}
          onAction={rowId => this.props.onAction(rowId)}
          onToggle={rowId => this.toggleRow(rowId)}
          rowData={rowData}
          rowIndex={i}
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
    const { columns } = this.state;

    const rest = omit(this.props, [
      'children',
      'currentPage',
      'data',
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
    ]);

    return (
      <Table {...rest}>
        <TableHead
          columns={columns}
          isActionable={this.props.isActionable}
          isAllSelected={this.areAllRowsSelected()}
          isSelectable={this.props.hasSelectableRows}
          onSort={this.onSort}
          onToggle={() => this.toggleAllRows()}
          sortBy={this.state.sortBy}
          sortDirection={this.state.sortDirection}
        />

        {this.renderBody()}
      </Table>
    );
  }
}

DataTableAdvanced.defaultProps = {
  ...Table.defaultProps,

  height: null,
  hasSelectableRows: false,
  isActionable: false,
  isLoading: false,
  selectedRows: null,
  totalPages: null,
  currentPage: null,
  rowsPerPage: null,
  onAction: null,
};

DataTableAdvanced.propTypes = {
  ...Table.propTypes,

  /**
   * Table content, an array of objects
   */
  data: PropTypes.arrayOf(PropTypes.any).isRequired,

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
   * Callback, triggered by clicks on sortable column headers.  Receives an object
   * which contains the `dataKey` of the column to sort by and the `sortDirection`
   * (`asc` or `desc`). If omitted, the rows will be sorted by a `String.localeCompare`.
   */
  onSort: PropTypes.func,

  /**
   * Callback, triggered whenever one or more rows have been selected. Returns
   * an array containing all selected row IDs.
   */
  onSelection: PropTypes.func.isRequired,
};

export default DataTableAdvanced;
