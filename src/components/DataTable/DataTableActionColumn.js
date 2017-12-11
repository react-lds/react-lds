import { Component } from 'react';

import DataTableColumn from './DataTableColumn';
import defaultActionHeadRenderer from './defaultActionHeadRenderer';

class DataTableActionColumn extends Component {
  static propTypes = {
    ...DataTableColumn.propTypes
  }

  static defaultProps = {
    ...DataTableColumn.defaultProps,
    headRenderer: defaultActionHeadRenderer,
  }
}

export default DataTableActionColumn;
