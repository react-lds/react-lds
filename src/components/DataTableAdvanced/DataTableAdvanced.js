import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

import { uniqueId } from '../../';
import { Table } from '../DataTable';

import defaultRowRenderer from './defaultRowRenderer';

export class DataTableAdvanced extends Component {
  state = {
    id: uniqueId('data-table-advanced-'),
    columns: [],
    data: this.props.data,
    selection: [],
    sortBy: '',
    sortDirection: 'asc',
  }

  componentWillMount() {
    this.updateColumns();
  }

  componentWillReceiveProps(nextProps) {
    const { children, data, selection } = this.props;

    if (nextProps.children !== children) {
      this.updateColumns();
    }

    if (nextProps.data !== data) {
      this.setState({ data: nextProps.data });
    }

    if (nextProps.selection !== selection) {
      this.setState({ selection: nextProps.selection });
    }
  }

  onSelect = (rowIndex) => {
    const { onSelect } = this.props;
    const { selection } = this.state;

    const nextSelection = [...selection];

    if (nextSelection.includes(rowIndex)) {
      nextSelection.splice(nextSelection.indexOf(rowIndex), 1);
    } else {
      nextSelection.push(rowIndex);
    }

    if (onSelect) {
      onSelect(nextSelection, rowIndex);
    }

    this.setState({ selection: nextSelection });
  }

  onSelectAll = () => {
    const { onSelect } = this.props;
    const { data } = this.state;
    const allSelected = this.areAllRowsSelected();
    const nextSelection = allSelected
      ? []
      : data.map((row, i) => i);

    if (onSelect) {
      onSelect(nextSelection);
    }

    this.setState({
      allSelected: !allSelected,
      selection: nextSelection,
    });
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
        ? children.map(child => child.props)
        : []
    });
  }

  areAllRowsSelected() {
    return this.state.selection.length === this.state.data.length;
  }

  renderRow(rowData, rowIndex) {
    const { columns, id, selection } = this.state;
    const { rowRenderer } = this.props;

    const cells = columns.map(({ cellRenderer, dataKey }) =>
      cellRenderer({
        cellData: rowData[dataKey],
        dataKey,
        rowData,
        rowIndex,
        selected: selection.includes(rowIndex),
        onSelect: this.onSelect,
        tableId: id,
        defaultProps: {
          key: `${rowIndex}-${dataKey}`,
          role: 'gridcell',
        },
      })
    );

    return rowRenderer({
      cells,
      onSelect: this.onSelect,
      rowData,
      rowIndex,
      tableId: id,
    });
  }

  renderHead() {
    const { columns, id, sortBy, sortDirection } = this.state;

    return (
      <thead>
        <tr>
          {columns.map(({ headRenderer, ...restProps }) =>
            headRenderer({
              allSelected: this.areAllRowsSelected(),
              onSelectAll: this.onSelectAll,
              onSort: this.onSort,
              sortBy,
              sortDirection,
              tableId: id,
              ...restProps
            })
          )}
        </tr>
      </thead>
    );
  }

  renderBody() {
    const { data } = this.state;

    return (
      <tbody>
        {data.map((row, i) => this.renderRow(row, i))}
      </tbody>
    );
  }

  render() {
    const rest = omit(this.props, [
      'children',
      'currentPage',
      'data',
      'onSelect',
      'onSort',
      'rowsPerPage',
      'rowRenderer',
      'selection',
      'totalPages',
    ]);

    return (
      <Table {...rest}>
        {this.renderHead()}
        {this.renderBody()}
      </Table>
    );
  }
}

DataTableAdvanced.defaultProps = {
  ...Table.defaultProps,

  totalPages: null,
  currentPage: null,
  rowsPerPage: null,
  onSort: null,
  onSelect: null,
  rowRenderer: defaultRowRenderer,
  selection: [],
};

DataTableAdvanced.propTypes = {
  ...Table.propTypes,

  /**
   * Table content, an array of objects
   */
  data: PropTypes.arrayOf(PropTypes.any).isRequired,

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
   * Callback, triggered by clicks on sortable column headers.  Receives an object
   * which contains the `dataKey` of the column to sort by and the `sortDirection`
   * (`asc` or `desc`). If omitted, the rows will be sorted by a `String.localeCompare`.
   */
  onSort: PropTypes.func,

  /**
   * Callback, triggered whenever one or more rows have been selected. Returns
   * an array containing all selected row IDs.
   */
  onSelect: PropTypes.func,

  /**
   * Callback used for rendering rows. See `defaultRowRenderer` for a sample.
   */
  rowRenderer: PropTypes.func,

  /**
   * Array of indexes of selected rows.
   */
  selection: PropTypes.arrayOf(PropTypes.string),
};

export default DataTableAdvanced;
