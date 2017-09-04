import React from 'react';

import { Button } from 'react-lds';

const onClick = () => {};

const ExampleNormal = () =>
  <div>
    <Button
      onClick={onClick}
      title="Button Reset"
      tooltip="I'm a tooltip, look at me!"
    />
    <Button
      neutral
      onClick={onClick}
      title="Button Neutral"
      tooltip="I'm a tooltip, look at me!"
    />
    <Button
      brand
      onClick={onClick}
      title="Button Brand"
      tooltip="I'm a tooltip, look at me!"
    />
    <Button
      disabled onClick={onClick}
      neutral
      title="Button Neutral Disabled"
      tooltip="I'm a tooltip, look at me!"
    />
    <Button
      destructive
      onClick={onClick}
      title="Button Destructive"
      tooltip="I'm a tooltip, look at me!"
    />
    <Button
      success onClick={onClick}
      title="Button Success"
      tooltip="I'm a tooltip, look at me!"
    />
  </div>;

export default ExampleNormal;
