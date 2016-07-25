import React from 'react';

import {
  RecordHome,
  Button,
  ButtonIcon,
  ButtonGroup,
} from 'react-lds';

const RecordHomeExample = () => {
  const headerButtons = ([
    <Button title="Follow" variation="neutral" key="follow">
      <ButtonIcon position="left" sprite="utility" icon="add" />
    </Button>,

    <ButtonGroup key="btngroup">
      <Button title="Edit" variation="neutral" />
      <Button title="Delete" variation="neutral" />
      <Button title="Clone" variation="neutral" />
      <Button icon variation="icon-border-filled">
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
            <Button icon variation="icon-bare" key="icon">
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
