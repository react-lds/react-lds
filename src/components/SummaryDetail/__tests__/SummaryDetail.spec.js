import React from 'react';
import { shallow } from 'enzyme';

import SummaryDetail from '../SummaryDetail';

const getSummaryDetail = (props = {}) => shallow(<SummaryDetail {...props} />);

describe('<SummaryDetail />', () => {
  it('renders the title', () => {
    const mounted = getSummaryDetail({ children: <div className="title">Title</div> });

    expect(mounted.find(
      'div.slds-summary-detail > div > .slds-summary-detail__title > .title'
    ).exists()).toBeTruthy();
  });

  it('renders the content when open', () => {
    const renderOpenContent = () => <div className="open">open</div>;
    const mounted = getSummaryDetail({ isOpen: true, renderOpenContent });

    expect(mounted.find(
      'div.slds-summary-detail > div > .slds-summary-detail__content > .open'
    ).exists()).toBeTruthy();
  });

  it('does not render the content when open is false', () => {
    const renderOpenContent = () => <div className="open">open</div>;
    const mounted = getSummaryDetail({ isOpen: false, renderOpenContent });

    expect(mounted.find('.open').exists()).toBeFalsy();
  });

  it('does not render the content when renderOpenContent is not provided', () => {
    const mounted = getSummaryDetail({ isOpen: true, renderOpenContent: null });

    expect(mounted.find('.slds-summary-detail__content').exists()).toBeFalsy();
  });

  it('renders the expand icon when onOpen is provided', () => {
    const mounted = getSummaryDetail({ onOpen: () => {} });

    expect(mounted.find('div.slds-summary-detail > IconButton').exists()).toBeTruthy();
  });

  it('does not render the expand icon when onOpen is not provided', () => {
    const mounted = getSummaryDetail({ onOpen: null });

    expect(mounted.find('IconButton').exists()).toBeFalsy();
  });
});
