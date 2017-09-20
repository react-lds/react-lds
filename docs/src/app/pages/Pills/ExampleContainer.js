import React from 'react';
import { Listbox, Pill, PillContainer } from 'react-lds';

const Example = () => (
  <PillContainer>
    <Listbox label="Selected Pills:">
      <Pill url="#" label="Pill Label" title="Full pill label verbiage mirrored here" onClose={() => {}} />
      <Pill url="#" label="Pill Label" title="Full pill label verbiage mirrored here" onClose={() => {}} />
      <Pill url="#" label="Pill Label" title="Full pill label verbiage mirrored here" onClose={() => {}} />
    </Listbox>
  </PillContainer>
);

export default Example;
