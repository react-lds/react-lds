import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import FormElementControl from '../FormElementControl';

describe('<FormElementControl />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<FormElementControl>{child}</FormElementControl>, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-form-element__control').contains(child)).toBeTruthy();
  });

  it('renders left icon', () => {
    mounted.setProps({ hasIconLeft: true });
    expect(mounted.hasClass('slds-input-has-icon--right')).toBeFalsy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon')).toBeTruthy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon--left')).toBeTruthy();
  });

  it('renders right icon', () => {
    mounted.setProps({ hasIconRight: true });
    expect(mounted.hasClass('slds-input-has-icon--left')).toBeFalsy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon')).toBeTruthy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon--right')).toBeTruthy();
  });

  it('renders left and right icon together', () => {
    mounted.setProps({ hasIconLeft: true, hasIconRight: true });
    expect(mounted.hasClass('slds-input-has-icon--right')).toBeFalsy();
    expect(mounted.hasClass('slds-input-has-icon--left')).toBeFalsy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon')).toBeTruthy();
    expect(mounted.find('.slds-form-element__control').hasClass('slds-input-has-icon--left-right')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-form-element__control').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-form-element__control').prop('data-test')).toEqual('bar');
  });
});
