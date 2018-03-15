import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { Icon, ScoreIcon} from '../src';
import { getSizes } from './utils/helpers';

const stories = storiesOf('Icon', module);

const svgIconTextSelect = [
  'slds-icon-text-default',
  'slds-icon-text-warning',
  'slds-icon-text-error',
  'slds-icon-text-light',
];

stories
  .add('Default', () => (
    <Icon
      icon="account"
      size={getSizes()}
      sprite="standard"
      title={text('Icon Title')}
    />
  ))
  .add('Different background class', () => (
    <Icon
      background="action-description"
      icon="account"
      size={getSizes()}
      sprite="standard"
      title={text('Icon Title', 'Account')}
    />
  ))
  .add('Utility with optional color', () => (
    <Icon
      icon="save"
      size={getSizes()}
      sprite="utility"
      svgClassName={select('SVG Class Name', svgIconTextSelect, 'slds-icon-text-default')}
      title={text('Icon Title', 'Save')}
    />
  ))
  .add('Standard Icon rendered without a background', () => (
    <Icon
      background={false}
      icon="account"
      size={getSizes()}
      sprite="standard"
      svgClassName={select('SVG Class Name', svgIconTextSelect, 'slds-icon-text-default')}
      title={text('Icon Title')}
    />
  ))
  .add('Dynamic Icons: Score', () => (
    <ScoreIcon
      className="slds-m-right_small"
      title={text('Title attribute', 'Hover me')}
      score={select('Score', ['positive', 'negative'], 'positive')}
    />
  ));

