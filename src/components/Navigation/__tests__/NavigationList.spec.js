import React from 'react';
import { shallow } from 'enzyme';

import NavigationList from '../NavigationList';

describe('<NavigationList />', () => {
  let mounted = null;

  const child = <div className="child">child</div>;

  beforeEach(() => {
    mounted = shallow(<NavigationList id="test-id" title="super headline">{child}</NavigationList>);
  });

  it('headline has id', () => {
    expect(mounted.find('h2').prop('id')).toEqual('test-id');
  });

  it('headline is in h2', () => {
    expect(mounted.find('h2').contains('super headline')).toBeTruthy();
  });

  it('adds classNames', () => {
    expect(mounted.find('h2').prop('className')).toEqual('slds-text-title_caps slds-p-around_medium');
  });

  it('adds aria-describedby from id in child', () => {
    expect(mounted.find('.child').prop('aria-describedby')).toEqual('test-id');
  });
});
