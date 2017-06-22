import React from 'react';

import { ExpandableSection } from 'react-lds';

const ExampleNonCollapsable = () => (
  <ExpandableSection
    collapsable={false}
    open
    id="12345"
    title="Test Title"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.
    </p>
  </ExpandableSection>
);

export default ExampleNonCollapsable;
