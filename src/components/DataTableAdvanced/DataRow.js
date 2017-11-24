import React from 'react';
import cx from 'classnames';

import DataCell from './DataCell';

const DataRow = (props) => {
  const {
    columnsConf,
    isActionable,
    isSelectable,
    isSelected,
    onToggle,
    onAction,
    rowData,
  } = props;

  const dataCells = columnsConf.map(conf => (
    <DataCell
      dataKey={conf.dataKey}
      key={conf.dataKey}
      renderer={conf.renderer}
      value={rowData[conf.dataKey]}
    />
  ));

  let checkboxCell = null;
  if (isSelectable) {
    const checkboxId = `checkbox-${rowData.id}`;

    checkboxCell = (
      <td
        className="slds-text-align--right"
        role="gridcell"
        style={{ width: '3.25rem' }}
      >
        <span className="slds-checkbox">
          <input
            checked={isSelected}
            id={checkboxId}
            name="options"
            onChange={() => onToggle(rowData.id)}
            type="checkbox"
          />
          <label className="slds-checkbox__label" htmlFor={checkboxId}>
            <span className="checkbox--faux" />
            <span className="slds-form-element__label slds-assistive-text">
              Select item {rowData.id}
            </span>
          </label>
        </span>
      </td>
    );
  }

  let showMoreCell = null;
  if (isActionable) {
    showMoreCell = (
      <td role="gridcell" style={{ width: '3.25rem' }}>
        <button
          className="slds-button slds-button--icon-border-filled slds-button--icon-x-small"
          onClick={() => onAction(rowData.id)}
          title="Show More"
        >
          <svg className="slds-button__icon slds-button__icon--hint slds-button__icon--small" aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down" />
          </svg>
          <span className="slds-assistive-text">
            Show More
          </span>
        </button>
      </td>
    );
  }

  const cxTr = cx([
    'hint-parent',
    { 'is-selected': isSelected },
  ]);

  return (
    <tr className={cxTr}>
      {checkboxCell}
      {dataCells}
      {showMoreCell}
    </tr>
  );
};


DataRow.variations = [];

DataRow.contextTypes = {
  cssPrefix: React.PropTypes.string,
};

DataRow.propTypes = {
  /**
   * row content
   */
  rowData: React.PropTypes.object.isRequired,

  /**
   * Array containing column configurations
   */
  columnsConf: React.PropTypes.array.isRequired,

  /**
   * Does each row have a trailing "Show more" element?
   */
  isActionable: React.PropTypes.bool,

  /**
   * Is this row selectable, i.e. should it show a checkbox in front?
   */
  isSelectable: React.PropTypes.bool,

  /**
   * Is this row currently selected?
   */
  isSelected: React.PropTypes.bool,

  /**
   * Callback triggered by clicking on the trailing "Show more" element in a
   * row. Required when `props.isActionable` is `true`.
   */
  onAction: React.PropTypes.func,

  /**
   * Callback triggered by activating/deactivating the row selection checkbox.
   * Required when `props.isSelectable` is `true`.
   */
  onToggle: React.PropTypes.func,
};


export default DataRow;
