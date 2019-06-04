/* eslint-disable react/no-multi-comp */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { getDropdownHeights } from '../utils/helpers';
import { AutoCompleteCombobox, BaseCombobox, EntityCombobox } from '../../src';
import ComboboxCore from '../../src/components/Combobox/components/ComboboxCore';

import { BaseComboboxDemo } from './BaseComboboxDemo';
import { AutoCompleteComboboxDemo } from './AutoCompleteComboboxDemo';
import { BASE_ITEMS } from './constants';
import { AsyncComboboxDemo } from './AsyncDemo';
import { ExpandableListboxDemo } from './ExandableListboxDemo';

const stories = storiesOf('Combobox', module);

const selectedOptions = {
  None: [],
  One: [BASE_ITEMS[0]],
  Multiple: [BASE_ITEMS[0], BASE_ITEMS[2], BASE_ITEMS[7]],
};

/* eslint-disable max-len */
const docs = `
### Items & Selections

Comboboxes are supplied an array of \`items\` that indicate selectable options and \`selectedItems\` that indicate the current selection state. Both should contain items of an identical shape:

\`\`\` js
const item = {
  // Required
  id: '001',
  label: 'A label',
  // Optional
  meta: <span>React Node</span>,
  icon: { icon: '', sprite: 'utility' },
  // Any additional key can be accessed in render functions
  ...rest
};
\`\`\`

Comboboxes can either support _one_ or _multiple_ selections which will reflect in the way that selections are rendered. To support multiple selections set \`isMultiSelect\` to \`true\`.

> Please be aware that the container is responsible to validate that a single selection combobox actually receives a single selection. See the _Callbacks_ section for more information on how \`onSelect\` works

\`isOpen\` indicates whether the selection dropdown should be visible. \`isLoading\` indicates whether a loading spinner should be appended to the result list.

### Sublists

To split the \`items\` dropdown into sublists, pass in special header \`items\`:

\`\`\` js
const items = [{
  id: '001',
  label: 'Item in List A'
}, {
  id: 'header-list2',
  label: 'Header for List B',
  isHeader: true,
}, {
  id: '002',
  label: 'Item in List B'
}]
\`\`\`

You do not need to pass nested arrays, the list will be split whenever \`isHeader: true\` is encountered.

### Callbacks

Comboboxes are fully controlled components. \`onSelect\` and \`onToggle\` callbacks are required to be bound in order to interface with the component. Variants that allow search input also require \`onSearch\` and \`search\` to be set.

The component manages all mouse and keyboard interactions. The callback should support the following call signatures:

\`\`\` js
  onToggle(isOpen) {}

  onSelect(itemId, {
    // Indicates that the item that is being added does not originate from the selectable \`items\` but has been created. It's up to the container to support and implement this
    isAdd,
    // Indicates that the selection state should be replaced with this item. Typically true for Comboboxes with a single selection
    isReplace,
    // Indicates that the selected item should be removed from the selection state
    isRemove,
  })

  onSearch(value, { isClear }) {}
\`\`\`

### Render Functions

\`renderInput\`, \`renderItem\` and \`renderListbox\` can be used to customize the rendering of the \`Combobox\`. Each Combobox variants implements a default renderer that complies with the LDS specifications. Each render function is called with the signature \`(props, opts)\`:

\`\`\` js
// Can be directly applied to the underlying target component (e.g. renderListbox => ComboboxListbox)
const props = {};

// Additional props that are handy to build custom functionality
const opts = {
  // Whether the Combobox supports multiple selections
  isMultiSelect,
  // Currently selected items, mirrors \`props.items\`
  items,
  // Current keyboard selection
  keyboardSelection,
  // Currently selected items, mirrors \`props.selectedItems\`
  selectedItems,
  // Returns onSelect that should be called like \`makeSelectHandler(id)\`
  makeSelectHandler: this.makeSelectHandler
};
\`\`\`

Please always use \`makeSelectHandler\` to generate an \`onSelect\` callback as that function is memoized and is supplied with the appropriate arguments.

To append or prepend elements to the result lists, use \`renderItemsAppended\` and \`renderItemsPrepended\`. These functions are called without arguments.

### Variants

#### BaseCombobox (alias Picklist)

A \`Picklist\` should be used when a selection is made without requiring a user search to be performed. When multiple selections are possible, the \`input\` will be filled with an interpolated \`labelMultiSelect\`. If you choose to overwrite the \`renderInput\` function, \`opts.labelMultiSelect\` will be available in the renderer.

#### AutoCompleteCombobox

This combobox should be used when:

 - Items are not entities
 - The selection should always close after an item is selected
 - Input is used to search / filter a list of possible
 - Users are allowed to create their own items (see Callbacks)

As mentioned in _Callbacks_, you'll have to supply \`onSearch\` and \`search\` to handle user input.

#### EntityCombobox

This combobox should be used when:

 - Items are entities (=records)
 - Search operations are common

> \`items\` and \`selectedItems\` require \`icon: {}\` to point to a valid LDS icon.
`;
/* eslint-enable max-len */

const baseInfo = {
  propTables: [ComboboxCore],
  text: docs,
};

stories
  .add('Docs: Base Combobox', () => (
    <BaseCombobox
      isMultiSelect
      isOpen={boolean('Open', false)}
      error={text('Error', '')}
      items={BASE_ITEMS}
      selectedItems={select('Selected Items', selectedOptions, [])}
      label={text('Label', 'Relate To')}
      placeholder={text('Placeholder', 'Pick a type...')}
      height={select('Height', getDropdownHeights(), 5)}
      hideErrorMessage={boolean('Hide error text?', false)}
      isLoading={boolean('Loading?', false)}
      isRequired={boolean('Required?', false)}
      id="base-combobox-demo"
      onToggle={action('toggle')}
      onSelect={action('select')}
    />
  ), { info: baseInfo })
  .add('Demo: Base Combobox', () => (
    <BaseComboboxDemo
      isMultiSelect={boolean('Allow multiple selections', false)}
      error={text('Error', '')}
      closeOnSelect={boolean('Close on Select', true)}
      label={text('Label', 'Relate To')}
      placeholder={text('Placeholder', 'Pick a type...')}
      height={select('Height', getDropdownHeights(), 5)}
      hideErrorMessage={boolean('Hide error text?', false)}
      isLoading={boolean('Loading?', false)}
      isRequired={boolean('Required?', false)}
      id="base-combobox-demo"
    />
  ))
  .add('Docs: Autocomplete Combobox', () => (
    <AutoCompleteCombobox
      isOpen={boolean('Open', false)}
      error={text('Error', '')}
      items={BASE_ITEMS}
      selectedItems={select('Selected Items', selectedOptions, [])}
      search={text('Search', '')}
      placeholder="Search"
      id="base-combobox-demo"
      hideErrorMessage={boolean('Hide error text?', false)}
      isRequired={boolean('Required?', false)}
      label="Relate To"
      onSearch={action('search:change')}
      onSelect={action('select')}
      onToggle={action('toggle')}
    />
  ), { info: baseInfo })
  .add('Demo: Autocomplete Combobox Integration', () => (
    <AutoCompleteComboboxDemo
      hideErrorMessage={boolean('Hide error text?', false)}
      isMultiSelect={boolean('Allow multiple selections', true)}
      isRequired={boolean('Required?', false)}
      error={text('Error', '')}
      closeOnSelect={boolean('Close on Select', false)}
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
        hideErrorMessage={boolean('Hide error text?', false)}
        isOpen={boolean('Open', false)}
        isRequired={boolean('Required?', false)}
        error={text('Error', '')}
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
      hideErrorMessage={boolean('Hide error text?', false)}
      isRequired={boolean('Required?', false)}
      error={text('Error', '')}
      label={text('Label', 'Relate To')}
      placeholder={text('Placeholder', 'Pick a type...')}
      height={select('Height', getDropdownHeights(), 5)}
    />
  ))
  .add('Demo: Expandable Listbox', () => (<ExpandableListboxDemo />))
