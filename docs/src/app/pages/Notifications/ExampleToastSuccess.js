import React from 'react';
import { Notification, Grid, Column, IconSVG } from 'react-lds';

const ExampleToastSuccess = () => (
  <Notification toast title="Success" theme="success">
    <Grid className="slds-notify__content">
      <Column className="slds-m-right--small" no-flex>
        <IconSVG sprite="utility" icon="notification" size="small" />
      </Column>
      <Column className="slds-m-right--small">
        <h2 className="slds-text-heading--small">
          Your new contact <a href="#top">Sara Smith</a> was successfully created.
        </h2>
      </Column>
    </Grid>
  </Notification>
);

export default ExampleToastSuccess;
