import React from 'react';

import {
  RecordHome,
  Button,
  ButtonIcon,
  ButtonGroup,
} from 'react-lds';

const onClick = () => {};

const RecordHomeExample = () => {
  const headerButtons = ([
    <Button title="Follow" neutral key="follow" onClick={onClick}>
      <ButtonIcon position="left" sprite="utility" icon="add" />
    </Button>,

    <ButtonGroup key="btngroup">
      <Button title="Edit" neutral onClick={onClick} />
      <Button title="Delete" neutral onClick={onClick} />
      <Button title="Clone" neutral onClick={onClick} />
      <Button icon icon-border-filled onClick={onClick}>
        <ButtonIcon sprite="utility" icon="down" />
      </Button>
    </ButtonGroup>,
  ]);

  return (
    <RecordHome
      title="Record Title"
      recordType="Record Type"
      icon={{ icon: 'user', sprite: 'standard' }}
      headerButtons={headerButtons}
      detailItems={[
        {
          title: 'Field 1',
          content: 'Very important ultra long text that everybody must read!',
        },
        {
          title: 'Field 2',
          content: 'Not so important!',
        },
        {
          title: 'Field 3',
          content: <a>Some Link</a>,
        },
        {
          title: [<span key="heading">very important</span>, (
            <Button icon icon-bare key="icon" onClick={onClick}>
              <ButtonIcon sprite="utility" icon="down" size="small" />
            </Button>
          )],
          content: 'Whatever',
        },
      ]}
    />
  );
};

export default RecordHomeExample;
