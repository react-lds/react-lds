jest.unmock('../Breadcrumb');

import React from 'react';
import { mount } from 'enzyme';
import Breadcrumb from '../Breadcrumb';

describe('<Breadcrumb />', () => {
  it('renders a single child', () => {
    const child = <a href="#" key="id-1">foobar</a>;
    const comp = mount(<Breadcrumb>{child}</Breadcrumb>);
    expect(comp.find('li').contains(child)).toBeTruthy();
  });

  it('renders multiple children', () => {
    const children = [
      <a href="#" key="id-1">foobar</a>,
      <a href="#" key="id-2">foobar2</a>,
    ];
    const comp = mount(<Breadcrumb>{children}</Breadcrumb>);
    const lis = comp.find('li');
    expect(lis.length).toEqual(2);
    expect(comp.find('li').first().contains(children[0])).toBeTruthy();
    expect(comp.find('li').at(1).contains(children[1])).toBeTruthy();
  });
});
