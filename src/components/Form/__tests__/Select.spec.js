import React from 'react';
import { mount } from 'enzyme';

import { getUniqueHash } from '../../../utils';
import Select from '../Select';

describe('<Select />', () => {
  let props = {};
  let mounted = null;

  beforeEach(() => {
    props = {
      id: 'select-id',
      label: 'Select Label',
      onChange: jest.fn(),
    };

    mounted = mount(
      <Select {...props}>
        <option>Option 1</option>
        <option>Option2</option>
      </Select>
    );
  });

  it('renders the component', () => {
    expect(mounted.find(Select).length).toBe(1);
  });

  it('attaches an onChange handler', () => {
    const select = mounted.find('select');
    const event = { target: { value: 'foo' } };
    select.simulate('change', event);
  });

  it('renders children', () => {
    expect(mounted.find('option').length).toBe(2);
  });

  it('renders a select-container', () => {
    expect(mounted.find('.slds-select_container select').length).toBe(1);
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('select').props().required).toBeTruthy();
  });

  it('renders disabled', () => {
    mounted.setProps({ disabled: true });
    expect(mounted.find('select').props().disabled).toBeTruthy();
  });

  it('renders multiple', () => {
    mounted.setProps({ multiple: true });
    expect(mounted.find('div.slds-select_container').length).toBe(0);
    expect(mounted.find('select').props().multiple).toBeTruthy();
  });

  it('hides the label', () => {
    mounted.setProps({ hideLabel: true });
    expect(mounted.find('label.slds-assistive-text').length).toBe(1);
  });

  it('labels the select with an error', () => {
    mounted.setProps({ error: 'shit' });
    const hash = getUniqueHash('shit', props.id);
    expect(mounted.find('select').prop('aria-describedby')).toEqual(hash);
  });

  it('hides the error message', () => {
    mounted.setProps({ error: 'shit', hideErrorMessage: true });
    expect(mounted.find('.slds-form-element__help').length).toEqual(0);
    expect(mounted.find('select').prop('aria-describedby')).toEqual(null);
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('select').hasClass('foo')).toBeTruthy();
    expect(mounted.find('select').prop('data-test')).toEqual('bar');
  });
});
