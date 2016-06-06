import React from 'react';
import { Grid, Column, Box } from '../../../src/main';

import Masthead from './Masthead';
import HeaderIcon from './HeaderIcon';

const GridSystem = () =>
  <div>
    <Masthead figure={<HeaderIcon />} title="Grid System" />
    <div className="slds-p-around--xx-large">

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Automatic Sizing</h2>
        <Grid className="slds-m-bottom--large">
          <Column>
            <Box theme="shade">col</Box>
          </Column>
          <Column>
            <Box theme="shade">col</Box>
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
      </section>

      <section className="slds-m-bottom--xx-large slds-p-top--x-large">
        <h2 className="slds-text-heading--medium slds-m-bottom--large">Manual Sizing</h2>
        <Grid pull-padded wrap>
          <Column padded>
            <Box theme="shade">1</Box>
          </Column>
          <Column>
            <Box theme="shade">2</Box>
          </Column>
          <Column>
            <Box theme="shade">3</Box>
          </Column>
          <Column>
            <Box theme="shade">4</Box>
          </Column>
          <Column>
            <Box theme="shade">5</Box>
          </Column>
          <Column>
            <Grid pull-padded wrap>
              <Column padded>
                <Box theme="shade">6</Box>
              </Column>
              <Column padded>
                <Box theme="shade">7</Box>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </section>

    </div>
  </div>;

export default GridSystem;
