jest.unmock('../MediaObjectFigure');

import React from 'react';
import { shallow } from 'enzyme';
import MediaObjectFigure from '../MediaObjectFigure';

describe('<MediaObjectFigure />', () => {
  it('has `slds-media__figure`-class', () => {
    const wrapper = shallow(<MediaObjectFigure />);
    expect(wrapper.hasClass('slds-media__figure')).toBeTruthy();
  });

  it('accepts reverse-modifier', () => {
    const wrapper = shallow(<MediaObjectFigure reverse />);
    expect(wrapper.hasClass('slds-media__figure--reverse')).toBeTruthy();
  });

  it('does not have modifiers by default', () => {
    const wrapper = shallow(<MediaObjectFigure />);
    expect(wrapper.hasClass('slds-media--reverse')).toBeFalsy();
  });

  it('renders children', () => {
    const wrapper = shallow(<MediaObjectFigure><div className="foo"></div></MediaObjectFigure>);
    expect(wrapper.contains(<div className="foo"></div>)).toBeTruthy();
  });
});
