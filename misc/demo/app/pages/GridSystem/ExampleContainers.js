import React from 'react';

import { Box, Container } from 'react-lds';

const ExampleContainers = () =>
  <div>
    <Container small>
      <Box theme="shade" size="small">Max Width: 480px</Box>
    </Container>
    <Container medium className="slds-m-top--medium">
      <Box theme="shade" size="small">Max Width: 768px</Box>
    </Container>
    <Container large className="slds-m-top--medium">
      <Box theme="shade" size="small">Max Width: 1024px</Box>
    </Container>
    <Container x-large className="slds-m-top--medium">
      <Box theme="shade" size="small">Max Width: 1280px</Box>
    </Container>
    <Container fluid className="slds-m-top--medium">
      <Box theme="shade" size="small">Width: 100%</Box>
    </Container>
    <Container left small className="slds-m-top--medium">
      <Box theme="shade" size="small">Left Aligned</Box>
    </Container>
    <Container center small className="slds-m-top--medium">
      <Box theme="shade" size="small">Center Aligned</Box>
    </Container>
    <Container right small className="slds-m-top--medium">
      <Box theme="shade" size="small">Right Aligned</Box>
    </Container>
  </div>;

export default ExampleContainers;
