import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import {
  Tooltip,
  IconButton,
} from '../src';
import { POSITIONS } from '../src/components/Tooltip/ControlledTooltip';
import { TooltipsDecorator } from './utils/decorators';

const stories = storiesOf('Tooltip', module);

stories
  .addDecorator(TooltipsDecorator)
  .add('Uncontrolled', () => (
    <Tooltip
      id="sample-tooltip"
      title={text('Title', 'This field is required')}
      position={select('Position', POSITIONS, 'top-start')}
    >
      <IconButton
        icon="info"
        sprite="utility"
      />
    </Tooltip>
  ))
  .add('Custom render function', () => (
    <Tooltip
      id="sample-tooltip"
      renderTitle={title => (<b>{title}</b>)}
      title={text('Title', 'This field is required')}
      position={select('Position', POSITIONS, 'top-start')}
    >
      <IconButton icon="info" sprite="utility" />
    </Tooltip>
  ));

