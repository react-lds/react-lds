import React from 'react';

import { Input } from 'react-lds';

const ExampleInput = () =>
  <div>
    <Input id="input-1" label="Default Input" placeholder="Enter something..." />
    <Input id="input-2" label="Input with Left Icon" placeholder="Enter something..." iconLeft="search" />
    <Input id="input-3" label="Input with Right Icon" placeholder="Enter something..." iconRight="search" />
    <Input
      id="input-4"
      label="Input with Both Icons"
      placeholder="Enter something..."
      iconLeft="search"
      iconRight="search"
    />
    <Input
      id="input-5"
      label="Input with Both Icons"
      placeholder="Enter something..."
      iconLeft="search"
      iconRight="clear"
    />
    <Input required id="input-6" label="Required field" placeholder="Enter something..." />
    <Input disabled id="input-7" label="Disabled field" placeholder="Don't you dare!" />
    <Input required id="input-8" label="This could go wrong" error="This field must be purple!" />
    <Input required errorIcon id="input-8" label="This could go wrong" error="This field must be purple!" />
  </div>;

export default ExampleInput;
