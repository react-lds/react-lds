import React from 'react';
import { shallow } from 'enzyme';

import DataRow from '../DataRow';

describe('<DataRow />', () => {
  let mounted = null;

  beforeEach(() => {
    const props = {
      columns: [],
      rowData: {},
      rowIndex: 0,
    };

    mounted = shallow(<DataRow {...props} />);
  });

  it('renders without crashing', () => {
    expect(mounted.find('tr')).toHaveLength(1);
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('tr').hasClass('foo')).toBeTruthy();
    expect(mounted.find('tr').prop('data-test')).toEqual('bar');
  });
});
