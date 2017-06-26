import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import { Avatar } from '../Avatar';

describe('<Avatar />', () => {
  let mounted = null;
  let props = {};

  const context = { assetBasePath: '/' };
  const childContextTypes = { assetBasePath: PropTypes.string };
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
    expect(mounted.find('img').first().props().src).toBe(props.src);
  });

  it('renders an alt', () => {
    expect(mounted.find('img').first().props().alt).toBe(props.alt);
  });

  it('renders an empty avatar', () => {
    mounted.setProps({ src: undefined, alt: undefined });
    expect(mounted.find('img').length).toBe(0);
    expect(mounted.find('.slds-avatar').hasClass('slds-avatar--empty')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-avatar').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-avatar').prop('data-test')).toEqual('bar');
  });
});
