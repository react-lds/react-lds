import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const HeadCell = (props) => {
  const {
    dataKey,
    isResizable,
    isSortable,
    onChangeSorting,
    sortBy,
    sortDirection,
    title,
  } = props;

  const isCurrentSortColumn = isSortable && dataKey === sortBy;
  const isSortAsc = sortDirection === 'asc';
  let assistiveText = null;

  if (isCurrentSortColumn) {
    assistiveText = isSortAsc ? 'Sorted ascending' : 'Sorted descending';
  }

  const cxTh = cx([
    'slds-text-title--caps',
    {
      'is-resizable': isResizable,
      'is-sortable': isSortable,
      'is-sorted': isCurrentSortColumn,
      [`is-sorted--${sortDirection}`]: isCurrentSortColumn,
    },
  ]);
  const resizeHandleId = `cell-resize-handle-${dataKey}`;

  return (
    <th
      className={cxTh}
      key={dataKey}
      scope="col"
      aria-sort={isCurrentSortColumn ? `${sortDirection}ending` : null}
    >
      { !isSortable &&
        <div className="slds-truncate" title={title}>
          {title}
        </div>
      }

      { isSortable &&
        <a
          onClick={() => onChangeSorting(dataKey)}
          className="slds-th__action slds-text-link--reset"
          tabIndex="0"
        >
          <span className="slds-assistive-text">Sort </span>
          <span className="slds-truncate" title={title}>
            {title}
          </span>
          <div className="slds-icon_container">
            <svg
              aria-hidden="true"
              className="slds-icon slds-icon--x-small slds-icon-text-default slds-is-sortable__icon"
            >
              <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown" />
            </svg>
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

      { isResizable &&
        <div className="slds-resizable">
          <label htmlFor={resizeHandleId} className="slds-assistive-text">
            {title} column width
          </label>
          <input
            className="slds-resizable__input slds-assistive-text"
            id={resizeHandleId}
            max="1000"
            min="20"
            tabIndex="0"
            type="range"
          />
          <span className="slds-resizable__handle">
            <span className="slds-resizable__divider" />
          </span>
        </div>
      }
    </th>
  );
};


HeadCell.variations = [];

HeadCell.defaultProps = {
  renderer: null,
  sortBy: null,
  sortDirection: null,
  onChangeSorting: null,
  isResizable: false,
  isSortable: false,
};

HeadCell.propTypes = {
  /**
   * Optional cell renderer function
   */
  renderer: PropTypes.func,

  /**
   * Key name of the data object property being displayed in this here cell
   */
  dataKey: PropTypes.string.isRequired,

  /**
   * Display name of the cell
   */
  title: PropTypes.string.isRequired,

  sortBy: PropTypes.string,

  sortDirection: PropTypes.oneOf(['asc', 'desc']),

  /**
   * Callback triggered by clicking on a cell heading a sortable column.
   * Required when `props.isSortable` is `true`.
   */
  onChangeSorting: PropTypes.func,

  /**
   * Is this row resizable?
   */
  isResizable: PropTypes.bool,

  /**
   * Is this column sortable, i.e. should clicking it change the currently
   * displayed row order below?
   */
  isSortable: PropTypes.bool,
};


export default HeadCell;
