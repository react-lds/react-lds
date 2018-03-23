import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import {
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuItem,
  StatefulIconButton
} from '../src';

const stories = storiesOf('ButtonGroup', module);

stories
  .add('Default', () => (
    <ButtonGroup list={boolean('Render as list', false)}>
      <Button title="Refresh" />
      <Button title="Edit" />
      <Button title="Save" disabled={boolean('Disable last button', false)} />
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
        <Button title="Refresh" />
        <Button title="Edit" />
        <Button title="Save" />
        <Menu
          button={menuButton}
          isOpen={boolean('Open menu', false)}
          last
          position="top-right"
          size={null}
        >
          <MenuItem onClick={action()}>Item 1</MenuItem>
          <MenuItem onClick={action()}>Item 2</MenuItem>
          <MenuItem onClick={action()}>Item 3</MenuItem>
        </Menu>
      </ButtonGroup>
    );
  })
  .add('Inverse', () => (
    <div style={{ padding: '0.5rem', backgroundColor: 'rgb(22, 50, 92)' }}>
      <ButtonGroup>
        <Button flavor="inverse" title="Refresh" />
        <Button flavor="inverse" title="Edit" disabled={boolean('Disable last button', false)} />
        <Button flavor="inverse" title="Save" />
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
  ));
