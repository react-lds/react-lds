import React from 'react';

import { Grid, Column, Box } from 'react-lds';

const ExampleAutomatic = () =>
  <div>
    <Grid className="slds-m-bottom--large">
      <Column>
        <Box theme="shade">col</Box>
      </Column>
      <Column>
        <Box className="pb-test" theme="shade">col</Box>
      </Column>
    </Grid>

    <Grid pull-padded>
      <Column padded>
        <Box theme="shade">col</Box>
      </Column>
      <Column padded>
        <Box theme="shade">col</Box>
      </Column>
    </Grid>
  </div>;

export default ExampleAutomatic;
