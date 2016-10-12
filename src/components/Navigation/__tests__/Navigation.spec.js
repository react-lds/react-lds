import React from 'react';
import { shallow } from 'enzyme';

import { Navigation } from '../Navigation';

describe('<Navigation />', () => {
  let mounted = null;
  const child = <div className="foo" />;

  const context = { cssPrefix: 'slds-' };
  const childContextTypes = { cssPrefix: React.PropTypes.string };
  const options = { context, childContextTypes };

  beforeEach(() => {
    mounted = shallow(<Navigation>{child}</Navigation>, options);
  });

  it('contains children', () => {
    expect(mounted.contains(child)).toBeTruthy();
  });

  it('is vertical grid', () => {
    expect(mounted.prop('vertical')).toEqual(true);
  });

  it('inserts className prop', () => {
    mounted.setProps({ className: 'blubb' });
    expect(mounted.find('Variationed_Flavored_Grid').prop('className')).toEqual('blubb');
  });
});
