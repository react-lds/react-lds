import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb } from '../src';

const stories = storiesOf('Breadcrumb', module);

stories
  .add('Default', () => (
    <Breadcrumb>
      <a href="#top" key="id-1">Link1</a>
      <a href="#top" key="id-2">Link2</a>
    </Breadcrumb>
  ));
