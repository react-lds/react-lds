import React from 'react';
import cx from 'classnames';
import get from 'lodash.get';
import omit from 'lodash.omit';
import without from 'lodash.without';

import { flavorable, variationable } from '../../decorators';
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
      .filter(child => get(child, 'type') === DataTableColumn)
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
    const rest = omit(this.props, [
      'className',
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
      <table {...rest} className={cx('slds-table', this.props.className)}>
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


DataTableAdvanced.flavors = [
  'bordered',
  'col-bordered',
  'fixed-layout',
  'striped',
];

DataTableAdvanced.variations = [
  'max-medium-table--stacked-horizontal',
  'max-medium-table--stacked',
  'no-row-hover',
];

DataTableAdvanced.propTypes = {
  children: React.PropTypes.node,

  /**
   * Table content, an array of objects
   */
  data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,

  /**
   * class name
   */
  className: React.PropTypes.string,

  /**
   * Height of table. Optional.
   */
  height: React.PropTypes.number,

  /**
   * Can rows be selected, i.e. should there be a leading checkbox in every row?
   * Optional, defaults to `false`.
   */
  hasSelectableRows: React.PropTypes.bool,

  /**
   * Does each row have a trailing "Show more" element?
   */
  isActionable: React.PropTypes.bool,

  /**
   * Set to `true` while the upstream component fetches new data. Optional,
   * defaults to `false`.
   */
  isLoading: React.PropTypes.bool,

  /**
   * Array of preselected row IDs. Only used when `props.hasSelectableRows` is
   * active.
   */
  selectedRows: React.PropTypes.arrayOf(React.PropTypes.string),

  /**
   * Number of available table pages. Optional.
   */
  totalPages: React.PropTypes.number,

  /**
   * Number of currently visible table page. Optional.
   */
  currentPage: React.PropTypes.number,

  /**
   * Number of rows per table page. Optional.
   */
  rowsPerPage: React.PropTypes.number,

  /**
   * Callback triggered by clicking on the trailing "Show more" element in a
   * row. Will receive the row ID as argument.
   */
  onAction: React.PropTypes.func,

  /**
   * Callback, triggered by clicks on sortable column headers.  Will receive
   * two arguments: a string denoting which data key to sort by and a string
   * specifying the sort order ('asc' or 'desc').
   */
  onSorting: React.PropTypes.func.isRequired,

  /**
   * Callback, triggered whenever one or more rows have been selected. Returns
   * an array containing all selected row IDs.
   */
  onSelection: React.PropTypes.func.isRequired,
};


export default variationable(
  flavorable(DataTableAdvanced, 'table')
);
