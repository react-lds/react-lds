import React from 'react';
import { shallow } from 'enzyme';

import NavigationListElement from '../NavigationListElement';

describe('<NavigationListElement />', () => {
  let mounted = null;
  const child = <a>Some Link</a>;

  beforeEach(() => {
    mounted = shallow(<NavigationListElement>{child}</NavigationListElement>);
  });

  it('renders child with additional classNames', () => {
    const mountedChild = mounted.find('a').first();
    expect(mountedChild.prop('className')).toEqual('slds-navigation-list--vertical__action slds-text-link--reset');
  });

  it('sets active class', () => {
    mounted.setProps({ active: true });
    expect(mounted.prop('className')).toEqual('slds-is-active');
  });
});
