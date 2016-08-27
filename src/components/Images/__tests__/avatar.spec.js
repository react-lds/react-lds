import React from 'react';
import { shallow } from 'enzyme';

import { Avatar } from '../Avatar';

jest.unmock('../Avatar');

describe('<Avatar />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/', cssPrefix: 'slds-' };
  const childContextTypes = { assetBasePath: React.PropTypes.string, cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    props = {
      src: 'foo',
      alt: 'bar',
    };

    mounted = shallow(<Avatar {...props} />, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.slds-avatar').length).toBe(1);
    expect(mounted.find('img').length).toBe(1);
  });

  it('renders different sizes', () => {
    mounted.setProps({ size: 'large' });
    expect(mounted.find('.slds-avatar').first().hasClass('slds-avatar--large')).toBeTruthy();
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
    expect(mounted.find('.slds-avatar').hasClass('slds-avatar--empty')).toBeTruthy();
  });
});
