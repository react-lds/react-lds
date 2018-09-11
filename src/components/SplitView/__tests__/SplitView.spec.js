import React from 'react';
import { mount } from 'enzyme';

import { SplitView } from '../';

const renderSplitView = (initialIsOpen = false) => (
  <SplitView
    id="split-view-default"
    initialIsOpen={initialIsOpen}
    detail={(
      <div className="detail-view" />
    )}
    master={(
      <div className="master-view" />
    )}
  />
);

describe('<SplitView />', () => {
  it('renders the correct markup for closed state', () => {
    const mounted = mount(renderSplitView());
    const toggleButton = mounted.find('.slds-split-view__toggle-button');

    expect(mounted.find('.slds-split-view_container').exists()).toBe(true);
    expect(mounted.find('.slds-split-view_container').hasClass('slds-is-closed')).toBeTruthy();
    expect(toggleButton.exists()).toBe(true);
    expect(toggleButton.hasClass('slds-is-open')).toBe(false);
    expect(mounted.find('.slds-split-view').exists()).toBe(false);
    expect(mounted.find('.master-view').exists()).toBe(false);
    expect(mounted.find('.detail-view').exists()).toBe(true);
  });

  it('renders the correct markup for opened state', () => {
    const mounted = mount(renderSplitView(true));
    const toggleButton = mounted.find('.slds-split-view__toggle-button');

    expect(mounted.find('.slds-split-view_container').exists()).toBe(true);
    expect(mounted.find('.slds-split-view_container').hasClass('slds-is-open')).toBeTruthy();
    expect(toggleButton.exists()).toBe(true);
    expect(toggleButton.hasClass('slds-is-open')).toBe(true);
    expect(mounted.find('.slds-split-view').exists()).toBe(true);
    expect(mounted.find('.master-view').exists()).toBe(true);
    expect(mounted.find('.detail-view').exists()).toBe(true);
  });
});
