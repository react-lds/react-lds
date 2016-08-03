jest.unmock('../FormElement');

import React from 'react';
import { mount } from 'enzyme';
import FormElement from '../FormElement';

describe('<FormElement />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(
      <FormElement><div className="foo"></div></FormElement>,
      { context: { assetBasePath: '/' }, childContextTypes: { assetBasePath: React.PropTypes.string } }
    );
  });

  it('renders children', () => {
    expect(mounted.find('.foo').length).toBe(1);
  });

  it('renders errors', () => {
    mounted.setProps({ error: 'string' });
    expect(mounted.find('.form-element').hasClass('has-error')).toBeTruthy();
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('.form-element').hasClass('is-required')).toBeTruthy();
  });
});
