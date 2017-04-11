import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import { Table } from '../Table';

describe('<Table />', () => {
  let mounted = null;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<Table />, options);
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
});
