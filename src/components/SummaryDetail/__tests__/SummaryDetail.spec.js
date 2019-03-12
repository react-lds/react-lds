import React from 'react';
import { shallow } from 'enzyme';

import SummaryDetail from '../SummaryDetail';
import { IconButton } from '../../Button';

const getSummaryDetail = (props = {}) => shallow(<SummaryDetail title="Moo" {...props} />);

describe('<SummaryDetail />', () => {
  it('renders the title', () => {
    const mounted = getSummaryDetail();

    expect(mounted.find(
      'div.slds-summary-detail > div > .slds-summary-detail__title > h3.slds-text-heading_small.slds-truncate'
    ).text()).toEqual('Moo');
  });

  it('renders the title when provided as function', () => {
    const mounted = getSummaryDetail({ renderTitle: title => <span>{title}</span> });

    expect(mounted.find(
      'div.slds-summary-detail > div > .slds-summary-detail__title > span'
    ).text()).toEqual('Moo');
  });

  it('renders the expand icon when onOpen is provided', () => {
    const mounted = getSummaryDetail({ onOpen: () => {} });

    expect(mounted.find('div.slds-summary-detail').find(IconButton).exists()).toBeTruthy();
  });

  it('does not render the expand icon when onOpen is not provided', () => {
    const mounted = getSummaryDetail({ onOpen: null });

    expect(mounted.find(IconButton).exists()).toBeFalsy();
  });
});
