jest.unmock('../FormElementControl');

import React from 'react';
import { shallow } from 'enzyme';
import FormElementControl from '../FormElementControl';

describe('<FormElementControl />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
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
});
