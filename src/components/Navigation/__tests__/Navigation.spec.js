import React from 'react';
import { shallow } from 'enzyme';

import { Navigation } from '../Navigation';

describe('<Navigation />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  beforeEach(() => {
    mounted = shallow(<Navigation>{child}</Navigation>);
  });

  it('contains children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('is vertical grid', () => {
    expect(mounted.prop('vertical')).toEqual(true);
  });

  it('inserts className prop', () => {
    mounted.setProps({ className: 'blubb' });
    expect(mounted.find('Grid').prop('className')).toEqual('blubb');
  });
});
