jest.unmock('../FormElement');

import React from 'react';
import { mount } from 'enzyme';
import FormElement from '../FormElement';

describe('<FormElement />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  beforeEach(() => {
    mounted = mount(<FormElement>{child}</FormElement>);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.form-element').contains(child)).toBeTruthy();
  });

  it('renders errors', () => {
    mounted.setProps({ error: 'string' });
    expect(mounted.find('.form-element').hasClass('has-error')).toBeTruthy();
  });

  it('renders required', () => {
    mounted.setProps({ required: true });
    expect(mounted.find('.form-element').hasClass('is-required')).toBeTruthy();
  });

  it('renders data-attributes', () => {
    mounted.setProps({ 'data-scope': 'foo', 'data-select': 'bar' });
    expect(mounted.find('.form-element[data-select="bar"][data-scope="foo"]').length).toBe(1);
  });
});
