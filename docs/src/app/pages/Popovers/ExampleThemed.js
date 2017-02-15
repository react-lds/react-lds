import React from 'react';
import { Popover } from 'react-lds';

const Example = () => (
  <Popover
    open
    closeable
    onClose={() => {}}
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
      vel urna vitae nibh dictum fermentum quis quis elit. Donec placerat, augue
      eu vehicula iaculis, magna risus porttitor est, in aliquam magna lorem ac
      arcu. Pellentesque ut purus et lacus vestibulum eleifend."
    theme="error"
  />
);

export default Example;
