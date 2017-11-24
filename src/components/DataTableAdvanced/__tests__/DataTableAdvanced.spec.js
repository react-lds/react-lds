import React from 'react';
import { shallow } from 'enzyme';

import { DataTableAdvanced } from '../DataTableAdvanced';

describe('<DataTableAdvanced />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = shallow(<DataTableAdvanced data={[]} />);
  });

  it('renders a table', () => {
    expect(mounted.find('.slds-table')).toHaveLength(1);
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('table').hasClass('foo')).toBeTruthy();
    expect(mounted.find('table').prop('data-test')).toEqual('bar');
  });
});
