import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Combobox, ControlledCombobox } from '../src';

const stories = storiesOf('Combobox', module);

stories
  .add('Default', () => (
    <Combobox
      inlineListbox={boolean('Inline listbox variant', false)}
      readOnly={boolean('Read-only variant', false)}
      error={text('Error', '') || undefined}
      height={select('Height', [undefined, 5, 7, 10]) || undefined}
      id="picklist-1"
      disabled={boolean('Disabled', false) || undefined}
      hideLabel={boolean('Label hidden', false) || undefined}
      required={boolean('Required', false) || undefined}
      items={object('Items', [
        { key: 'header1', label: 'Header 1', isHeader: true },
        { key: 'option1', label: 'Option 1', selected: false },
        { key: 'option2', label: 'Option 2', selected: false },
        { key: 'option3', label: 'Option 3', selected: false },
        { key: 'option4', label: 'Option 4', selected: false },
        { key: 'option5', label: 'Option 5', selected: false },
        { key: 'header2', label: 'Header 2', isHeader: true },
        { key: 'option6', label: 'Option 6', selected: false },
      ])}
      labelInput={text('Label', 'Tis a input label')}
      labelMultiselect={text('MultiSelect', '*multiselect label*')}
      onAdd={action('added')}
      onChange={action('changed')}
      onSelect={action('selected')}
      placeholder={text('Placeholder', 'Tis a placeholder')}
    />
  ))
  .add('Controlled Combobox', () => (
    <ControlledCombobox
      inlineListbox={boolean('Inline listbox variant', false)}
      readOnly={boolean('Read-only variant', false)}
      error={text('Error', '') || undefined}
      height={select('Height', [undefined, 5, 7, 10]) || undefined}
      id="picklist-1"
      isDisabled={boolean('Disabled', false) || undefined}
      hideLabel={boolean('Label hidden', false) || undefined}
      required={boolean('Required', false) || undefined}
      items={object('Items', [
        { key: 'header1', label: 'Header 1', isHeader: true },
        { key: 'option1', label: 'Option 1', selected: false },
        { key: 'option2', label: 'Option 2', selected: false },
        { key: 'option3', label: 'Option 3', selected: false },
        { key: 'option4', label: 'Option 4', selected: false },
        { key: 'option5', label: 'Option 5', selected: false },
        { key: 'header2', label: 'Header 2', isHeader: true },
        { key: 'option6', label: 'Option 6', selected: false },
      ])}
      labelInput={text('Label', 'Tis a input label')}
      labelMultiselect={text('MultiSelect', '*multiselect label*')}
      onAdd={action('added')}
      onChange={action('changed')}
      onSelect={action('selected')}
      placeholder={text('Placeholder', 'Tis a placeholder')}
    />
  ));
