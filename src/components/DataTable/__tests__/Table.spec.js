jest.unmock('../Table');

import React from 'react';
import { mount } from 'enzyme';
import Table from '../Table';

describe('<Table />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(<Table />);
  });

  it('renders a table', () => {
    expect(mounted.find('.table').length).toBe(1);
  });

  it('renders children', () => {
    const child = <tbody className="foo" />;
    mounted.setProps({ children: child });
    expect(mounted.find('table').contains(child)).toBeTruthy();
  });
});
