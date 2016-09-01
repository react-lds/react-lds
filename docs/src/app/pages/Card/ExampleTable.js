import React from 'react';

import { Card, Button, Table, Row, Cell } from 'react-lds';

const table = (
  <Table bordered>
    <thead>
      <Row head>
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
      <Row>
        <Cell truncate data-label="Opportunity Name" scope="row"><a href="#top">Cloudhub</a></Cell>
        <Cell truncate data-label="Account Name">Cloudhub</Cell>
        <Cell truncate data-label="Close Date">4/14/2015</Cell>
        <Cell truncate data-label="Stage">Prospecting</Cell>
        <Cell truncate data-label="Confidence">20%</Cell>
        <Cell truncate data-label="Amount">$25k</Cell>
        <Cell truncate data-label="Contact">jrogers@cloudhub.com</Cell>
      </Row>
      <Row>
        <Cell truncate data-label="Opportunity Name" scope="row">
          <a href="#top">Cloudhub + Anypoint Connectors</a>
        </Cell>
        <Cell truncate data-label="Account Name">Cloudhub</Cell>
        <Cell truncate data-label="Close Date">4/14/2015</Cell>
        <Cell truncate data-label="Stage">Prospecting</Cell>
        <Cell truncate data-label="Confidence">20%</Cell>
        <Cell truncate data-label="Amount">$25k</Cell>
        <Cell truncate data-label="Contact">jrogers@cloudhub.com</Cell>
      </Row>
    </tbody>
  </Table>
);

const ExampleTable = () =>
  <Card
    icon="contact"
    sprite="standard"
    title="Contacts (2)"
    headerRight={<Button title="New" neutral />}
    body={table}
    footer={<a>View all</a>}
  />;

export default ExampleTable;
