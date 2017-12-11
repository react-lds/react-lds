import { Component } from 'react';
import PropTypes from 'prop-types';

import defaultCellRenderer from './defaultCellRenderer';
import defaultHeadRenderer from './defaultHeadRenderer';

class DataTableColumn extends Component {
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    cellRenderer: PropTypes.func.isRequired,
    headRenderer: PropTypes.func.isRequired,
    dataKey: PropTypes.string.isRequired,
    isResizable: PropTypes.bool,
    sortable: PropTypes.bool,
    title: PropTypes.string,
  }
  // eslint-enable

  static defaultProps = {
    cellRenderer: defaultCellRenderer,
    headRenderer: defaultHeadRenderer,
    isResizable: false,
    sortable: false,
    title: null,
  }
}

export default DataTableColumn;
