import React from 'react';
import { mount } from 'enzyme';
import ExpressionRow from '../ExpressionRow';
import { Input } from '../../../Form';

const resourceItems = [
  {
    key: '01',
    label: 'one',
  },
  {
    key: '02',
    label: 'two',
  }
];
const rowLabels = {
  delete: 'foo',
  operator: 'foo',
  operatorPlaceholder: 'foo',
  resource: 'foo',
  resourcePlaceholder: 'foo',
  value: 'foo',
  valuePlaceholder: 'foo',
};
const valueFormComponent = <Input id="heya" />;
const defaultProps = {
  id: 'heyo',
  operator: 'AND',
  rowLabels,
  title: 'heyi',
  valueFormComponent,
  onDelete: () => {},
  onSelectResource: () => {},
  onSelectOperator: () => {},
  onSelectValue: () => {},
  onChangeValue: () => {}
};
const getExpressionRow = (props = {}) => mount(<ExpressionRow {...defaultProps} {...props} />);

describe('<ExpressionRow />', () => {
  it('renders correct markup', () => {
    const mounted = getExpressionRow();
    expect(mounted.find('.slds-expression__row')).toHaveLength(1);
  });

  it('renders the title as assistive text', () => {
    const mounted = getExpressionRow();
    expect(mounted.find('.slds-assistive-text').first().text()).toEqual('heyi');
  });

  it('renders errors on the operator form element', () => {
    const mounted = getExpressionRow({ resourceError: 'myerror' });
    expect(mounted.find('.slds-form-element__help').first().text()).toEqual('myerror');
  });

  it('sets the necessary class when in a group', () => {
    const mounted = getExpressionRow({ isGroupRow: true });
    expect(mounted.find('.slds-expression__row').hasClass('slds-expression__row_group')).toEqual(true);
  });

  it('renders resource items and the selected resource item', () => {
    const mounted = getExpressionRow({ resourceItems, resourceSelection: '02' });
    expect(mounted.find('.slds-dropdown.slds-listbox.slds-listbox_vertical').children().length).toEqual(2);
    expect(mounted.find('input').first().props().value).toEqual('two');
  });

  it('disables the delete button when prop is set', () => {
    const mounted = getExpressionRow({ disableDelete: true });
    expect(mounted.find('button').last().props().disabled).toEqual(true);
  });

  it('disables input fields until field to the left has a value', () => {
    let mounted = getExpressionRow();
    expect(mounted.find('Picklist').at(1).props().disabled).toEqual(true);
    expect(mounted.find('Input').first().props().disabled).toEqual(true);
    mounted = getExpressionRow({ resourceSelection: '01' });
    expect(mounted.find('Picklist').at(1).props().disabled).toEqual(false);
    expect(mounted.find('Input').first().props().disabled).toEqual(true);
  });

  it('calls onClear and onDelete at right times', () => {
    const onDelete = jest.fn();
    const onClear = jest.fn();
    let mounted = getExpressionRow({ onDelete, onClear });
    let button = mounted.find('button').last();
    button.simulate('click');
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onClear).toHaveBeenCalledTimes(0);
    mounted = getExpressionRow({ onDelete, onClear, resourceSelection: '01' });
    button = mounted.find('button').last();
    button.simulate('click');
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
