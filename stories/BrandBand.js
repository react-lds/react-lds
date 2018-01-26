import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { BrandBand } from '../src';

const stories = storiesOf('BrandBand', module);

stories
  .add('Default', () => (
    <div style={{ height: '16.25rem' }}>
      <BrandBand
        size={select('size', ['small', 'medium', 'large'])}
        noBackground={boolean('No background', false)}
        cover={boolean('Cover background instead of contain', false)}
      />
    </div>
  ));
