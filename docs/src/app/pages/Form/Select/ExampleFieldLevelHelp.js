import React from 'react';

import { Select, FieldLevelHelp } from 'react-lds';

const myFieldLevelHelp = <FieldLevelHelp onClick={() => {}} tooltip="Helpings" />;

const ExampleDefault = () =>
  <div>
    <Select id="select-1" label="Select Label" fieldLevelHelp={myFieldLevelHelp}>
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  </div>;

export default ExampleDefault;
