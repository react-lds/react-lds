import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {
  Button,
  ButtonGroup,
  ButtonIcon,
  PageHeaderBase,
  RecordHome,
  MenuDropdownList,
  MenuDropdownListItem,
  ObjectHomeRaw as ObjectHome
} from '../src';

const stories = storiesOf('PageHeader', module);

const headerButtons = ([
  <Button title="Follow" flavor="neutral" key="follow" onClick={action()}>
    <ButtonIcon position="left" sprite="utility" icon="add" />
  </Button>,
  <ButtonGroup key="btngroup">
    <Button title="Edit" flavor="neutral" onClick={action()} />
    <Button title="Delete" flavor="neutral" onClick={action()} />
    <Button title="Clone" flavor="neutral" onClick={action()} />
    <Button flavor={['icon', 'icon-border-filled']} onClick={action()}>
      <ButtonIcon sprite="utility" icon="down" />
    </Button>
  </ButtonGroup>,
]);

const titleMenu = (
  <MenuDropdownList>
    <MenuDropdownListItem>Item 1</MenuDropdownListItem>
    <MenuDropdownListItem>Item 2</MenuDropdownListItem>
    <MenuDropdownListItem>Item 3</MenuDropdownListItem>
    <MenuDropdownListItem divider>Important last item</MenuDropdownListItem>
  </MenuDropdownList>
);

const topButtons = (
  <ButtonGroup>
    <Button title="New Lead" flavor="neutral" onClick={action()} />
    <Button flavor={['icon', 'icon-border-filled']} onClick={action()}>
      <ButtonIcon sprite="utility" icon="down" />
    </Button>
  </ButtonGroup>
);

const bottomButtons = (
  <ButtonGroup>
    <Button flavor={['icon', 'icon-border']} onClick={action()}>
      <ButtonIcon sprite="utility" icon="chart" />
    </Button>
    <Button flavor={['icon', 'icon-border']} onClick={action()}>
      <ButtonIcon sprite="utility" icon="filterList" />
    </Button>
    <Button flavor={['icon', 'icon-border']} onClick={action()}>
      <ButtonIcon sprite="utility" icon="settings" />
    </Button>
  </ButtonGroup>
);

stories
  .add('Base', () => (
    <PageHeaderBase
      title={text('Title', 'Rohde Corp - 80,000 Widgets')}
      info={text('Info', 'Mark Jaeckal • Unlimited Customer • 11/13/15')}
      icon={object('Icon', { icon: 'opportunity', sprite: 'standard' })}
    />
  ))
  .add('RecordHome', () => (
    <RecordHome
      title={text('Title', 'Record Title')}
      recordType={text('recordType', 'Record Type')}
      icon={object('Icon', { icon: 'user', sprite: 'standard' })}
      headerButtons={headerButtons}
      detailItems={object('DetailItems', [
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
            <Button flavor={['icon', 'icon-bare']} key="icon" onClick={action()}>
              <ButtonIcon sprite="utility" icon="down" size="small" />
            </Button>
          )],
          content: 'Whatever',
        },
      ])}
    />
  ))
  .add('ObjectHome', () => (
    <ObjectHome
      title={text('Title', 'My Leads')}
      recordType={text('RecordType', 'Leads')}
      titleMenu={titleMenu}
      topButtons={topButtons}
      info={text('Info', '10 items • sorted by name')}
      bottomButtons={bottomButtons}
    />
  ));
