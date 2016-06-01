jest.unmock('../MediaObjectBody');

import React from 'react';
import { shallow } from 'enzyme';
import MediaObjectBody from '../MediaObjectBody';

describe('<MediaObjectBody />', () => {
  it('has `slds-media__body`-class', () => {
    const wrapper = shallow(<MediaObjectBody />);
    expect(wrapper.hasClass('slds-media__body')).toBeTruthy();
  });

  it('renders children', () => {
    const wrapper = shallow(<MediaObjectBody><div className="foo"></div></MediaObjectBody>);
    expect(wrapper.contains(<div className="foo"></div>)).toBeTruthy();
  });
});
