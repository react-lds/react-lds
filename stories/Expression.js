import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, object, select } from '@storybook/addon-knobs';
import {
  Input,
  Expression,
  ExpressionRow,
  ExpressionGroup,
  Picklist,
} from '../src';
import { OPTIONS } from '../src/components/Expression/constants';

const stories = storiesOf('Expression', module);

const picklistValues = [
  { key: 'option0', label: 'Option 0', selected: true },
  { key: 'option1', label: 'Option 1', selected: false }
];
const picklist = (
  <Picklist
    id="picklist-1"
    items={picklistValues}
    onSelect={() => {}}
  />
);
const rowLabels = {
  resource: 'Resource',
  operator: 'Operator',
  value: 'Value',
  delete: 'Delete',
  resourcePlaceholder: 'Select an Option',
  operatorPlaceholder: 'Select an Option',
  valuePlaceholder: '',
};
const labels = {
  optionLabels: {
    legend: 'Take Action When',
    all: 'All conditions are met',
    any: 'Any condition is met',
    custom: 'Custom logic is met',
    always: 'Always (no criteria)',
    formula: 'Formula evaluates to true',
  },
  buttonLabels: {
    addCondition: 'Add Condition',
    addGroup: 'Add Group',
  },
  rowLabels,
  customLogicLabel: 'Custom Logic',
  customLogicPlaceholder: 'Enter custom logic'
};
const resourceItems = [
  {
    key: 'resource01',
    label: 'Resource 1',
  },
  {
    key: 'resource02',
    label: 'Resource 2',
  },
  {
    key: 'resource03',
    label: 'Resource 3',
  },
];
const operatorItems1 = [
  {
    key: '01',
    label: '=',
  },
  {
    key: '02',
    label: '!=',
  },
  {
    key: '03',
    label: '>'
  },
];
const operatorItems2 = [
  {
    key: '01',
    label: '>=',
  },
  {
    key: '02',
    label: '<',
  },
];
const valueFormComponents = {
  resource01: <Input id="foo" onChange={action('onChangeValue')} value="myValue" />,
  resource02: picklist,
  resource03: <Input id="bar" onChange={action('onChangeValue')} />,
};

stories
  .add('Expression', () => (
    <Expression
      id="ce_01"
      title={text('Title', 'Expression builder demo')}
      onSelectOption={action('onSelectOption')}
      labels={object('Labels', labels)}
      optionSelection={select('Option selection', OPTIONS, 'all')}
      resourceItems={resourceItems}
      onChangeCustomLogic={action('onChangeCustomLogic')}
      customLogicValue={text('Custom logic value', '1 AND 2')}
      onAddCondition={action('onAddCondition')}
      onAddGroup={action('onAddGroup')}
    >
      <ExpressionRow
        title="Condition 1"
        resourceSelection="resource01"
        operatorSelection="02"
        operatorItems={operatorItems1}
        onSelectResource={action('onSelectResource')}
        onSelectOperator={action('onSelectOperator')}
        onClear={action('onClear')}
        onDelete={action('onDelete')}
        valueFormComponent={valueFormComponents.resource01}
      />
      <ExpressionGroup
        onSelectOption={action('onSelectOption')}
        onDelete={action('onDelete')}
        optionSelection={select('Option selection for Group', OPTIONS, 'any')}
        customLogicValue={text('Group custom logic value', '1 OR 2')}
        onChangeCustomLogic={action('onChangeCustomLogic')}
        onAddCondition={action('onAddCondition')}
      >
        <ExpressionRow
          title="Condition 1"
          resourceSelection="resource02"
          operatorSelection="02"
          operatorItems={operatorItems2}
          onSelectResource={action('onSelectResource')}
          onSelectOperator={action('onSelectOperator')}
          onDelete={action('onDelete')}
          onClear={action('onClear')}
          valueFormComponent={valueFormComponents.resource02}
        />
        <ExpressionRow
          title="Condition 2"
          resourceSelection="resource02"
          operatorSelection="01"
          operatorItems={operatorItems2}
          onSelectResource={action('onSelectResource')}
          onSelectOperator={action('onSelectOperator')}
          onDelete={action('onDelete')}
          onClear={action('onClear')}
          valueFormComponent={valueFormComponents.resource02}
        />
      </ExpressionGroup>
      <ExpressionRow
        title="Condition 2"
        onSelectResource={action('onSelectResource')}
        onSelectOperator={action('onSelectOperator')}
        onDelete={action('onDelete')}
        operatorItems={operatorItems2}
        onChangeValue={action('onChangeValue')}
        valueFormComponent={valueFormComponents.resource02}
      />
    </Expression>
  ));
