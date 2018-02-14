import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import {
  Button,
  ButtonIcon,
  ButtonGroup,
  IconButton,
  Menu,
  MenuDropdownList,
  MenuDropdownListItem,
  StatefulIconButton
} from '../src';

const stories = storiesOf('ButtonGroup', module);

stories
  .add('Default', () => (
    <ButtonGroup list={boolean('Render as list', false)}>
      <Button>Refresh</Button>
      <Button>Edit</Button>
      <Button disabled={boolean('Disable last button', false)}>Save</Button>
    </ButtonGroup>
  ))
  .add('Overflow Menu', () => {
    const menuButton = (
      <IconButton
        aria-haspopup="true"
        border="filled"
        disabled={boolean('Disable overflow menu', false)}
        onClick={action()}
        icon="down"
        sprite="utility"
        title="Show More"
      />
    );

    return (
      <ButtonGroup>
        <Button>Refresh</Button>
        <Button>Edit</Button>
        <Button>Save</Button>
        <Menu
          customButton={menuButton}
          isOpen={boolean('Open menu', false)}
          last
          position="right"
          size={null}
        >
          <MenuDropdownList>
            <MenuDropdownListItem onClick={action()}>Item 1</MenuDropdownListItem>
            <MenuDropdownListItem onClick={action()}>Item 2</MenuDropdownListItem>
            <MenuDropdownListItem onClick={action()}>Item 3</MenuDropdownListItem>
          </MenuDropdownList>
        </Menu>
      </ButtonGroup>
    )
  })
  .add('Inverse', () => (
    <div style={{ padding: '0.5rem', 'background-color': 'rgb(22, 50, 92)' }}>
      <ButtonGroup>
        <Button flavor="inverse">Refresh</Button>
        <Button flavor="inverse" disabled={boolean('Disable middle', false)}>Edit</Button>
        <Button flavor="inverse">Save</Button>
      </ButtonGroup>
    </div>
  ))
  .add('Icon Group', () => (
    <ButtonGroup>
      <IconButton
        border="filled"
        title="Charts"
        icon="chart"
        sprite="utility"
      />
      <IconButton
        border="filled"
        title="Filter List"
        icon="filterList"
        sprite="utility"
      />
      <IconButton
        more
        border="filled"
        title="Setting"
        icon="settings"
        sprite="utility"
      />
    </ButtonGroup>
  ))
  .add('Icon Group with Selection', () => (
    <ButtonGroup>
      <StatefulIconButton icon="chart" sprite="utility" selected />
      <StatefulIconButton icon="filterList" sprite="utility" />
      <StatefulIconButton icon="settings" sprite="utility" />
    </ButtonGroup>
  ))
