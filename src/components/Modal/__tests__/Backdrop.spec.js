import React from 'react';
import { shallow } from 'enzyme';

import { Backdrop } from '../Backdrop';

describe('<Backdrop />', () => {
  let mounted = null;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<Backdrop />, options);
  });

  it('renders the correct markup', () => {
    expect(mounted.hasClass('slds-backdrop')).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-backdrop').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-backdrop').prop('data-test')).toEqual('bar');
  });
});
