import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, object } from '@storybook/addon-knobs';
import { FileDecorator } from './utils/decorators';
import { getFileTypes } from './utils/helpers';
import { File } from '../src';

const stories = storiesOf('File', module);

stories
  .addDecorator(FileDecorator)
  .add('With image', () => (
    <File
      href="#"
      fileType={getFileTypes() || undefined}
      title={text('Title', 'Proposal.pdf')}
      image={object('Image', {
        alt: 'Description',
        src: 'https://lightningdesignsystem.com/assets/images/placeholder-img@16x9.jpg',
      })}
      hideTitle={boolean('HideTitle', false) || undefined}
      isLoading={boolean('IsLoading', false) || undefined}
      ratio={select('Ratio', [
        '',
        '1-by-1',
        '4-by-3',
        '16-by-9'
      ], '') || undefined}
    />
  ))
  .add('Without image', () => (
    <File
      href="#"
      fileType={getFileTypes() || undefined}
      title={text('Title', 'Proposal.pdf')}
      hideTitle={boolean('HideTitle', false) || undefined}
      isLoading={boolean('IsLoading', false) || undefined}
      ratio={select('Ratio', [
        '',
        '1-by-1',
        '4-by-3',
        '16-by-9'
      ], '') || undefined}
    />
  ))
  .add('With external Icon', () => (
    <File
      href="#"
      externalIcon={object('ExternalIcon', {
        icon: 'salesforce1',
        sprite: 'utility',
        title: 'External Icon',
      })}
      fileType={getFileTypes() || undefined}
      title={text('Title', 'Proposal.pdf')}
      hideTitle={boolean('HideTitle', false) || undefined}
      isLoading={boolean('IsLoading', false) || undefined}
      ratio={select('Ratio', [
        '',
        '1-by-1',
        '4-by-3',
        '16-by-9'
      ], '') || undefined}
    />
  ));
