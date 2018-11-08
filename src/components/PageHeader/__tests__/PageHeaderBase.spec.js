import React from 'react';
import { mount } from 'enzyme';

import PageHeaderBase from '../PageHeaderBase';

describe('<PageHeaderBase />', () => {
  let mounted;

  beforeEach(() => {
    mounted = mount(<PageHeaderBase title="test" info="foo" icon={{ sprite: 'standard', icon: 'opportunity' }} />);
  });

  it('contains the title', () => {
    expect(mounted.find('h1 .slds-page-header__title').text()).toEqual('test');
  });

  it('contains info', () => {
    expect(mounted.find('.slds-page-header__name-meta').text()).toEqual('foo');
  });

  it('renders the icon', () => {
    expect(mounted.find('svg').length).toEqual(1);
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-page-header').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-page-header').prop('data-test')).toEqual('bar');
  });
});
