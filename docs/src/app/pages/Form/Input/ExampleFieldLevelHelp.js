import React from 'react';

import { Input, FieldLevelHelp } from 'react-lds';

const myFieldLevelHelp = <FieldLevelHelp onClick={() => {}} tooltip="Helpings" />;

const ExampleFieldLevelHelp = () =>
  <div>
    <Input
      id="input-1"
      label="Default Input"
      placeholder="Enter something..."
      value=""
      fieldLevelHelp={myFieldLevelHelp}
    />
  </div>;

export default ExampleFieldLevelHelp;
