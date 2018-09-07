import React from 'react';
import { shallow } from 'enzyme';

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
    const mounted = shallow(renderSplitView());

    expect(mounted.find('.slds-split-view_container').length).toBe(1);
    expect(mounted.find('.slds-split-view_container').hasClass('slds-is-closed')).toBeTruthy();
    expect(mounted.find('.slds-split-view').length).toBe(0);
    expect(mounted.find('.master-view').length).toBe(0);
    expect(mounted.find('.detail-view').length).toBe(1);
  });

  it('renders the correct markup for opened state', () => {
    const mounted = shallow(renderSplitView(true));

    expect(mounted.find('.slds-split-view_container').length).toBe(1);
    expect(mounted.find('.slds-split-view_container').hasClass('slds-is-open')).toBeTruthy();
    expect(mounted.find('.slds-split-view').length).toBe(1);
    expect(mounted.find('.master-view').length).toBe(1);
    expect(mounted.find('.detail-view').length).toBe(1);
  });
});
