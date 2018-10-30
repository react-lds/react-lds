import React from 'react';
import { mount } from 'enzyme';

import MenuSubHeader from '../MenuSubHeader';

describe('<MenuSubHeader />', () => {
  let mounted = null;

  beforeEach(() => {
    mounted = mount(<MenuSubHeader>foobar</MenuSubHeader>);
  });

  it('renders correct classes', () => {
    expect(mounted.find('li > span').hasClass('slds-text-title_caps')).toBeTruthy();
    expect(mounted.find('li.slds-dropdown__header').hasClass('slds-truncate')).toBeTruthy();
  });

  it('renders divider', () => {
    mounted.setProps({ divider: true });
    expect(mounted.find('li').hasClass('slds-has-divider_top-space')).toBeTruthy();
  });

  it('allows a react element as child', () => {
    const sampleChild = <span>Sample</span>;
    mounted.setProps({ children: sampleChild });
    expect(mounted.contains(sampleChild)).toBeTruthy();
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-dropdown__header').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-dropdown__header').prop('data-test')).toEqual('bar');
  });
});
