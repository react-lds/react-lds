jest.unmock('../Table');

import React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../Table';

describe('<Table />', () => {
  let mounted = null;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
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
});
