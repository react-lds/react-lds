import React from 'react';
import { Notification, Grid, Column, IconSVG } from 'react-lds';

const ExampleToastErrorDetails = () => (
  <Notification toast title="Error" theme="info">
    <Grid className="slds-notify__content">
      <Column className="slds-m-right--small" no-flex>
        <IconSVG sprite="utility" icon="warning" size="small" />
      </Column>
      <Column className="slds-m-right--small">
        <h2 className="slds-text-heading--small">
          You&#x27;ve encountered some errors when trying to save edits to Samuel Smith.
        </h2>
        <p>Here&#x27;s some detail of what happened, being very descriptive and transparent.</p>
      </Column>
    </Grid>
  </Notification>
);

export default ExampleToastErrorDetails;
