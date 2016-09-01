import React from 'react';
import { Notification, Grid, Column, IconSVG } from 'react-lds';

const ExampleToastError = () => (
  <Notification toast title="Error" theme="error">
    <Grid className="slds-notify__content">
      <Column className="slds-m-right--small" no-flex grow>
        <IconSVG sprite="utility" icon="warning" size="small" />
      </Column>
      <Column className="slds-m-right--small">
        <h2 className="slds-text-heading--small">
          You encountered some errors when trying to save edits to Samuel Smith.
        </h2>
      </Column>
    </Grid>
  </Notification>
);

export default ExampleToastError;
