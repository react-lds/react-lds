import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconSVG } from '../../';

const HeadCell = (props) => {
  const {
    dataKey,
    sortable,
    onSort,
    sortBy,
    sortDirection,
    title,
  } = props;

  const isCurrentSortColumn = sortable && dataKey === sortBy;
  const assistiveText = isCurrentSortColumn
    ? `Sorted ${sortDirection}ending`
    : null;

  const cxTh = cx([
    'slds-text-title--caps',
    {
      'slds-is-sortable': sortable,
      'slds-is-sorted': isCurrentSortColumn,
      [`slds-is-sorted_${sortDirection}`]: isCurrentSortColumn,
    },
  ]);

  return (
    <th
      className={cxTh}
      key={dataKey}
      scope="col"
      aria-sort={isCurrentSortColumn ? `${sortDirection}ending` : null}
    >
      { !sortable &&
        <div className="slds-truncate" title={title}>
          {title}
        </div>
      }

      { sortable &&
        <a
          onClick={() => onSort(dataKey)}
          className="slds-th__action slds-text-link--reset"
          tabIndex="0"
        >
          <span className="slds-assistive-text">Sort </span>
          <span className="slds-truncate" title={title}>
            {title}
          </span>
          <div className="slds-icon_container">
            <IconSVG
              className="slds-is-sortable__icon"
              icon="arrowdown"
              size="x-small"
              sprite="utility"
            />
          </div>
          <span
            className="slds-assistive-text"
            aria-live="assertive"
            aria-atomic="true"
          >
            {assistiveText}
          </span>
        </a>
      }
    </th>
  );
};


HeadCell.variations = [];

HeadCell.defaultProps = {
  sortBy: null,
  sortDirection: null,
  onSort: null,
  isResizable: false,
  sortable: false,
};

HeadCell.propTypes = {
  /**
   * Key name of the data object property being displayed in this here cell
   */
  dataKey: PropTypes.string.isRequired,

  /**
  * Callback triggered by clicking on a cell heading a sortable column.
  * Required when `props.sortable` is `true`.
  */
  onSort: PropTypes.func,

  /**
  * Is this column sortable, i.e. should clicking it change the currently
  * displayed row order below?
  */
  sortable: PropTypes.bool,

  /**
   * The column which is currently used for sorting the table.
   */
  sortBy: PropTypes.string,

  /**
   * The current sort direction, defaults to `asc`.
   */
  sortDirection: PropTypes.oneOf(['asc', 'desc']),

  /**
   * Display name of the cell
   */
  title: PropTypes.string.isRequired,
};


export default HeadCell;
