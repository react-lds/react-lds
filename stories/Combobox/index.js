/* eslint-disable react/no-multi-comp */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { getDropdownHeights } from '../utils/helpers';
import { AutoCompleteCombobox, BaseCombobox, EntityCombobox } from '../../src';
import { ComboboxCore } from '../../src/components/Combobox/components';

import { BaseComboboxDemo } from './BaseComboboxDemo';
import { AutoCompleteComboboxDemo } from './AutoCompleteComboboxDemo';
import { BASE_ITEMS } from './constants';
import { AsyncComboboxDemo } from './AsyncDemo';

const stories = storiesOf('Combobox', module);

const selectedOptions = {
  None: [],
  One: [BASE_ITEMS[0]],
  Multiple: [BASE_ITEMS[0], BASE_ITEMS[2], BASE_ITEMS[7]],
};

const baseInfo = {
  propTables: [ComboboxCore],
};

stories
  .add('Docs: Base Combobox', () => (
    <BaseCombobox
      isMultiSelect
      isOpen={boolean('Open', false)}
      items={BASE_ITEMS}
      selectedItems={select('Selected Items', selectedOptions, [])}
      label={text('Label', 'Relate To')}
      placeholder={text('Placeholder', 'Pick a type...')}
      height={select('Height', getDropdownHeights(), 5)}
      isLoading={boolean('Loading?', false)}
      id="base-combobox-demo"
      onToggle={action('toggle')}
      onSelect={action('select')}
    />
  ), {
    info: {
      ...baseInfo,
      text: `
        BaseCombobox\` extends \`ComboboxCore\`. It controls the following props: renderItem, renderInput, renderItemsAppended, renderItemsPreprended.
      `,
    }
  })
  .add('Demo: Base Combobox', () => (
    <BaseComboboxDemo
      isMultiSelect={boolean('Allow multiple selections', false)}
      closeOnSelect={boolean('Close on Select', true)}
      label={text('Label', 'Relate To')}
      placeholder={text('Placeholder', 'Pick a type...')}
      height={select('Height', getDropdownHeights(), 5)}
      isLoading={boolean('Loading?', false)}
      id="base-combobox-demo"
    />
  ))
  .add('Docs: Autocomplete Combobox', () => (
    <AutoCompleteCombobox
      isOpen={boolean('Open', false)}
      items={BASE_ITEMS}
      selectedItems={select('Selected Items', selectedOptions, [])}
      search={text('Search', '')}
      placeholder="Search"
      id="base-combobox-demo"
      label="Relate To"
      onSearch={action('search:change')}
      onSelect={action('select')}
      onToggle={action('toggle')}
    />
  ), { info: baseInfo })
  .add('Demo: Autocomplete Combobox Integration', () => (
    <AutoCompleteComboboxDemo
      isMultiSelect={boolean('Allow multiple selections', false)}
      closeOnSelect={boolean('Close on Select', true)}
      label={text('Label', 'Relate To')}
      placeholder={text('Placeholder', 'Pick a type...')}
      height={select('Height', getDropdownHeights(), 5)}
      isLoading={boolean('Loading?', false)}
      id="base-combobox-demo"
    />
  ))
  .add('Docs: Entity Combobox', () => {
    const items = BASE_ITEMS.map(item => ({
      ...item,
      icon: {
        icon: 'account',
        sprite: 'standard',
      },
      meta: 'Account · San Francisco, CA'
    }));

    const entitySelections = {
      None: [],
      One: [items[0]],
      Multiple: [items[0], items[2], items[7]],
    };

    return (
      <EntityCombobox
        isOpen={boolean('Open', false)}
        items={items}
        selectedItems={select('Selected Items', entitySelections, [])}
        search={text('Search', '')}
        placeholder="Search"
        id="base-combobox-demo"
        label="Relate To"
        onSearch={action('search:change')}
        onSelect={action('select')}
        onToggle={action('toggle')}
      />
    );
  }, { info: baseInfo })
  .add('Demo: Async Search', () => (
    <AsyncComboboxDemo
      id="async-combobox-demo"
      label={text('Label', 'Relate To')}
      placeholder={text('Placeholder', 'Pick a type...')}
      height={select('Height', getDropdownHeights(), 5)}
    />
  ));
