import React from 'react';

import { Card, Button } from 'react-lds';

const ExampleDefault = () =>
  <Card
    icon="contact"
    sprite="standard"
    title="Base Card"
    headerRight={<Button title="New" neutral onClick={() => {}} />}
    body="Body would be here"
    footer="Footer"
  />;

export default ExampleDefault;
