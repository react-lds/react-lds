jest.unmock('../Column');

import React from 'react';
import { mount } from 'enzyme';
import Column from '../Column';

describe('<Column />', () => {
  let mounted = null;
  let child = <div className="foo"></div>;

  beforeEach(() => {
    mounted = mount(<Column>{child}</Column>);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('.col').length).toBe(1);
  });

  it('renders children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('renders alignments', () => {
    mounted.setProps({ align: 'top' });
    expect(mounted.find('.col').hasClass('align-top')).toBeTruthy();
  });
});
