jest.unmock('../Row');

import React from 'react';
import { mount } from 'enzyme';
import Row from '../Row';

describe('<Row />', () => {
  let mounted = null;

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  beforeEach(() => {
    const frag = table.appendChild(tbody);
    mounted = mount(<Row />, { attachTo: frag });
  });

  it('renders children', () => {
    const child = <td className="foo" />;
    mounted.setProps({ children: child });
    expect(mounted.find('tr').contains(child)).toBeTruthy();
  });

  it('adds a class for header rows', () => {
    mounted.setProps({ head: true });
    expect(mounted.find('tr').hasClass('text-heading--label')).toBeTruthy();
  });
});
