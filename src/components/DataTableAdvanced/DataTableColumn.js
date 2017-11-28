import PropTypes from 'prop-types';

import defaultCellRenderer from './defaultCellRenderer';
import defaultHeadRenderer from './defaultHeadRenderer';

const DataTableColumn = () => null;

DataTableColumn.defaultProps = {
  cellRenderer: defaultCellRenderer,
  headRenderer: defaultHeadRenderer,
  isResizable: false,
  sortable: false,
  title: null,
};

DataTableColumn.propTypes = {
  cellRenderer: PropTypes.func.isRequired,
  headRenderer: PropTypes.func.isRequired,
  dataKey: PropTypes.string.isRequired,
  isResizable: PropTypes.bool,
  sortable: PropTypes.bool,
  title: PropTypes.string
};

export default DataTableColumn;
