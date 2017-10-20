import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Pill, Avatar, Icon } from '../src';

const stories = storiesOf('Pill', module);

const portrait = (<Avatar alt="Image" src="assets/images/avatar2.jpg" circle title="avatar title" />);
const icon = (<Icon div sprite="standard" icon="account" title="description of icon" />);

stories
  .add('Default', () => (
    <Pill
      url={text('URL', '#canBeEmptyForUnlinkedPill')}
      label={text('Label', 'Pill Label')}
      title={text('Title', 'Full pill label verbiage mirrored here')}
      onClose={action()}
    />
  ))
  .add('Truncated', () => (
    <div style={{ width: '220px' }}>
      <Pill
        url={text('URL', '#canBeEmptyForUnlinkedPill')}
        label={text('Label', 'Pill Label is very long and very boring')}
        title={text('Title', 'Full pill label verbiage mirrored here')}
        onClose={action()}
      />
    </div>
  ))
  .add('With Portrait', () => (
    <Pill
      url={text('URL', '#canBeEmptyForUnlinkedPill')}
      label={text('Label', 'Pill Label')}
      title={text('Title', 'Full pill label verbiage mirrored here')}
      onClose={action()}
      portrait={portrait}
    />
  ))
  .add('With Icon', () => (
    <Pill
      url={text('URL', '#canBeEmptyForUnlinkedPill')}
      label={text('Label', 'Pill Label')}
      title={text('Title', 'Full pill label verbiage mirrored here')}
      onClose={action()}
      icon={icon}
    />
  ))
  .add('Without close Button', () => (
    <Pill
      url={text('URL', '#canBeEmptyForUnlinkedPill')}
      label={text('Label', 'Pill Label')}
      title={text('Title', 'Full pill label verbiage mirrored here')}
    />
  ));
