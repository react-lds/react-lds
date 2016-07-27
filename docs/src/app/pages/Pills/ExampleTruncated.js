import React from 'react';
import { Pill, PillContainer } from 'react-lds';

const Example = () => (
  <div className="demo-pill">
    <PillContainer>
      <Pill
        url="#"
        label="Pill label that is longer than the area that contains it"
        title="Pill label that is longer than the area that contains it"
      />
    </PillContainer>
  </div>

);

export default Example;
