import React from 'react';
import { mount } from 'enzyme';
import SetupAssistantItem from '../SetupAssistantItem';
import { SummaryDetail } from '../../SummaryDetail';

const getSetupAssistantItem = (props = {}) => mount(<SetupAssistantItem title="Item" {...props} />);

describe('<SetupAssistantItem />', () => {
  it('accepts a children prop and renders it in an ol', () => {
    const mounted = getSetupAssistantItem();
    expect(
      mounted
        .find('li.slds-setup-assistant__item > article.slds-setup-assistant__step')
        .find(SummaryDetail)
        .exists()
    ).toBeTruthy();
  });

  it('passes the correct args to renderOpenContent', () => {
    const renderOpenContent = jest.fn();

    getSetupAssistantItem({ isOpen: true, renderOpenContent });

    expect(renderOpenContent).toHaveBeenCalledWith({ isOpen: true });
  });
});
