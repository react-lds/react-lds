import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { getThemes } from './utils/helpers';
import { Badge, Icon } from '../src';

const stories = storiesOf('Badge', module);

stories
  .add('Default', () => (
    <Badge
      onClick={action('click')}
      theme={getThemes()}
    >
      {text('Children', 'Sample Badge')}
    </Badge>
  ))
  .add('Badge with left icon', () => (
    <Badge
      onClick={action('click')}
      flavor="lightest"
    >
      <Icon
        className="slds-current-color slds-m-right_xx-small"
        sprite="utility"
        icon="save"
        size="xx-small"
      />
      {text('Children', 'Sample Badge')}
    </Badge>
  ))
  .add('Inverted badge', () => (
    <Badge
      onClick={action('click')}
      flavor="inverse"
    >
      {text('Children', 'Sample Badge')}
    </Badge>
  ))
  .add('Icon-only Badge with assistive-text', () => (
    <Badge onClick={action('click')} title={text('Assistive Title', 'Save')}>
      <Icon
        className="slds-current-color"
        sprite="utility"
        icon="save"
        size="xx-small"
      />
    </Badge>
  ));

