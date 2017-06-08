import React from 'react';
import { mount } from 'enzyme';

import FormElementLabel from '../FormElementLabel';

describe('<FormElementLabel />', () => {
  let mounted = null;
  let props = {};

  beforeEach(() => {
    props = {
      id: 'input-it',
      label: 'Input Label',
    };

    mounted = mount(<FormElementLabel {...props} />);
  });

  it('renders the for-attribute', () => {
    expect(mounted.find(`label[htmlFor="${props.id}"]`).length).toBe(1);
  });

  it('renders the label', () => {
    expect(mounted.find('.slds-form-element__label label').text()).toEqual(props.label);
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('.slds-form-element__label abbr.slds-required').length).toBe(1);
  });

  it('renders as a span', () => {
    mounted.setProps({ readOnly: true });
    expect(mounted.find('.slds-form-element__label label').length).toBe(0);
    expect(mounted.find('.slds-form-element__label span').length).toBe(1);
  });

  it('renders as a legend', () => {
    mounted.setProps({ legend: true });
    expect(mounted.find('.slds-form-element__label label').length).toBe(0);
    expect(mounted.find('legend').length).toBe(1);
  });

  it('renders as assistive text', () => {
    mounted.setProps({ hideLabel: true });
    expect(mounted.find('.slds-form-element__label').hasClass('slds-assistive-text')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-form-element__label').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-form-element__label').prop('data-test')).toEqual('bar');
  });
});
