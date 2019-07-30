import React from 'react';
import { mount } from 'enzyme';
import ExpressionRow from '../ExpressionRow';
import ExpressionGroup from '../ExpressionGroup';
import { Input } from '../../../Form';
import { CUSTOM } from '../../constants';

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
  onAddCondition: () => {},
  onChangeCustomLogic: () => {},
  onSelectOption: () => {},
  rowLabels,
};
const getExpressionGroup = (props = {}) => mount(
  <ExpressionGroup
    {...defaultProps}
    {...props}
  >
    <ExpressionRow valueFormComponent={valueFormComponent} />
  </ExpressionGroup>
);

describe('<ExpressionRow />', () => {
  it('renders correct markup', () => {
    const mounted = getExpressionGroup();
    expect(mounted.find('.slds-expression__group')).toHaveLength(1);
    expect(mounted.find('.slds-expression__row')).toHaveLength(1);
  });

  it('shows the custom logic field if necessary', () => {
    let mounted = getExpressionGroup();
    expect(mounted.find('.slds-expression__custom-logic')).toHaveLength(0);
    mounted = getExpressionGroup({ optionSelection: CUSTOM });
    expect(mounted.find('.slds-expression__custom-logic')).toHaveLength(1);
  });

  it('forwards resourceItems to ExpressionRow children', () => {
    const mounted = getExpressionGroup({ resourceItems });
    expect(mounted.find('.slds-dropdown').at(1).children()).toHaveLength(2);
  });

  it('calls button function', () => {
    const onAddCondition = jest.fn();
    const mounted = getExpressionGroup({ onAddCondition });
    const button = mounted.find('.slds-button.slds-button_neutral');
    button.simulate('click');
    expect(onAddCondition).toHaveBeenCalled();
  });

  it('disables delete on the ExpressionRow', () => {
    const mounted = getExpressionGroup({ disableDelete: true });
    expect(mounted.find('.slds-button.slds-button_icon.slds-button_icon-border-filled')
      .first().props().disabled).toEqual(true);
  });

  it('forwards labels to rows', () => {
    const mounted = getExpressionGroup();
    expect(mounted.find('.slds-button.slds-button_icon.slds-button_icon-border-filled').props().title).toEqual('foo');
  });
});
