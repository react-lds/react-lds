import React from 'react';

import { ExpandableSection } from 'react-lds';

const ExampleDefault = () => (
  <ExpandableSection
    className="COLLAPSABLE"
    defaultOpen
    collapsable
    id="COLLAPSABLE"
    title="Lorem Ipsum"
    onClickToggle={() => {}}
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.
    </p>
  </ExpandableSection>
);

export default ExampleDefault;
