jest.unmock('../Breadcrumb');

import React from 'react';
import { mount } from 'enzyme';
import Breadcrumb from '../Breadcrumb';

describe('<Breadcrumb />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(<Breadcrumb />);
  });

  it('renders the correct markup', () => {
    expect(mounted.find('nav[role="navigation"] > .breadcrumb').length).toBe(1);
  });

  it('renders a single child', () => {
    const child = <a href="#" key="id-1">foobar</a>;
    mounted.setProps({ children: child });

    expect(mounted.find('li.breadcrumb__item').contains(child)).toBeTruthy();
  });

  it('renders multiple children', () => {
    const children = [
      <a href="#" key="id-1">foobar</a>,
      <a href="#" key="id-2">foobar2</a>,
    ];
    mounted.setProps({ children });

    const lis = mounted.find('li.breadcrumb__item');
    expect(lis.length).toEqual(2);
    expect(lis.first().contains(children[0])).toBeTruthy();
    expect(lis.at(1).contains(children[1])).toBeTruthy();
  });
});
