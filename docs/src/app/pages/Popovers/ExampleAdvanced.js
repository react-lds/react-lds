import React from 'react';
import { Popover } from 'react-lds';

const header = (<h2 className="slds-text-heading--small">A new Popover</h2>);

const Example = () => (
  <Popover
    open
    closeable
    onClose={() => {}}
    header={header}
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
      vel urna vitae nibh dictum fermentum quis quis elit. Donec placerat, augue
      eu vehicula iaculis, magna risus porttitor est, in aliquam magna lorem ac
      arcu. Pellentesque ut purus et lacus vestibulum eleifend."
    footer="Footer Item"
    nubbin="bottom-left"
  />
);

export default Example;
