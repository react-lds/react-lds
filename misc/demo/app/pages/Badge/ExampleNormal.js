import React from 'react';

import { Badge } from 'react-lds';

const ExampleNormal = () =>
  <div>
    <Badge label="Label" />
    <Badge variation="default" label="Label" />
    <Badge variation="shade" label="Label" />
    <Badge variation="inverse" label="Label" />
  </div>;

export default ExampleNormal;
