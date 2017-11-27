import PropTypes from 'prop-types';

import defaultCellRenderer from './defaultCellRenderer';

const DataTableColumn = () => null;

DataTableColumn.defaultProps = {
  cellRenderer: defaultCellRenderer,
  isResizable: false,
  isSortable: false,
  title: null,
};

DataTableColumn.propTypes = {
  cellRenderer: PropTypes.func.isRequired,
  dataKey: PropTypes.string.isRequired,
  isResizable: PropTypes.bool,
  isSortable: PropTypes.bool,
  title: PropTypes.string
};

export default DataTableColumn;
