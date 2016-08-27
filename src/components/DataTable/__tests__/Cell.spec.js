jest.unmock('../Cell');

import React from 'react';
import { shallow } from 'enzyme';
import { Cell } from '../Cell';

describe('<Cell />', () => {
  let mounted = null;

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const trow = document.createElement('tr');

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    const frag = table.appendChild(tbody).appendChild(trow);
    options.attachTo = frag;

    mounted = shallow(<Cell />, options);
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
});
