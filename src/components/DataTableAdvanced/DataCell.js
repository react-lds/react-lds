import React from 'react';
import PropTypes from 'prop-types';

const DataCell = (props) => {
  const {
    dataKey,
    renderer,
    value,
    ...restProps
  } = props;

  return (
    <td role="gridcell" {...restProps}>
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

DataCell.defaultProps = {
  renderer: null,
};

DataCell.propTypes = {
  /**
   * Optional cell renderer function
   */
  renderer: PropTypes.func,

  /**
   * Key name of the data object property being displayed in this here cell
   */
  dataKey: PropTypes.string.isRequired,

  /**
   * Value to display in this here cell
   */
  value: PropTypes.any.isRequired,
};


export default DataCell;
