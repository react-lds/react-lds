import React from 'react';

import { prefixClasses } from '../../utils';
import DataCell from './DataCell';


const DataRow = (props, { cssPrefix }) => {
  const {
    columnsConf,
    isSelectable,
    isSelected,
    onToggle,
    rowData,
  } = props;

  const prefix = (classes, passThrough) => prefixClasses(cssPrefix, classes, passThrough);
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

  const dataCells = columnsConf.map(conf => (
    <DataCell
      dataKey={conf.dataKey}
      key={conf.dataKey}
      renderer={conf.renderer}
      value={rowData[conf.dataKey]}
    />
  ));

  return (
    <tr className={prefix('hint-parent')}>
      {checkboxCell}
      {dataCells}
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
   * Is this row selectable, i.e. should it show a checkbox in front?
   */
  isSelectable: React.PropTypes.bool,

  /**
   * Is this row currently selected?
   */
  isSelected: React.PropTypes.bool,

  /**
   * Callback triggered by activating/deactivating the row selection checkbox.
   * Required when `props.isSelectable` is `true`.
   */
  onToggle: React.PropTypes.func,
};


export default DataRow;
