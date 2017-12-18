import { Component } from 'react';

import DataTableColumn, { propTypes as columnPropTypes } from './DataTableColumn';
import defaultSelectAllRenderer from './defaultSelectAllRenderer';
import defaultSelectRenderer from './defaultSelectRenderer';

class DataTableSelectColumn extends Component {
  static propTypes = {
    ...columnPropTypes
  }

  static defaultProps = {
    ...DataTableColumn.defaultProps,
    cellRenderer: defaultSelectRenderer,
    headRenderer: defaultSelectAllRenderer,
  }
}

export default DataTableSelectColumn;
