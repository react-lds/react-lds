import React from 'react';
import { storiesOf } from '@storybook/react';
import { array, boolean, select, text } from '@storybook/addon-knobs';
import { Icon, MediaObject } from '../src';

const stories = storiesOf('MediaObject', module);

const icon = <Icon sprite="standard" icon="opportunity" />;
const sampleText = (
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur
  sapiente. Modi veritatis totam accusantium numquam assumenda.</p>
);

stories
  .add('With icon left', () => (
    <MediaObject
      customTag={text('Custom HTML-tag', '') || undefined}
      figureLeft={icon}
      flavor={array('Flavor', ['center', 'responsive'])}
      size={select('Size', ['', 'small', 'large'], 'small') || undefined}
      truncate={boolean('Truncate', false)}
      title={text('Title', 'This is a tooltip displayed on mouseover, necessary when truncate is used') || undefined}
    >
      {sampleText}
    </MediaObject>
  ))
  .add('With two icons', () => (
    <MediaObject
      customTag={text('Custom HTML-tag', '') || undefined}
      figureLeft={icon}
      figureRight={icon}
      flavor={array('Flavor', ['center'])}
      size={select('Size', ['', 'small', 'large'], '') || undefined}
      truncate={boolean('Truncate', false)}
      title={text('Title', 'This is a tooltip displayed on mouseover, necessary when truncate is used') || undefined}
    >
      {sampleText}
    </MediaObject>
  ));
