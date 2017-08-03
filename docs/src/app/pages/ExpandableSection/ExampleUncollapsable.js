import React from 'react';

import { ExpandableSection } from 'react-lds';

const ExampleUncollapsable = () => (
  <ExpandableSection
    title="This is the title"
    id="33"
    uncollapsable
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.
    </p>
  </ExpandableSection>
);

export default ExampleUncollapsable;
