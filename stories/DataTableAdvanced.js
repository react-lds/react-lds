import React from 'react';
import { storiesOf } from '@storybook/react';
import { array, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {
  Button,
  DataTableAdvanced,
  DataTableColumn,
  DataTableActionColumn,
  DataTableSelectColumn,
} from '../src';

const stories = storiesOf('DataTableAdvanced', module);
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

stories
  .add('Basic example', () => (
    <DataTableAdvanced
      flavor={array('Flavor', ['bordered', 'striped'])}
      variation={array('Variation', [])}
      data={object('Data', sampleData)}
      isActionable={boolean('Is actionable', false)}
      onAction={action()}
      onSelect={action()}
      onSort={action()}
    >
      <DataTableColumn
        dataKey="col1"
        isResizable={false}
        title="Column 1"
      />
      <DataTableColumn
        dataKey="col2"
        isResizable
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
    </DataTableAdvanced>
  ))
  .add('Sortable table', () => (
    <DataTableAdvanced
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
    </DataTableAdvanced>
  ))
  .add('Selectable table', () => (
    <DataTableAdvanced
      data={object('Data', sampleData)}
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
    </DataTableAdvanced>
  ))
  .add('Actionable table', () => (
    <DataTableAdvanced
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
    </DataTableAdvanced>
  ));
