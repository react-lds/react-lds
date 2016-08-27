import React from 'react';

import { Grid, Column, Box } from 'react-lds';

const ExampleManual = () =>
  <Grid pull-padded wrap>
    <Column className="slds-m-bottom--large" padded sizeOf="1-1">
      <Box theme="shade">1</Box>
    </Column>
    <Column className="slds-m-bottom--large" padded sizeOf="1-2" medium-sizeOf="5-6" large-sizeOf="8-12">
      <Box theme="shade">2</Box>
    </Column>
    <Column className="slds-m-bottom--large" padded sizeOf="1-2" medium-sizeOf="1-6" large-sizeOf="4-12">
      <Box theme="shade">3</Box>
    </Column>
    <Column className="slds-m-bottom--large" padded sizeOf="1-1" medium-sizeOf="1-2" large-sizeOf="1-3">
      <Box theme="shade">4</Box>
    </Column>
    <Column className="slds-m-bottom--large" padded sizeOf="1-1" medium-sizeOf="1-2" large-sizeOf="1-3">
      <Box theme="shade">5</Box>
    </Column>
    <Column className="slds-m-bottom--large" padded sizeOf="1-1" large-sizeOf="1-3">
      <Grid pull-padded wrap>
        <Column className="slds-m-bottom--large" padded sizeOf="1-2" medium-sizeOf="1-1" large-sizeOf="1-2">
          <Box theme="shade">6</Box>
        </Column>
        <Column className="slds-m-bottom--large" padded sizeOf="1-2" medium-sizeOf="1-1" large-sizeOf="1-2">
          <Box theme="shade">7</Box>
        </Column>
      </Grid>
    </Column>
  </Grid>;

export default ExampleManual;
