import React from 'react';
import { shallow } from 'enzyme';

import FormElement from '../FormElement';

describe('<FormElement />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  beforeEach(() => {
    mounted = shallow(<FormElement>{child}</FormElement>);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-form-element').contains(child)).toBeTruthy();
  });

  it('renders errors', () => {
    mounted.setProps({ error: 'string' });
    expect(mounted.find('.slds-form-element').hasClass('slds-has-error')).toBeTruthy();
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('.slds-form-element').hasClass('slds-is-required')).toBeTruthy();
  });

  it('renders as a fieldset', () => {
    expect(mounted.find('div.slds-form-element').length).toBe(1);
    mounted.setProps({ fieldset: true });
    expect(mounted.find('fieldset.slds-form-element').length).toBe(1);
  });

  it('renders a static version', () => {
    mounted.setProps({ isStatic: true });
    expect(mounted.find('.slds-form-element').hasClass('slds-form-element_readonly')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-form-element').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-form-element').prop('data-test')).toEqual('bar');
  });
});
