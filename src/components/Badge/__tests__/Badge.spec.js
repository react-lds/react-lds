import React from 'react';
import { shallow } from 'enzyme';

import { Badge } from '../Badge';

describe('<Badge />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = shallow(<Badge label="Foo" />);
  });

  it('renders a label', () => {
    expect(mounted.hasClass('slds-badge')).toBeTruthy();
    expect(mounted.text()).toBe('Foo');
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-badge').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-badge').prop('data-test')).toEqual('bar');
  });
});
