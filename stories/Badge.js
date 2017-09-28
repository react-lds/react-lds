import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { getThemes, withPadding } from './utils/helpers';
import { Badge } from '../src';

const stories = storiesOf('Badge', module);

stories
  .addDecorator(withPadding)
  .addDecorator(withKnobs);

const renderDefault = () => (
  <Badge
    onClick={action('click')}
    label={text('Label', 'Sample Badge')}
    theme={getThemes()}
  />
);

stories.add('Default', withInfo()(renderDefault));
