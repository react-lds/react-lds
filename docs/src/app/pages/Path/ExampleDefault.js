import React from 'react';
import { Path, PathStage, Button, ButtonIcon } from 'react-lds';
import cx from 'classnames';

const ExampleDefault = () => {
  const statusButtonClasses = [
    'slds-path__mark-complete',
    'slds-no-flex',
    'slds-m-horizontal_small',
  ];
  const pathButton = (
    <Button
      brand
      icon
      icon-inverse
      className={cx(statusButtonClasses)}
      onClick={() => {}}
      title="Mark as complete"
    >
      <ButtonIcon position="left" sprite="utility" icon="check" />
      Mark as complete
    </Button>);

  return (
    <Path button={pathButton}>
      <PathStage
        label="This here"
        onStageClick={() => {}}
        complete
        value="this_here"
      />
      <PathStage
        label="This too"
        onStageClick={() => {}}
        current
        value="this_too"
      />
      <PathStage
        label="This as well"
        onStageClick={() => {}}
        value="this_as_well"
      />
    </Path>
  );
};

export default ExampleDefault;
