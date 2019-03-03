import React from 'react';
import { shallow } from 'enzyme';

import SetupAssistant from '../SetupAssistant';

const getSetupAssistant = (props = {}) => shallow(<SetupAssistant {...props} />);

describe('<SetupAssistant />', () => {
  it('accepts a children prop and renders it in an ol', () => {
    const mounted = getSetupAssistant({ children: <div className="child">Child</div> });
    expect(mounted.find('ol.slds-setup-assistant > .child').exists()).toBeTruthy();
  });
});
