import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { getThemes } from './utils/helpers';
import { Badge } from '../src';

const stories = storiesOf('Badge', module);

stories
  .add('Default', () => (
    <Badge
      onClick={action('click')}
      label={text('Label', 'Sample Badge')}
      theme={getThemes()}
    />
  ));
