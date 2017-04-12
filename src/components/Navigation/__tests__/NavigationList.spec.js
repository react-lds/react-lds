import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import NavigationList from '../NavigationList';

describe('<NavigationList />', () => {
  let mounted = null;

  const child = <div className="child">child</div>;
  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<NavigationList id="test-id" title="super headline">{child}</NavigationList>, options);
  });

  it('headline has id', () => {
    expect(mounted.find('h2').prop('id')).toEqual('test-id');
  });

  it('headline is in h2', () => {
    expect(mounted.find('h2').contains('super headline')).toBeTruthy();
  });

  it('adds classNames', () => {
    expect(mounted.find('h2').prop('className')).toEqual('slds-text-title--caps slds-p-around--medium');
  });

  it('adds aria-describedby from id in child', () => {
    expect(mounted.find('.child').prop('aria-describedby')).toEqual('test-id');
  });
});
