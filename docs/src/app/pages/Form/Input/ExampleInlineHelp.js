import React from 'react';

import { Input } from 'react-lds';

const inlineHelp = (
  <p>ex: Lorem ipsum dolor sit amet, consectetur <a>adipisicing elit</a>, sed do eiusmod tempor incididunt.</p>
);

const ExampleInlineHelp = () =>
  <div>
    <Input
      id="input-1"
      label="Default Input"
      placeholder="Enter something..."
      value=""
      inlineHelp={inlineHelp}
    />
  </div>;

export default ExampleInlineHelp;
