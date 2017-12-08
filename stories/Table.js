import React from 'react';
import { storiesOf } from '@storybook/react';
import { array, boolean } from '@storybook/addon-knobs';
import { Table, Row, Cell } from '../src';

const stories = storiesOf('Table', module);

stories
  .add('Basic example', () => (
    <Table
      flavor={array('Flavor', ['bordered', 'striped']) || undefined}
      variation={array('Variation', [])}
    >
      <thead>
        <Row
          head={boolean('Row 1 is Head', true)}
          variation={array('Row 1 variation', []) || undefined}
        >
          <Cell scope="col" truncate>Opportunity Name</Cell>
          <Cell scope="col" truncate>Account Name</Cell>
          <Cell scope="col" truncate>Close Date</Cell>
          <Cell scope="col" truncate>Stage</Cell>
          <Cell scope="col" truncate>Confidence</Cell>
          <Cell scope="col" truncate>Amount</Cell>
          <Cell scope="col" truncate>Contact</Cell>
        </Row>
      </thead>
      <tbody>
        <Row variation={array('Row 2 variation', ['hint-parent']) || undefined}>
          <Cell truncate data-label="Opportunity Name" scope="row"><a href="#top">Cloudhub</a></Cell>
          <Cell truncate data-label="Account Name">Cloudhub</Cell>
          <Cell truncate data-label="Close Date">4/14/2015</Cell>
          <Cell truncate data-label="Stage">Prospecting</Cell>
          <Cell truncate data-label="Confidence">20%</Cell>
          <Cell truncate data-label="Amount">$25k</Cell>
          <Cell truncate data-label="Contact">jrogers@cloudhub.com</Cell>
        </Row>
        <Row variation={array('Row 3 variation', []) || undefined}>
          <Cell
            variation={array('Cell 3-1 variation', ['cell-shrink']) || undefined}
            truncate
            data-label="Opportunity Name"
            scope="row"
          ><a href="#top">
          Cloudhub + Anypoint Connectors + Some other guys with a long name</a>
          </Cell>
          <Cell truncate data-label="Account Name">Cloudhub</Cell>
          <Cell truncate data-label="Close Date">4/14/2015</Cell>
          <Cell truncate data-label="Stage">Prospecting</Cell>
          <Cell truncate data-label="Confidence">20%</Cell>
          <Cell truncate data-label="Amount">$25k</Cell>
          <Cell truncate data-label="Contact">jrogers@cloudhub.com</Cell>
        </Row>
        <Row variation={array('Row 4 variation', []) || undefined}>
          <Cell truncate data-label="Opportunity Name" scope="row"><a href="#top">
          Mr. B</a>
          </Cell>
          <Cell truncate data-label="Account Name">B-Man</Cell>
          <Cell truncate data-label="Close Date">5/14/2015</Cell>
          <Cell truncate data-label="Stage">Winning</Cell>
          <Cell truncate data-label="Confidence">&gt;99%</Cell>
          <Cell truncate data-label="Amount">$25k</Cell>
          <Cell truncate data-label="Contact">jrogers@cloudhub.com</Cell>
        </Row>
      </tbody>
    </Table>
  ));
