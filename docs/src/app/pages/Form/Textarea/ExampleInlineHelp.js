import React from 'react';

import { Textarea } from 'react-lds';

const ExampleInlineHelp = () =>
  <div>
    <Textarea
      id="textarea-input-1"
      label="Textarea Label"
      placeholder="Placeholder Text"
      inlineHelp="ex: Lorem Ipsum"
    />
  </div>;

export default ExampleInlineHelp;
