import React from 'react';
import { storiesOf } from '@storybook/react';
import { array, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DataTableAdvanced, DataTableColumn } from '../src';

const stories = storiesOf('DataTableAdvanced', module);
const data = [
  {
    id: 1,
    col1: 'bork',
    col2: 'hello',
    col3: 123,
    col4: 'pjqe e129 osfnoejfo oief oiwe',
    moo: true,
  },
  {
    id: 2,
    col1: 'herp derp',
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
      data={object('Data', data)}
      hasSelectableRows={boolean('Has selectable rows', false)}
      isActionable={boolean('Is actionable', false)}
      onAction={action()}
      onSelection={action()}
      onSorting={action()}
    >
      <DataTableColumn
        dataKey="col1"
        isResizable={false}
        isSortable
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
        isSortable
        cellRenderer={({ dataKey, cellData, defaultProps }) => (
          <td {...defaultProps}>
            <span>
              <strong>{dataKey}:</strong> {cellData}
            </span>
          </td>
        )}
      />
    </DataTableAdvanced>
  ));
