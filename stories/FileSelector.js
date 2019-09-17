import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { FileSelector } from '../src';

const stories = storiesOf('FileSelector', module);

stories
  .add('Default', () => (
    <FileSelector
      accept={text('Accept', 'image/*')}
      buttonText={text('Button text', 'Upload files')}
      id="file-selector-demo"
      error={select('Has error?', {
        yes: 'Filetype not supported',
        no: null,
      }, null)}
      fatalError={select('Has fatal error?', {
        yes: 'No permission to upload media',
        no: null,
      }, null)}
      multiple={boolean('Multiple?', true)}
      onDrop={action('drop')}
      selectorText={text('Selector text', 'or drop files')}
      selectorType={select('Selector type', ['files', 'images'])}
    />
  ));
