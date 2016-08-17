jest.unmock('../Avatar');

import React from 'react';
import { mount } from 'enzyme';
import Avatar from '../Avatar';

describe('<Avatar />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/assets' };
  const childContextTypes = { assetBasePath: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      src: 'foo',
      alt: 'bar',
    };

    mounted = mount(<Avatar {...props} />, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.avatar').length).toBe(1);
    expect(mounted.find('img').length).toBe(1);
  });

  it('renders different sizes', () => {
    mounted.setProps({ size: 'large' });
    expect(mounted.find('.avatar').first().hasClass('avatar--large')).toBeTruthy();
  });

  it('renders a src', () => {
    expect(mounted.find('img').first().props().src).toBe(`${context.assetBasePath}/${props.src}`);
  });

  it('renders an alt', () => {
    expect(mounted.find('img').first().props().alt).toBe(props.alt);
  });

  it('renders an empty avatar', () => {
    mounted.setProps({ src: undefined, alt: undefined });
    expect(mounted.find('img').length).toBe(0);
    expect(mounted.find('.avatar').hasClass('avatar--empty')).toBeTruthy();
  });
});
