import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import { Pill, PillContainer, Avatar, Icon } from '../src';

const stories = storiesOf('Pill', module);

const portrait = (<Avatar alt="Image" src="assets/images/avatar2.jpg" circle title="avatar title" />);
const icon = (<Icon div sprite="standard" icon="account" title="description of icon" />);

stories
  .add('Default', () => (
    <Pill
      bare={boolean('Bare', false)}
      url={text('URL', '#canBeEmptyForUnlinkedPill')}
      label={text('Label', 'Pill Label')}
      title={text('Title', 'Full pill label verbiage mirrored here')}
      onClose={action()}
    />
  ))
  .add('Truncated', () => (
    <div style={{ width: '220px' }}>
      <Pill
        bare={boolean('Bare', false)}
        url={text('URL', '#canBeEmptyForUnlinkedPill')}
        label={text('Label', 'Pill Label is very long and very boring')}
        title={text('Title', 'Full pill label verbiage mirrored here')}
        onClose={action()}
      />
    </div>
  ))
  .add('With Portrait', () => (
    <Pill
      bare={boolean('Bare', false)}
      url={text('URL', '#canBeEmptyForUnlinkedPill')}
      label={text('Label', 'Pill Label')}
      title={text('Title', 'Full pill label verbiage mirrored here')}
      onClose={action()}
      portrait={portrait}
    />
  ))
  .add('With Icon', () => (
    <Pill
      bare={boolean('Bare', false)}
      url={text('URL', '#canBeEmptyForUnlinkedPill')}
      label={text('Label', 'Pill Label')}
      title={text('Title', 'Full pill label verbiage mirrored here')}
      onClose={action()}
      icon={icon}
    />
  ))
  .add('Without close Button', () => (
    <Pill
      bare={boolean('Bare', false)}
      url={text('URL', '#canBeEmptyForUnlinkedPill')}
      label={text('Label', 'Pill Label')}
      title={text('Title', 'Full pill label verbiage mirrored here')}
    />
  ))
  .add('With Container', () => (
    <PillContainer>
      <Pill
        onClick={action('clicked')}
        url="#lightningOut"
        icon={icon}
        label="test"
        title="test"
      />
    </PillContainer>
  ));
