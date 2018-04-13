import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, number, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {
  Input,
  Textarea,
  Select,
  PicklistRaw as Picklist,
  Checkbox,
  CheckboxRaw,
  CheckboxGroup,
  ComboboxRaw as Combobox,
  RadioRaw,
  RadioGroup,
  Slider,
} from '../src';
import { getUtilityIcons, getSizes } from './utils/helpers';

const stories = storiesOf('Form', module);

stories
  .add('Input', () => (
    <Input
      id="input-1"
      bare={boolean('Bare', false)}
      disabled={boolean('Disabled', false) || undefined}
      error={text('Error', '') || undefined}
      errorIcon={boolean('ErrorIcon', false) || undefined}
      hideLabel={boolean('Hide Label', false) || undefined}
      iconLeft={getUtilityIcons('Icon left') || undefined}
      iconRight={getUtilityIcons('Icon right') || undefined}
      iconRightOnClick={action('clicked right icon')}
      isFocused={boolean('IsFocused', false) || undefined}
      label={text('Label', 'default input')}
      onChange={action('changed input')}
      onFocus={action('focussed')}
      onKeyPress={action('key pressed')}
      placeholder={text('Placeholder', 'Placeholder')}
      readOnly={boolean('Read Only', false) || undefined}
      role={text('Role', 'input role')}
      required={boolean('Required', false) || undefined}
      showSpinner={boolean('Show Spinner', false) || undefined}
      type={select('Type', [
        'text', 'password', 'datetime', 'datetime-local', 'date', 'month',
        'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color'
      ], 'text')}
      value={text('Value', '') || undefined}
    />
  ))
  .add('Textarea', () => (
    <Textarea
      id="textarea-1"
      disabled={boolean('Disabled', false) || undefined}
      error={text('Error', '') || undefined}
      hideLabel={boolean('HideLabel', false) || undefined}
      label={text('Label', 'Tis a textarea')}
      onChange={action('changed input')}
      placeholder={text('Placeholder', 'Tis a placeholder')}
      readOnly={boolean('ReadOnly', false) || undefined}
      required={boolean('Required', false) || undefined}
    />
  ))
  .add('Select', () => (
    <Select
      disabled={boolean('Disabled', false) || undefined}
      error={text('Error', '')}
      hideLabel={boolean('HideLabel', false) || undefined}
      id="select-1"
      label={text('Label', 'Tis a label')}
      multiple={boolean('Multiple', false) || undefined}
      onChange={action('changed selection')}
      required={boolean('Required', false) || undefined}
    >
      <option>Option One</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </Select>
  ))
  .add('Slider', () => (
    <Slider
      value={number('Value', 33, { range: true, min: 0, max: 100, step: 1, })}
      min={number('Min', 0) || undefined}
      max={number('Max', 100) || undefined}
      step={number('Step', 1) || undefined}
      disabled={boolean('Disabled', false) || undefined}
      error={text('Error', '')}
      hideLabel={boolean('HideLabel', false) || undefined}
      hideErrorMessage={boolean('HideErrorMessage', false) || undefined}
      id="slider-1"
      label={text('Label', 'This is a label')}
      vertical={boolean('Vertical', false) || undefined}
      onChange={action('slider value changed')}
      size={getSizes()}
    />
  ))
  .add('Picklist', () => (
    <Picklist
      closeOnSelect={boolean('Close on select', false)}
      error={text('Error', '') || undefined}
      height={number('Height', 0) || undefined}
      id="picklist-1"
      isDisabled={boolean('Disabled', false) || undefined}
      isLabelHidden={boolean('LabelHidden', false) || undefined}
      isRequired={boolean('Required', false) || undefined}
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
      onSelect={action('selected')}
      placeholder={text('Placeholder', 'Tis a placeholder')}
      size={select('Size', ['', 'small', 'medium', 'large'], '') || undefined}
    />
  ))
  .add('Combobox', () => (
    <Combobox
      inlineListbox={boolean('Inline listbox variant', false)}
      readOnly={boolean('Read-only variant', false)}

      error={text('Error', '') || undefined}
      height={select('Height', [5, 7, 10]) || undefined}
      id="picklist-1"
      isDisabled={boolean('Disabled', false) || undefined}
      isLabelHidden={boolean('LabelHidden', false) || undefined}
      isRequired={boolean('Required', false) || undefined}
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
      value="Foo"
    />
  ))
  .add('Checkbox', () => (
    <Checkbox
      id="checkbox-1"
      label={text('Label', 'Tis a label')}
      required={boolean('Required', false) || undefined}
    />
  ))
  .add('Checkbox Group', () => (
    <CheckboxGroup
      error={text('Error', '') || undefined}
      id="fieldset-1"
      label="Fieldset"
      onChange={action()}
      required={boolean('Required', false) || undefined}
    >
      <CheckboxRaw
        id="checkbox-input-1"
        label="Checkbox Label"
      />
      <CheckboxRaw
        id="checkbox-input-2"
        label="Checkbox Label"
      />
      <CheckboxRaw
        id="checkbox-input-3"
        label="Checkbox Label"
      />
    </CheckboxGroup>
  ))
  .add('Radio Group', () => (
    <RadioGroup
      error={text('Error', '') || undefined}
      id="fieldset-2"
      label="Fieldset"
      onChange={action()}
      required={boolean('Required', false) || undefined}
    >
      <RadioRaw
        id="radio-input-1"
        label="Radio Label"
        name="group-1"
      />
      <RadioRaw
        id="radio-input-2"
        label="Radio Label"
        name="group-1"
      />
      <RadioRaw
        id="radio-input-3"
        label="Radio Label"
        name="group-1"
      />
    </RadioGroup>
  ))
  .add('Horizontal form', () => (
    <div className={text('className', 'slds-form slds-form_horizontal')}>
      <Input
        id="input-1"
        placeholder="Placeholder"
        label="Input label"
      />
      <Textarea
        id="textarea-1"
        placeholder="Placeholder"
        label="Textarea label"
      />
      <CheckboxGroup
        id="fieldset-1"
        label="Fieldset"
      >
        <CheckboxRaw
          id="checkbox-input-1"
          label="Checkbox Label"
        />
        <CheckboxRaw
          id="checkbox-input-2"
          label="Checkbox Label"
        />
        <CheckboxRaw
          id="checkbox-input-3"
          label="Checkbox Label"
        />
      </CheckboxGroup>
    </div>
  ))
  .add('Stacked form', () => (
    <div className={text('className', 'slds-form slds-form_stacked')}>
      <Input
        id="input-1"
        placeholder="Placeholder"
        label="Input label"
      />
      <Textarea
        id="textarea-1"
        placeholder="Placeholder"
        label="Textarea label"
      />
      <CheckboxGroup
        id="fieldset-1"
        label="Fieldset"
      >
        <CheckboxRaw
          id="checkbox-input-1"
          label="Checkbox Label"
        />
        <CheckboxRaw
          id="checkbox-input-2"
          label="Checkbox Label"
        />
        <CheckboxRaw
          id="checkbox-input-3"
          label="Checkbox Label"
        />
      </CheckboxGroup>
    </div>
  ));
