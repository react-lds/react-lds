import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Avatar } from '../src';
import { getSizes } from './utils/helpers';

const stories = storiesOf('Image', module);

stories
  .add('Default', () => (
    <Avatar
      alt={text('Alt', 'alt text')}
      src={text('Src', '/assets/images/avatar2.jpg')}
      size={getSizes()}
      title={text('Title', 'Mr Nobody avatar')}
      circle={boolean('Circle', false)}
    />
  ));
