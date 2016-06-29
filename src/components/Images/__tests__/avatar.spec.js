jest.unmock('../Avatar');

import React from 'react';
import { mount } from 'enzyme';
import Avatar from '../Avatar';

describe('<Avatar>', () => {
  const context = { assetBasePath: '' };
  it('should render the correct markup', () => {
    const wrapper = mount(<Avatar src="foo" alt="bar" size="large" />, { context });
    expect(wrapper.find('.avatar').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
  });

  it('should accept a size', () => {
    const wrapper = mount(<Avatar src="foo" alt="bar" size="large" />, { context });
    expect(wrapper.find('.avatar').first().hasClass('avatar--large')).toBeTruthy();
  });

  it('should accept a src', () => {
    const wrapper = mount(<Avatar src="foo" alt="bar" />, { context });
    expect(wrapper.find('img').first().props().src).toBe('foo');
  });

  it('should render an empty avatar', () => {
    const wrapper = mount(<Avatar />, { context });
    expect(wrapper.find('img').length).toBe(0);
    expect(wrapper.find('.avatar').hasClass('avatar--empty')).toBeTruthy();
  });

  it('should add an alt', () => {
    const wrapper = mount(<Avatar src="foo" alt="bar" />, { context });
    expect(wrapper.find('img').first().props().alt).toBe('bar');
  });
});
