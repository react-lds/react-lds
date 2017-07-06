import React from 'react';

import { ExpandableSection } from 'react-lds';

const ExampleNonCollapsable = () => (
  <ExpandableSection
    className="testtest"
    title="Test Title"
    id="NONCOLLAPSABLE"
    open
    collapsable={false}
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.
    </p>
  </ExpandableSection>
);

export default ExampleNonCollapsable;
