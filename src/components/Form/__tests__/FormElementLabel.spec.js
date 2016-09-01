import React from 'react';
import { mount } from 'enzyme';

import FormElementLabel from '../FormElementLabel';

jest.unmock('../FormElementLabel');

describe('<FormElementLabel />', () => {
  let mounted = null;
  let props = {};

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      id: 'input-it',
      label: 'Input Label',
    };

    mounted = mount(<FormElementLabel {...props} />, options);
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

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-form-element__label').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-form-element__label').prop('data-test')).toEqual('bar');
  });
});
