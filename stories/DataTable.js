import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { array, object, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import {
  Button,
  DataTable,
  DataTableColumn,
  DataTableActionColumn,
  DataTableSelectColumn,
} from '../src';
import sampleData from './utils/sampleUsers';

const stories = storiesOf('DataTable', module);

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
      data={object('Data', sampleData.slice(0, 5))}
      onSelect={action()}
      onSort={action()}
    >
      <DataTableColumn
        dataKey="name"
        title="Name"
      />
      <DataTableColumn
        dataKey="city"
        title="City"
      />
      <DataTableColumn
        dataKey="dob"
        title="Date of birth (local date format)"
        cellRenderer={({ cellData, defaultProps }) => (
          <td {...defaultProps}>
            <span>{new Date(cellData).toLocaleString()}</span>
          </td>
        )}
      />
    </DataTable>
  ))
  .add('Sortable table', withInfo(`
    Marking a column **sortable** will make the table header clickable. On click, the
    data array is sorted by that column. If an **onSort** callback is provided, sorting the
    data array is left to that callback.
    If the data array is externally sorted, you can use the **sortBy** and **sortDirection**
    props to indicate the current sort column and direction.
  `)(() => (
    <DataTable
      sortBy={text('Sorted by', 'name')}
      sortDirection={select('Sort direction', ['asc', 'desc'])}
      data={object('Data', sampleData.slice(0, 5))}
      flavor="fixed-layout"
    >
      <DataTableColumn
        dataKey="name"
        sortable
        title="Name"
      />
      <DataTableColumn
        dataKey="city"
        sortable
        title="City"
      />
      <DataTableColumn
        dataKey="dob"
        sortable
        title="Date of birth"
      />
      <DataTableColumn
        dataKey="nationality"
        sortable
        title="Nationality"
      />
    </DataTable>
  )))
  .add('Selectable table', withInfo(`
    Adding a **DataTableSelectColumn** to the columns will add a column of checkboxes
    to the table.
    Ticking one of the checkboxes will result in the **onSelect** callback being called
    with a list of currently selected rows (identified by **rowId**).
  `)(() => (
    <StatefulWrapper data={object('Data', sampleData.slice(0, 5))}>
      <DataTable
        flavor="fixed-layout"
        onSelect={action()}
      >
        <DataTableSelectColumn
          dataKey="select-all"
        />
        <DataTableColumn
          dataKey="name"
          sortable
          title="Name"
        />
        <DataTableColumn
          dataKey="city"
          sortable
          title="City"
        />
      </DataTable>
    </StatefulWrapper>
  )))
  .add('Actionable table', () => (
    <DataTable
      data={object('Data', sampleData)}
      flavor="fixed-layout"
      onSelect={action()}
    >
      <DataTableColumn
        dataKey="name"
        sortable
        title="Name"
      />
      <DataTableColumn
        dataKey="email"
        sortable
        title="Email"
      />
      <DataTableActionColumn
        dataKey="stuff"
        cellRenderer={({ dataKey, rowIndex, defaultProps }) => (
          <td {...defaultProps}>
            <Button
              flavor={null}
              onClick={action(`click ${dataKey}@${rowIndex}`)}
            >Send Message</Button>
          </td>
        )}
      />
    </DataTable>
  ));
