import React from 'react';
import { shallow } from 'enzyme';

import { Cell } from '../Cell';

describe('<Cell />', () => {
  let mounted = null;

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const trow = document.createElement('tr');

  beforeEach(() => {
    const frag = table.appendChild(tbody).appendChild(trow);

    mounted = shallow(<Cell />, { attachTo: frag });
  });

  it('renders as a td by default', () => {
    expect(mounted.find('td').length).toBe(1);
  });

  it('renders as  a th if scope is passed', () => {
    mounted.setProps({ scope: 'col' });
    expect(mounted.find('th').length).toBe(1);
  });

  it('renders children', () => {
    const child = <span key="spankey" className="foo" />;
    mounted.setProps({ children: child });
    expect(mounted.find('td').contains(child)).toBeTruthy();
  });

  it('renders a title if present', () => {
    mounted.setProps({ title: 'Title' });
    expect(mounted.find('td').prop('title')).toEqual('Title');
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
    const child = <span key="test">text</span>;
    mounted.setProps({ children: child });
    expect(mounted.find('td').prop('title')).toEqual('text');
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('td').hasClass('foo')).toBeTruthy();
    expect(mounted.find('td').prop('data-test')).toEqual('bar');
  });

  it('truncates the cell content by default', () => {
    expect(mounted.find('.slds-truncate').length).toBe(1);
  });

  it('won\'t truncate if truncate prop is set to false', () => {
    mounted.setProps({ truncate: false });
    expect(mounted.find('.slds-truncate').length).toBe(0);
  });
});
