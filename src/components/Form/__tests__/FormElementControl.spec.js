jest.unmock('../FormElementControl');

import React from 'react';
import { mount } from 'enzyme';
import FormElementControl from '../FormElementControl';

describe('<FormElementControl />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  beforeEach(() => {
    mounted = mount(<FormElementControl>{child}</FormElementControl>);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.form-element__control').contains(child)).toBeTruthy();
  });

  it('renders left icon', () => {
    mounted.setProps({ hasIconLeft: true });
    expect(mounted.hasClass('input-has-icon--right')).toBeFalsy();
    expect(mounted.find('.form-element__control').hasClass('input-has-icon')).toBeTruthy();
    expect(mounted.find('.form-element__control').hasClass('input-has-icon--left')).toBeTruthy();
  });

  it('renders right icon', () => {
    mounted.setProps({ hasIconRight: true });
    expect(mounted.hasClass('input-has-icon--left')).toBeFalsy();
    expect(mounted.find('.form-element__control').hasClass('input-has-icon')).toBeTruthy();
    expect(mounted.find('.form-element__control').hasClass('input-has-icon--right')).toBeTruthy();
  });

  it('renders left and right icon together', () => {
    mounted.setProps({ hasIconLeft: true, hasIconRight: true });
    expect(mounted.hasClass('input-has-icon--right')).toBeFalsy();
    expect(mounted.hasClass('input-has-icon--left')).toBeFalsy();
    expect(mounted.find('.form-element__control').hasClass('input-has-icon')).toBeTruthy();
    expect(mounted.find('.form-element__control').hasClass('input-has-icon--left-right')).toBeTruthy();
  });
});
