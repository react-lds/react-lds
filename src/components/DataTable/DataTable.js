import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';

import { Table, uniqueId } from '../../';

import defaultRowRenderer from './defaultRowRenderer';

export class DataTable extends Component {
  state = {
    id: uniqueId('data-table-advanced-'),
    columns: [],
    data: this.props.data,
    sortBy: '',
    sortDirection: 'asc',
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

  onSelect = (rowId) => {
    const { onSelect, selection } = this.props;

    if (onSelect) {
      const nextSelection = [...selection];

      if (nextSelection.includes(rowId)) {
        nextSelection.splice(nextSelection.indexOf(rowId), 1);
      } else {
        nextSelection.push(rowId);
      }

      onSelect(nextSelection, rowId);
    }
  }

  onSelectAll = () => {
    const { onSelect, getRowId } = this.props;
    const { data } = this.state;
    const allSelected = this.areAllRowsSelected();
    const nextSelection = allSelected
      ? []
      : data.map((rowData, rowIndex) => getRowId({ rowData, rowIndex }));

    if (onSelect) {
      onSelect(nextSelection);
    }

    this.setState({ allSelected: !allSelected });
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
    const { getRowId, selection } = this.props;
    const { data } = this.state;
    const allSelectedReducer = (acc, rowData, rowIndex) => (
      acc && selection.includes(getRowId({ rowIndex, rowData }))
    );

    return data.reduce(allSelectedReducer, true);
  }

  renderRow(rowData, rowIndex) {
    const { columns, id } = this.state;
    const { getRowId, rowRenderer, selection } = this.props;
    const rowId = getRowId({ rowIndex, rowData });

    const cells = columns.map(({ cellRenderer, dataKey }) =>
      cellRenderer({
        cellData: rowData[dataKey],
        dataKey,
        rowData,
        rowId,
        rowIndex,
        selected: selection.includes(rowId),
        onSelect: this.onSelect,
        tableId: id,
        defaultProps: {
          key: `${rowId}-${dataKey}`,
          role: 'gridcell',
        },
      })
    );

    return rowRenderer({
      cells,
      onSelect: this.onSelect,
      rowData,
      rowId,
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
    const { columns, data, id } = this.state;

    if (!Array.isArray(data) || data.length === 0) {
      return this.props.noRowsRenderer({ columns, tableId: id });
    }

    return (
      <tbody>
        {data.map((row, i) => this.renderRow(row, i))}
      </tbody>
    );
  }

  render() {
    const rest = omit(this.props, [
      'children',
      'data',
      'getRowId',
      'noRowsRenderer',
      'onSelect',
      'onSort',
      'rowRenderer',
      'selection',
    ]);

    return (
      <Table {...rest}>
        {this.renderHead()}
        {this.renderBody()}
      </Table>
    );
  }
}

DataTable.defaultProps = {
  ...Table.defaultProps,

  getRowId: ({ rowIndex }) => rowIndex,
  onSort: null,
  onSelect: null,
  rowRenderer: defaultRowRenderer,
  noRowsRenderer: () => {},
  selection: [],
};

DataTable.propTypes = {
  ...Table.propTypes,

  /**
   * Table content, an array of objects
   */
  data: PropTypes.arrayOf(PropTypes.any).isRequired,

  /**
   * Getter which returns a unique id for a row. The default implementation will
   * just use the row index. Overwrite this with a better id if you plan on
   * using a variable `data` array.
   */
  getRowId: PropTypes.func,

  /**
   * Render callback which is called if the data array is empty. Should return a
   * table body.
   */
  noRowsRenderer: PropTypes.func,

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
  selection: PropTypes.array,
};

export default DataTable;
