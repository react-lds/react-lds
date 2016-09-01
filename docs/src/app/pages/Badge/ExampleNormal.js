import React from 'react';

import { Badge } from 'react-lds';

const ExampleNormal = () =>
  <div>
    <Badge label="Label" />
    <Badge className="custom" data-whatever="wurbel" theme="default" label="Label" />
    <Badge theme="shade" label="Label" />
    <Badge theme="inverse" label="Label" />
  </div>;

export default ExampleNormal;
