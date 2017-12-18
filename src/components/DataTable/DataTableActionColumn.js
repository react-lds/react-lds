import { Component } from 'react';

import DataTableColumn, { propTypes as columnPropTypes } from './DataTableColumn';
import defaultActionHeadRenderer from './defaultActionHeadRenderer';

class DataTableActionColumn extends Component {
  static propTypes = {
    ...columnPropTypes
  }

  static defaultProps = {
    ...DataTableColumn.defaultProps,
    headRenderer: defaultActionHeadRenderer,
  }
}

export default DataTableActionColumn;
