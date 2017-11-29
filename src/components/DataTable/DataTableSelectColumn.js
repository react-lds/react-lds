import { Component } from 'react';

import DataTableColumn from './DataTableColumn';
import defaultSelectAllRenderer from './defaultSelectAllRenderer';
import defaultSelectRenderer from './defaultSelectRenderer';

class DataTableSelectColumn extends Component {
  static propTypes = {
    ...DataTableColumn.propTypes
  }

  static defaultProps = {
    ...DataTableColumn.defaultProps,
    cellRenderer: defaultSelectRenderer,
    headRenderer: defaultSelectAllRenderer,
  }
}

export default DataTableSelectColumn;
