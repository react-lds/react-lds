import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { array, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {
  Button,
  DataTable,
  DataTableColumn,
  DataTableActionColumn,
  DataTableSelectColumn,
} from '../src';

const stories = storiesOf('DataTable', module);
const sampleData = [
  {
    id: 1,
    col1: 'herp hero',
    col2: 'hello',
    col3: 123,
    col4: 'pjqe e129 osfnoejfo oief oiwe',
    moo: true,
  },
  {
    id: 2,
    col1: 'bork',
    col2: 'hej hej',
    col3: 246,
    col4: 'osfnoejfo oief oiwe',
    moo: false,
  },
];

class StatefulWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    selection: [],
  }

  onSelect = (selection) => {
    const { onSelect } = this.props.children.props; // eslint-disable-line react/prop-types
    if (onSelect) onSelect(selection);
    this.setState({ selection });
  }

  render() {
    const { children, ...restProps } = this.props;
    return React.cloneElement(children, {
      ...restProps,
      ...this.state,
      onSelect: this.onSelect,
    });
  }
}

stories
  .add('Basic example', () => (
    <DataTable
      flavor={array('Flavor', ['bordered', 'striped'])}
      variation={array('Variation', [])}
      data={object('Data', sampleData)}
      onSelect={action()}
      onSort={action()}
    >
      <DataTableColumn
        dataKey="col1"
        title="Column 1"
      />
      <DataTableColumn
        dataKey="col2"
        title="Column 2"
      />
      <DataTableColumn
        dataKey="col4"
        title="Column w/ custom renderer"
        cellRenderer={({ dataKey, cellData, defaultProps }) => (
          <td {...defaultProps}>
            <span>
              <strong>{dataKey}:</strong> {cellData}
            </span>
          </td>
        )}
      />
    </DataTable>
  ))
  .add('Sortable table', () => (
    <DataTable
      data={object('Data', sampleData)}
      flavor="fixed-layout"
    >
      <DataTableColumn
        dataKey="col1"
        sortable
        title="Column 1"
      />
      <DataTableColumn
        dataKey="col3"
        sortable
        title="Column 3"
      />
    </DataTable>
  ))
  .add('Selectable table', () => (
    <StatefulWrapper data={object('Data', sampleData)}>
      <DataTable
        flavor="fixed-layout"
        onSelect={action()}
      >
        <DataTableSelectColumn
          dataKey="select-all"
        />
        <DataTableColumn
          dataKey="col1"
          sortable
          title="Column 1"
        />
        <DataTableColumn
          dataKey="col3"
          sortable
          title="Column 3"
        />
      </DataTable>
    </StatefulWrapper>
  ))
  .add('Actionable table', () => (
    <DataTable
      data={object('Data', sampleData)}
      flavor="fixed-layout"
      onSelect={action()}
    >
      <DataTableColumn
        dataKey="col1"
        sortable
        title="Column 1"
      />
      <DataTableColumn
        dataKey="col3"
        sortable
        title="Column 3"
      />
      <DataTableActionColumn
        dataKey="stuff"
        cellRenderer={({ dataKey, rowIndex, defaultProps }) => (
          <td {...defaultProps}>
            <Button
              onClick={action(`click ${dataKey}@${rowIndex}`)}
              title="Do stuff"
            />
          </td>
        )}
      />
    </DataTable>
  ));
