import React from 'react';
import { mount } from 'enzyme';

import RecordHome from '../RecordHome';
import ObjectHome from '../ObjectHome';

describe('<RecordHome />', () => {
  let mounted;

  beforeEach(() => {
    mounted = mount(
      <RecordHome
        icon={{ sprite: 'utility', icon: 'unicornz' }}
        title="foo"
        recordType="unicornz"
        headerButtons="button123"
        detailItems={[
          { title: 'detail1', content: 'detailcontent1' },
          { title: 'detail2', content: 'detailcontent2' },
        ]}
      />
    );
  });

  it('passes down props to ObjectHome', () => {
    expect(mounted.find(ObjectHome).prop('icon')).toEqual({ sprite: 'utility', icon: 'unicornz' });
    expect(mounted.find(ObjectHome).prop('title')).toEqual('foo');
    expect(mounted.find(ObjectHome).prop('recordType')).toEqual('unicornz');
    expect(mounted.find(ObjectHome).prop('topButtons')).toEqual('button123');
    mounted.setProps({ bottomButtons: 'abc', titleMenu: 'foo' });
    expect(mounted.find(ObjectHome).prop('bottomButtons')).toBeNull();
    expect(mounted.find(ObjectHome).prop('titleMenu')).toBeNull();
  });

  it('contains detail items', () => {
    const detailItems = mounted.find('li.slds-page-header__detail-block');
    expect(detailItems.length).toEqual(2);
    expect(detailItems.first().find('div.slds-text-title').text()).toEqual('detail1');
    expect(detailItems.first().find('div[title="detailcontent1"]').text()).toEqual('detailcontent1');
    expect(detailItems.at(1).find('div.slds-text-title').text()).toEqual('detail2');
    expect(detailItems.at(1).find('div[title="detailcontent2"]').text()).toEqual('detailcontent2');
  });

  it('applies className and rest-properties', () => {
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-page-header').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-page-header').prop('data-test')).toEqual('bar');
  });
});
