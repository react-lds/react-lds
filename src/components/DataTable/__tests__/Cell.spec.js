jest.unmock('../Cell');

import React from 'react';
import { mount } from 'enzyme';
import Cell from '../Cell';

describe('<Cell />', () => {
  let mounted = null;

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const trow = document.createElement('tr');

  beforeEach(() => {
    const frag = table.appendChild(tbody).appendChild(trow);
    mounted = mount(<Cell />, { attachTo: frag });
  });

  it('renders as a td by default', () => {
    expect(mounted.find('td').length).toBe(1);
  });

  it('renders as  a th if scope is passed', () => {
    mounted.setProps({ scope: 'col' });
    expect(mounted.find('th').length).toBe(1);
  });

  it('renders children', () => {
    const child = <span className="foo" />;
    mounted.setProps({ children: child });
    expect(mounted.find('td').contains(child)).toBeTruthy();
  });

  it('renders a title if present', () => {
    mounted.setProps({ title: 'Title' });
    expect(mounted.find('td').prop('title')).toEqual('Title');
  });

  it('renders a data-label attribute', () => {
    mounted.setProps({ dataLabel: 'label' });
    expect(mounted.find('td').prop('data-label')).toEqual('label');
  });

  it('sets scope if a scope is present', () => {
    mounted.setProps({ scope: 'col' });
    expect(mounted.find('th').prop('scope')).toEqual('col');
  });

  it('sets the children text as title if no title-props is found', () => {
    const child = 'text';
    mounted.setProps({ children: child });
    expect(mounted.find('td').prop('title')).toEqual(child);
  });

  it('sets the grandchildren text as title if no title-props is found', () => {
    const child = <span>text</span>;
    mounted.setProps({ children: child });
    expect(mounted.find('td').prop('title')).toEqual('text');
  });
});
