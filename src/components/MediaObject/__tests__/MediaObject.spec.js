jest.unmock('../MediaObject');

import React from 'react';
import { shallow } from 'enzyme';
import MediaObject from '../MediaObject';

describe('<MediaObject />', () => {
  it('has `slds-media`-class', () => {
    const wrapper = shallow(<MediaObject />);
    expect(wrapper.hasClass('slds-media')).toBeTruthy();
  });

  it('accepts reverse-modifier', () => {
    const wrapper = shallow(<MediaObject reverse />);
    expect(wrapper.hasClass('slds-media--reverse')).toBeTruthy();
  });

  it('accepts responsive-modifier', () => {
    const wrapper = shallow(<MediaObject responsive />);
    expect(wrapper.hasClass('slds-media--responsive')).toBeTruthy();
  });

  it('accepts center-modifier', () => {
    const wrapper = shallow(<MediaObject center />);
    expect(wrapper.hasClass('slds-media--center')).toBeTruthy();
  });

  it('accepts multiple modifiers', () => {
    const wrapper = shallow(<MediaObject center responsive reverse />);
    expect(wrapper.hasClass('slds-media--center')).toBeTruthy();
    expect(wrapper.hasClass('slds-media--responsive')).toBeTruthy();
    expect(wrapper.hasClass('slds-media--reverse')).toBeTruthy();
  });

  it('does not have modifiers by default', () => {
    const wrapper = shallow(<MediaObject />);
    expect(wrapper.hasClass('slds-media--center')).toBeFalsy();
    expect(wrapper.hasClass('slds-media--responsive')).toBeFalsy();
    expect(wrapper.hasClass('slds-media--reverse')).toBeFalsy();
  });

  it('renders children', () => {
    const wrapper = shallow(<MediaObject><div className="foo"></div></MediaObject>);
    expect(wrapper.contains(<div className="foo"></div>)).toBeTruthy();
  });
});
