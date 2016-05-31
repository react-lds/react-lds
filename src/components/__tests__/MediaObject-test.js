jest.unmock('../MediaObject');

import React from 'react';
import { shallow } from 'enzyme';
import MediaObject from '../MediaObject';

describe('<MediaObject />', () => {
  it('contains a `.slds-media__figure` and a `.slds-media__body`>', () => {
    expect(shallow(<MediaObject />).find('.slds-media__figure').length).toBe(1);
  });

  it('renders the figure', () => {
    const wrapper = shallow(<MediaObject figure={<div className="foo"/>} />);
    expect(wrapper.find('.slds-media__figure').contains(<div className="foo" />)).toBeTruthy();
  });

  it('renders children into body', () => {
    const wrapper = shallow(
      <MediaObject>
        <div className="foo" />
      </MediaObject>
    );

    expect(wrapper.find('.slds-media__body').contains(<div className="foo" />)).toBeTruthy();
  });
});
