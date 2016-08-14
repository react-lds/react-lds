jest.unmock('../Box');

import React from 'react';
import { mount } from 'enzyme';
import Box from '../Box';

describe('<Box />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(<Box />);
  });

  it('renders the correct markup', () => {
    mounted.setProps({ theme: 'warning' });
    expect(mounted.find('.box').hasClass('theme--warning')).toBeTruthy();
  });

  it('renders children', () => {
    const child = <div className="foo">bar</div>;
    mounted.setProps({ children: child });

    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders different sizes', () => {
    mounted.setProps({ size: 'small' });
    expect(mounted.find('.box').hasClass('box--small')).toBeTruthy();
  });
});
