import React from 'react';
import { shallow } from 'enzyme';

import SummaryDetail from '../SummaryDetail';

const getSummaryDetail = (props = {}) => shallow(<SummaryDetail {...props} />);

describe('<SummaryDetail />', () => {
  it('renders the title', () => {
    const mounted = getSummaryDetail({ title: 'Moo' });

    expect(mounted.find(
      'div.slds-summary-detail > div > .slds-summary-detail__title > h3.slds-text-heading_small.slds-truncate'
    ).text()).toEqual('Moo');
  });

  it('renders the title when provided as function', () => {
    const mounted = getSummaryDetail({ renderTitle: () => 'Woo' });

    expect(mounted.find(
      'div.slds-summary-detail > div > .slds-summary-detail__title'
    ).text()).toEqual('Woo');
  });

  it('renders the children when isOpen is true', () => {
    const mounted = getSummaryDetail({
      isOpen: true,
      children: () => <div className="children">Title</div>,
    });

    expect(mounted.find(
      'div.slds-summary-detail > div > .slds-summary-detail__content > .children'
    ).exists()).toBeTruthy();
  });

  it('does not render the children when open is false', () => {
    const mounted = getSummaryDetail({
      children: () => <div className="children">Title</div>,
    });

    expect(mounted.find(
      'div.slds-summary-detail > div > .slds-summary-detail__content > .children'
    ).exists()).toBeFalsy();
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
