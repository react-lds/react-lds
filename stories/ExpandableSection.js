import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { ExpandableSection } from '../src';

const stories = storiesOf('ExpandableSection', module);

stories
  .add('Default', () => (
    <ExpandableSection
      id="es_01"
      title={text('Title', 'Section title')}
      defaultOpen={boolean('DefaultOpen', false)}
      uncollapsable={boolean('Uncollapsable', false)}
    >
      <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
      Nulla vitae elit libero, a pharetra augue.</p>
    </ExpandableSection>
  ))
  .add('Controlled', () => (
    <ExpandableSection
      id="es_02"
      title={text('Title', 'Section title')}
      open={boolean('Open', true)}
      onToggle={action('toggled')}
      uncollapsable={boolean('Uncollapsable', false)}
    >
      <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
      Nulla vitae elit libero, a pharetra augue.</p>
    </ExpandableSection>
  ));
