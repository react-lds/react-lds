import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { getThemes } from './utils/helpers';
import { Box } from '../src';

const stories = storiesOf('Box', module);

stories
  .add('Default', () => (
    <Box
      size={select('size', [null, 'small', 'x-small', 'xx-small'])}
      theme={getThemes()}
    >
      test 1234
    </Box>
  ));
