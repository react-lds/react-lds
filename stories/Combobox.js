import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import BaseCombobox from '../src/components/Combobox/BaseCombobox';

const stories = storiesOf('Combobox', module);

const baseItems = [
  { label: 'Accounts', id: 'accounts' },
  { label: 'Reports', id: 'reports' },
  { label: 'Contacts', id: 'contacts' },
  { label: 'Group One', id: 'group-one', isHeader: true },
  { label: 'Files', id: 'files' },
  { label: 'Leads', id: 'leads' },
  { label: 'Group Two', id: 'group-two', isHeader: true },
  { label: 'Notes', id: 'notes' },
  { label: 'Groups', id: 'groups' },
];

stories
  .add('Base Combobox', () => (
    <BaseCombobox
      open={boolean('Open', false)}
      onToggle={action('Toggle')}
      onSelect={action('Select')}
      label={text('Label', 'Relate to')}
      placeholder={text('Placeholder', 'Pick a type...')}
      height={number('Dropdown Height', 5)}
      isLoading={boolean('Loading?', false)}
      id="base-combobox-demo"
      items={baseItems}
      selectedItems={['groups']}
    />
  ));
