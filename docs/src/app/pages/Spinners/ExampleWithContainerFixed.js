import React from 'react';

import { Spinner, SpinnerContainer } from 'react-lds';

const ExampleWithContainerFixed = () => (
  <SpinnerContainer>
    <Spinner size="medium" />
  </SpinnerContainer>
);

// the example is not actually fixed, because it would cover the whole page.
// I could put it in an iframe to contain the effect, but maybe thats over the top

export default ExampleWithContainerFixed;
