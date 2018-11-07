import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Avatar, UserAvatar, EntityAvatar } from '../src';
import { getSizes } from './utils/helpers';

const stories = storiesOf('Image', module);

stories
  .add('User Avatar', () => (
    <UserAvatar
      imageSrc={text('Src', 'assets/images/avatar2.jpg')}
      fallbackType={select('Fallback (remove imageSrc to see)', [
        'profile-image',
        'group-image',
        'icon',
        'initials',
        'initials-inverse'
      ], 'icon')}
      name={text('User Name', 'John Doe')}
      round={boolean('Round?', false)}
      size={getSizes()}
      title={text('Title', 'Avatar of record owner')}
    />
  ))
  .add('Entity Avatar', () => (
    <EntityAvatar
      displayType={select('Fallback Type (remove imageSrc to see effect', ['icon', 'initials'], 'icon')}
      icon={{
        sprite: 'standard',
        icon: 'account',
      }}
      name={text('Entity Name', 'Record Type')}
      size={getSizes()}
      title={text('Title', 'Icon of Record Type')}
    />
  ))
  .add('Avatar (Deprecated)', () => (
    <Avatar
      alt={text('Alt', 'alt text')}
      src={text('Src', 'assets/images/avatar2.jpg')}
      size={getSizes()}
      title={text('Title', 'Mr Nobody avatar')}
      circle={boolean('Circle', false)}
    />
  ));
