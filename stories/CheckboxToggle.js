import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { CheckboxToggle } from '../src';

const stories = storiesOf('CheckboxToggle', module);

stories
  .add('Controlled (Default)', () => (
    <CheckboxToggle
      id="toggle-1"
      label={text('Label', 'ToggleLabel')}
      checked={boolean('Checked', false)}
      disabled={boolean('Disabled', false)}
      onChange={action('Change')}
      hideStatusLabels={boolean('Hide status labels?', false)}
      hideLabel={boolean('Hide label?', false)}
    />
  ))
  .add('Uncontrolled', () => (
    <CheckboxToggle
      id="toggle-1"
      label="Toggle Label"
      checked={null}
      onChange={action('Change')}
    />
  ));
