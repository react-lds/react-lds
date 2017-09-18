import React from 'react';

import { Textarea, FieldLevelHelp } from 'react-lds';

const myFieldLevelHelp = <FieldLevelHelp onClick={() => {}} tooltip="Helpings" />;

const ExampleFieldLevelHelp = () =>
  <div>
    <Textarea
      id="textarea-input-1"
      label="Textarea Label"
      placeholder="Placeholder Text"
      fieldLevelHelp={myFieldLevelHelp}
    />
  </div>;

export default ExampleFieldLevelHelp;
