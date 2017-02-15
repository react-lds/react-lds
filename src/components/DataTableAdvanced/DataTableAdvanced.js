import React from 'react';
import get from 'lodash.get';
import without from 'lodash.without';

import { flavorable, variationable } from '../../decorators';
import { prefixClasses } from '../../utils';
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


  componentWillMount() {
    this.cssPrefix = get(this.context, 'cssPrefix');
  }


  setSorting(newSortBy = '') {
    const { sortBy, sortDirection } = this.state;
    let newSortDirection = 'asc';

    if (sortBy === newSortBy) {
      newSortDirection = (sortDirection === 'asc') ? 'desc' : 'asc';
    }

    this.setState({
      sortBy: newSortBy,
      sortDirection: newSortDirection,
    });

    this.props.onSorting(newSortBy, newSortDirection);
  }


  cx(classes = [], passThrough = '') {
    return prefixClasses(this.cssPrefix, classes, passThrough);
  }


  // Loops over the `DataTableColumn` children and extracts their props as
  // config objects into `this.columnsConf`.
  //
  initcolumnsConf() {
    this.columnsConf = [].concat(this.props.children)
      .filter(child => get(child, 'type') === DataTableColumn)
      .map(child => child.props);
  }


  toggleAllRows() {
    this.setState({
      selectedRows: (this.state.selectedRows.length === this.props.data.length)
        ? []
        : this.props.data.map(d => d.id),
    });
  }


  toggleRow(rowId = '') {
    this.setState({
      selectedRows: this.state.selectedRows.includes(rowId)
        ? without(this.state.selectedRows, rowId)
        : [...this.state.selectedRows, rowId],
    });
  }


  renderHeadCheckboxColumn() {
    if (!this.props.hasSelectableRows) {
      return null;
    }

    const checkboxId = 'checkbox-1234';

    return (
      <th
        className={this.cx('text-align--right')}
        scope="col"
        style={{ width: '3.25rem' }}
      >
        <div className={this.cx(['th__action', 'th__action--form'])}>
          <span className={this.cx('checkbox')}>
            <input
              id={checkboxId}
              name="options"
              onChange={() => this.toggleAllRows()}
              type="checkbox"
            />
            <label className={this.cx('checkbox__label')} htmlFor={checkboxId}>
              <span className={this.cx('checkbox--faux')} />
              <span className={this.cx(['form-element__label', 'assistive-text'])}>
                Select All
              </span>
            </label>
          </span>
        </div>
      </th>
    );
  }


  renderHeadColumn(conf = {}) {
    const { sortBy, sortDirection } = this.state;
    const xlinkHref = (sortBy === conf.dataKey && sortDirection === 'desc')
      ? '/assets/icons/utility-sprite/svg/symbols.svg#arrowup'
      : '/assets/icons/utility-sprite/svg/symbols.svg#arrowdown';

    const cxTh = this.cx([
      'text-title--caps',
      {
        'is-resizable': conf.isResizable,
        'is-sortable': conf.isSortable,
      },
    ]);

    return (
      <th
        className={cxTh}
        key={conf.dataKey}
        scope="col"
      >
        { !conf.isSortable &&
          <div className={this.cx('truncate')} title={conf.title}>
            {conf.title}
          </div>
        }

        { conf.isSortable &&
          <a
            onClick={() => this.setSorting(conf.dataKey)}
            className={this.cx(['th__action', 'text-link--reset'])}
            tabIndex="0"
          >
            <span className={this.cx('assistive-text')}>Sort </span>
            <span className={this.cx('truncate')} title={conf.title}>
              {conf.title}
            </span>
            <div className={this.cx('icon_container')}>
              <svg
                aria-hidden="true"
                className={this.cx(['icon', 'icon--x-small', 'icon-text-default', 'is-sortable__icon'])}
              >
                <use xlinkHref={xlinkHref} />
              </svg>
            </div>
            <span
              className={this.cx('assistive-text')}
              aria-live="assertive"
              aria-atomic="true"
            />
          </a>
        }

        { conf.isResizable &&
          <div className={this.cx('resizable')}>
            <label htmlFor="cell-resize-handle-567" className={this.cx('assistive-text')}>
              {conf.title} column width
            </label>
            <input
              className={this.cx(['resizable__input', 'assistive-text'])}
              id="cell-resize-handle-567"
              max="1000"
              min="20"
              tabIndex="0"
              type="range"
            />
            <span className={this.cx('resizable__handle')}>
              <span className={this.cx('resizable__divider')} />
            </span>
          </div>
        }
      </th>
    );
  }


  renderHead() {
    return (
      <thead>
        <tr className={this.cx('line-height--reset')}>
          {this.renderHeadCheckboxColumn()}
          {this.columnsConf.map(conf => this.renderHeadColumn(conf))}
        </tr>
      </thead>
    );
  }


  renderRowCheckboxColumn(dataObj = {}) {
    if (!this.props.hasSelectableRows) {
      return null;
    }

    const checkboxId = `checkbox-${dataObj.id}`;
    const isRowSelected = this.state.selectedRows.includes(dataObj.id);

    return (
      <td
        className={this.cx('text-align--right')}
        role="gridcell"
        style={{ width: '3.25rem' }}
      >
        <span className={this.cx('checkbox')}>
          <input
            checked={isRowSelected}
            id={checkboxId}
            name="options"
            onChange={() => this.toggleRow(dataObj.id)}
            type="checkbox"
          />
          <label className={this.cx('checkbox__label')} htmlFor={checkboxId}>
            <span className={this.cx('checkbox--faux')} />
            <span className="slds-form-element__label slds-assistive-text">
              Select item {dataObj.id}
            </span>
          </label>
        </span>
      </td>
    );
  }


  renderDataCell(key = '', val = '', conf = {}) {
    return (
      <td role="gridcell" key={key}>
        { conf.renderer &&
          conf.renderer(key, val)
        }

        { !conf.renderer &&
          <div className={this.cx('truncate')} title={val}>
            {val}
          </div>
        }
      </td>
    );
  }


  renderBody() {
    const rows = this.props.data.map((dataObj) => {
      const columns = this.columnsConf.map(conf => (
        this.renderDataCell(conf.dataKey, dataObj[conf.dataKey], conf)
      ));

      return (
        <tr className={this.cx('hint-parent')} key={dataObj.id}>
          {this.renderRowCheckboxColumn(dataObj)}
          {columns}
        </tr>
      );
    });

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }


  render() {
    const {
      data,
      className,
      hasSelectableRows,
      onSorting,
      height,
      isLoading,
      selectedRows,
      totalPages,
      currentPage,
      rowsPerPage,
      ...rest,
    } = this.props;

    const cxTable = this.cx('table', className);

    return (
      <table {...rest} className={cxTable}>
        {this.renderHead()}
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
  'no-row-hover',
  'max-medium-table--stacked',
  'max-medium-table--stacked-horizontal',
];

DataTableAdvanced.contextTypes = {
  cssPrefix: React.PropTypes.string,
};

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
   * Callback, triggered by clicks on sortable column headers.  Will receive
   * two arguments: a string denoting which data key to sort by and a string
   * specifying the sort order ('asc' or 'desc').
   */
  onSorting: React.PropTypes.func.isRequired,
};


export default variationable(
  flavorable(DataTableAdvanced, 'table')
);
