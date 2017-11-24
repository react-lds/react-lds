import React from 'react';

const DataCell = (props) => {
  const {
    dataKey,
    renderer,
    value,
  } = props;

  return (
    <td role="gridcell">
      { renderer
        ? renderer(dataKey, value)
        : (
          <div className="slds-truncate" title={value}>
            {value}
          </div>
        )
      }
    </td>
  );
};


DataCell.variations = [];

DataCell.contextTypes = {
  cssPrefix: React.PropTypes.string,
};

DataCell.propTypes = {
  /**
   * Optional cell renderer function
   */
  renderer: React.PropTypes.func,

  /**
   * Key name of the data object property being displayed in this here cell
   */
  dataKey: React.PropTypes.string.isRequired,

  /**
   * Value to display in this here cell
   */
  value: React.PropTypes.any.isRequired,
};


export default DataCell;
