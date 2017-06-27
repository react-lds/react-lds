import React from 'react';

import { Spinner } from 'react-lds';

const ExampleWithContainerFixed = () => (
  <div>
    <p>test</p>
    <Spinner container size="medium" />
  </div>
);

// the example is not actually fixed, because it would cover the whole page.
// I could put it in an iframe to contain the effect, but maybe thats over the top

export default ExampleWithContainerFixed;
