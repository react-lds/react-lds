import React from 'react';
import { shallow } from 'enzyme';

import DataCell from '../DataCell';

describe('<DataCell />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = shallow(<DataCell />);
  });

  it('renders as a td by default', () => {
    expect(mounted.find('td').length).toBe(1);
  });

  it('renders a title if present', () => {
    mounted.setProps({ title: 'Title' });
    expect(mounted.find('td').prop('title')).toEqual('Title');
  });

  it('uses the custom renderer if present', () => {
    mounted.setProps({
      dataKey: 'foo',
      value: 'bar',
      renderer: (dataKey, value) => <span title={dataKey}>{value}</span>,
    });
    expect(mounted.find('span').prop('title')).toEqual('foo');
    expect(mounted.find('span').text()).toEqual('bar');
  });

  it('sets scope if a scope is present', () => {
    mounted.setProps({ scope: 'col' });
    expect(mounted.find('td').prop('scope')).toEqual('col');
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('td').hasClass('foo')).toBeTruthy();
    expect(mounted.find('td').prop('data-test')).toEqual('bar');
  });
});
