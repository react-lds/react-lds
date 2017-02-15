import React from 'react';

import { prefixClasses } from '../../utils';
import DataCell from './DataCell';


const DataRow = (props, { cssPrefix }) => {
  const {
    columnsConf,
    isActionable,
    isSelectable,
    isSelected,
    onToggle,
    onAction,
    rowData,
  } = props;

  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);
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
        className={prefix('text-align--right')}
        role="gridcell"
        style={{ width: '3.25rem' }}
      >
        <span className={prefix('checkbox')}>
          <input
            checked={isSelected}
            id={checkboxId}
            name="options"
            onChange={() => onToggle(rowData.id)}
            type="checkbox"
          />
          <label className={prefix('checkbox__label')} htmlFor={checkboxId}>
            <span className={prefix('checkbox--faux')} />
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
          className={prefix(['button', 'button--icon-border-filled', 'button--icon-x-small'])}
          onClick={() => onAction(rowData.id)}
          title="Show More"
        >
          <svg className={prefix(['button__icon', 'button__icon--hint', 'button__icon--small'])} aria-hidden="true">
            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down" />
          </svg>
          <span className={prefix('assistive-text')}>
            Show More
          </span>
        </button>
      </td>
    );
  }

  const cxTr = prefix([
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
