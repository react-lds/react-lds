import React from 'react';
import { shallow } from 'enzyme';

import Table from '../Table';

describe('<Table />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = shallow(<Table />);
  });

  it('renders a table', () => {
    expect(mounted.find('.slds-table').length).toBe(1);
  });

  it('renders children', () => {
    const child = <tbody className="foo" />;
    mounted.setProps({ children: child });
    expect(mounted.find('table').contains(child)).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('table').hasClass('foo')).toBeTruthy();
    expect(mounted.find('table').prop('data-test')).toEqual('bar');
  });

  it('applies flavors', () => {
    mounted.setProps({ flavor: 'bordered' });
    expect(mounted.find('table').hasClass('slds-table_bordered')).toBeTruthy();
    mounted.setProps({ flavor: ['bordered', 'col-bordered'] });
    expect(mounted.find('table').hasClass('slds-table_bordered')).toBeTruthy();
    expect(mounted.find('table').hasClass('slds-table_col-bordered')).toBeTruthy();
  });

  it('applies variations', () => {
    mounted.setProps({ variation: 'no-row-hover' });
    expect(mounted.find('table').hasClass('slds-no-row-hover')).toBeTruthy();
    mounted.setProps({ variation: ['no-row-hover', 'max-medium-table_stacked'] });
    expect(mounted.find('table').hasClass('slds-no-row-hover')).toBeTruthy();
    expect(mounted.find('table').hasClass('slds-max-medium-table_stacked')).toBeTruthy();
  });
});
